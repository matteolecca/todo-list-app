import { useCallback, useReducer } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
const loginState = {
    title : 'login',
    inputs : {
        email : { ID : 0, text : 'email', type : 'email', value : '', valid : false, regex : 'email', icon : EmailOutlinedIcon, patternMsg : 'insert a valid email' },
        password: { 
            ID : 1, text : 'password', type : 'password', value : '', valid : false, 
            pattern : '[a-zA-Z0-9]{6,}', patternMsg : 'password should be long al least 4 characters', 
            icon : LockOutlinedIcon },
    },
    submitTitle : 'login',
   links : [
       {ID : 0, title : 'forgot password?', to:'/resetpwd'},
       {ID : 1, title : 'signup', to:'/signup'},
   ],
}
const signupState = {
    title : 'signup',
    inputs : {
        name : { ID : 0, text : 'name', type : 'text', value : '', valid : false, regex : 'text', icon : PersonOutlineOutlinedIcon },
        email : { ID : 1, text : 'email', type : 'email', value : '', valid : false, regex : 'email', icon : EmailOutlinedIcon },
        password: { ID : 2, text : 'password', type : 'password', value : '', valid : false, regex : 'password', icon : LockOutlinedIcon,
        pattern : '[a-zA-Z0-9]{6,}', patternMsg : 'password should be long al least 4 characters',},
    },
    submitTitle : 'signup',
   links : [
       {ID : 0, title : 'login', to:'/login'},
   ]
}
const forgotPwdState = {
    title : 'reset password',
    inputs : {
        email : { ID : 1, text : 'email', type : 'email', value : '', valid : false, regex : 'email', icon : EmailOutlinedIcon },
    },
    submitTitle : 'reset',
   links : [
       {ID : 0, title : 'login', to:'/login'},
   ]
}
const reducer = (state , action ) =>{
    switch (action.type) {
        case 'SET_VALUE':
            const copy = {...state.inputs}
            copy[action.key].value = action.value
            return { ...state, inputs : copy}
        case 'RESET':
            console.log('RESET')
            const inputsCopy = {...state.inputs}
            const keys = Object.keys(inputsCopy)
            keys.map(i=>inputsCopy[i].value = '')
            console.log(inputsCopy)
            return { ...state, inputs : inputsCopy}
        default:
            return state;
    }
}

const AuthHook = (type) =>{
    const authState = type === 'login' ? loginState : type === 'signup' ?  signupState  : forgotPwdState
    const [ state, dispatch ] = useReducer(reducer ,authState )

    const setValue = (value, key) =>{
        dispatch({type : 'SET_VALUE', value : value, key : key})
    }
    const resetInputs = useCallback(() => {
        dispatch({type : 'RESET'})
    },[])
    
    return {
        inputs : state.inputs,
        keys : Object.keys(state.inputs),
        setValue : setValue,
        resetInputs : resetInputs,
        title : state.title, 
        links : state.links
    }
}

export default AuthHook