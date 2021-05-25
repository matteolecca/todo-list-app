import { put } from 'redux-saga/effects'
import * as actions from '../actions'
import { axiosFetch } from '../../HTTP/http'

export function* loadProjects() {
   yield put ({type : actions.LOADING_PROJECTS})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const projects = yield axiosFetch(`/projects/${token}`, 'GET')
   if(projects.error ) yield put({type : actions.UNAUTH})
   else yield put({ type : actions.PROJECTS_LOADED, projects : projects.data.projects})
}


export function* addTodoList(action) {
   yield put ({type : actions.LOADING_PROJECTS})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch('/todolist', 'POST', { todolist : action.todolist, token : token})
   if(result.error ) yield put({type : actions.UNAUTH})
   else {
         const projects = yield axiosFetch(`/projects/${token}`, 'GET')
      if(projects.error ) yield put({type : actions.UNAUTH})
      else yield put({ type : actions.PROJECTS_LOADED, projects : projects.data.projects})
   }
}
export function* loadTodos(action) {
   yield put({ type : actions.LOADING_TODO})
   const { todolistID } = action
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch(`todos/${token}/${todolistID}`, 'GET')
   if(result.error ) yield put({type : actions.UNAUTH})
   else yield put({ type : actions.TODO_LOADED, todos : result.data})
}
export function* addTodo(action) {
   const { todo,ID} = action
   yield put({type : actions.ADDING_TODO})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch('/todo', 'POST', { todo : todo, ID : ID})
   if(result.error ) yield put({type : actions.UNAUTH})
   else {
      const result = yield axiosFetch(`todos/${token}/${ID}`, 'GET')
      if(result.error ) yield put({type : actions.UNAUTH})
      else yield put({ type : actions.TODO_LOADED, todos : result.data})
   }
}
export function* deleteProject(action) {
   yield put({ type : actions.DELETING_PROJECT})
   yield put({ type : actions.LOADING_TODO})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch('/deleteproject', 'POST', { ID : action.ID})
   if(result.error ) yield put({type : actions.UNAUTH})
   else {
         const projects = yield axiosFetch(`/projects/${token}`, 'GET')
      if(projects.error ) yield put({type : actions.UNAUTH})
      else {
         yield put({ type : actions.RESET_CURRENT_TODO})
         yield put({ type : actions.PROJECTS_LOADED, projects : projects.data.projects})
      }
   }
}

export function* deleteTodo(action) {
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch('/deletetodo', 'POST', { todoID : action.todoID})
   if(result.error ) yield put({type : actions.UNAUTH})
   else {
      console.log('LOASING TODOS AGAIN')
      let result = null
      if(action.todoListID) result = yield axiosFetch(`todos/${token}/${action.todoListID}`, 'GET')
      else result = yield axiosFetch(`importanttodos/${token}`, 'GET')
      if(result.error ) yield put({type : actions.UNAUTH})
      else yield put({ type : actions.TODO_LOADED, todos : result.data})
   }
}

export function* loadImportantTodos(action) {
   yield put({ type : actions.LOADING_TODO})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch(`importanttodos/${token}`, 'GET')
   if(result.error ) yield put({type : actions.UNAUTH})
   else yield put({ type : actions.TODO_LOADED, todos : result.data})
}

export function* loadScheduledTodos(action) {
   yield put({ type : actions.LOADING_TODO})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch(`scheduledtodos/${token}`, 'GET')
   if(result.error ) yield put({type : actions.UNAUTH})
   else yield put({ type : actions.TODO_LOADED, todos : result.data})
}

export function* loadTodayTodo(action) {
   yield put({ type : actions.LOADING_TODO})
   const token = localStorage.getItem('token')
   if(!token) return yield put({ type: actions.UNAUTH })
   const result = yield axiosFetch(`todaytodo/${token}`, 'GET')
   if(result.error ) yield put({type : actions.UNAUTH})
   else yield put({ type : actions.TODO_LOADED, todos : result.data})
}