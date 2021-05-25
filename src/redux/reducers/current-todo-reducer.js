import * as actions from '../actions'

const initialState = {
    title: null,
    ID: null,
    unset: true,
    loading: false,
    todos: [],
    important : false,
    scheduled : false,
    today : false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_CURRENT_TODO:
            const { title, ID} = action
            return { ...state, title: title, ID: ID, unset: false,important : action.important, scheduled : action.scheduled, today : action.today }
        case actions.LOADING_TODO:
            return { ...state, loading: true }
        case actions.TODO_LOADED:
            return { ...state, todos: action.todos, loading: false, adding: false  }
        case actions.ADDING_TODO:
            return { ...state, adding: true }
        case actions.RESET_CURRENT_TODO:
            return initialState
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}

export default reducer

