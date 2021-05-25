import * as actions from '../actions'

const initialState = {
    projects: [],
    deleting: false

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PROJECTS_LOADED:
            return { projects: action.projects, deleting: false, loading: false }
        case actions.DELETING_PROJECT:
            return { ...state, deleting: true }
        case actions.LOADING_PROJECTS:
            return { ...state, loading: true }
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}
export default reducer



    // const reducer = (state = initialState, action) => {
    //     switch (action.type) {
    //         case actions.ADD_PROJECT:
    //             const projectsCopy = [...state.projects]
    //             projectsCopy.push({ title: action.title, subprojects: [] })
    //             return { projects: projectsCopy }
    //         case actions.ADD_TODO_LIST:
    //             const [project] = state.projects.filter(p => p.title === action.project)
    //             const newState = { projects: state.projects.filter(p => p.title !== action.project) }
    //             const subprojects = [...project.subprojects]
    //             subprojects.push({ title: action.todo.title, color: action.todo.color, todos: [] })
    //             const projectEdited = { ...project, subprojects: subprojects }
    //             newState.projects.push(projectEdited)
    //             return newState
    //         case actions.ADD_TODO:
    //             return addTodo(state, action.todo)
    //         default:
    //             return state
    //     }
    // }

    // const addTodo = (state, todo) =>{
    //     const [project] = state.projects.filter(p => p.title === todo.project)
    //     const [subproject] = project.subprojects.filter(p => p.title === todo.title)
    //     const subprojects = project.subprojects.filter(p => p.title !== todo.title)
    //     subproject.todos.push({ name: todo.name, color: todo.color })
    //     subprojects.push(subproject)
    //     const newState = { projects: state.projects.filter(p => p.title !== todo.project) }
    //     const projectEdited = { ...project, subprojects: subprojects }
    //     newState.projects.push(projectEdited)
    //     return newState
    // }



