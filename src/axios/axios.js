import axios from 'axios'

export const cancelToken = axios.CancelToken

export const instance = axios.create({
    baseURL: 'https://matteolecca-todo-list-server.herokuapp.com/',
    withCredentials : true,
    sameSite : 'none',
})

export  default axios



//http://192.168.1.146:8080
//https://matteolecca-todo-list-server.herokuapp.com/