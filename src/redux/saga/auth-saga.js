import { put } from 'redux-saga/effects'
import * as actions from '../actions'
import { axiosFetch } from '../../HTTP/http'

export function* checkAuth(action) {
   console.log('CHECKING_AUTH', action.token)
   yield put({ type: actions.CHECKING_AUTH })
   const auth = yield axiosFetch(`/checkauth/${action.token}`, 'GET')
   if (auth.error) {
      localStorage.removeItem('token')
      return yield put({ type: actions.UNAUTH })
   }
   return yield put({ type: actions.AUTH, user : auth.data.user })
}


export function* login(action) {
   const { user } = action
   yield put({ type: actions.CHECKING_AUTH })
   const auth = yield axiosFetch(`/login`, 'POST', user)
   if (auth.error) return yield put({ type: actions.UNAUTH, message : 'Invalid username or password' })
   if (auth.data.token) {
      localStorage.setItem('token', auth.data.token)
      yield put({ type: actions.AUTH, user : auth.data.user })
   }
   else yield put({ type: actions.UNAUTH })
}



export function* signup(action) {
   const { user } = action
   yield put({ type: actions.CHECKING_AUTH })
   const auth = yield axiosFetch(`/signup`, 'POST', user)
   if (auth.error) return yield put({ type: actions.UNAUTH, message : 'Invalid username or password' })
   if (auth.data.token) {
      localStorage.setItem('token', auth.data.token)
      yield put({ type: actions.AUTH, user : auth.data.user })
   }
   else yield put({ type: actions.UNAUTH })
}

export function* resetPwd(action){
   yield put({ type: actions.RESETTING_PWD })
   const { email } = action
   const result = yield axiosFetch('/resetpwd', 'POST', email)
   if(result.error) return yield put({ type: actions.ERROR, message : 'unable to update password' })
   yield put({ type: actions.PWD_RESETTED })
}

export function* updatePwd(action){
   const { value } = action
   yield put({ type: actions.RESETTING_PWD })
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch('/updatepwd', 'POST', {password : value, token : token})
   if(result.error) return yield put({ type: actions.ERROR, message : 'Unable to update password' })
   else return  yield put({ type: actions.SUCCESS, message : 'Updated' })
}
