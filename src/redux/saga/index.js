import { takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions'
import { checkAuth, login, resetPwd, signup, updatePwd } from './auth-saga';
import {deleteProject, loadProjects, addTodoList, loadTodos, addTodo, deleteTodo, loadImportantTodos, loadScheduledTodos, loadTodayTodo} from './projects-saga'

export function* projectListener() {
    yield all([
        takeEvery(actions.LOAD_PROJECTS, loadProjects),
        takeEvery(actions.DELETE_PROJECT, deleteProject),
        takeEvery(actions.ADD_TODO_LIST, addTodoList),
        takeEvery(actions.LOAD_TODO, loadTodos),
        takeEvery(actions.LOAD_IMPORTANT_TODO, loadImportantTodos),
        takeEvery(actions.LOAD_SCHEDULED_TODO, loadScheduledTodos),
        takeEvery(actions.LOAD_TODAY_TODO, loadTodayTodo),
        takeEvery(actions.ADD_TODO, addTodo),
        takeEvery(actions.DELETE_TODO, deleteTodo),
    ])
}

export function* authListener() {
    yield all([
        takeEvery(actions.CHECK_AUTH, checkAuth),
        takeEvery(actions.LOGIN, login),
        takeEvery(actions.SIGNUP, signup),
        takeEvery(actions.RESET_PWD, resetPwd),
        takeEvery(actions.UPDATE_PWD, updatePwd),
    ])
}