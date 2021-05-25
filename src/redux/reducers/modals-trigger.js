import * as actions from '../actions'
const initialState = {
    todoModalOpened : false,
    todoListModalOpened : false,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_TODO_LIST_MODAL:
            return { todoListModalOpened : !state.todoListModalOpened}
        case actions.OPEN_TODO_MODAL:
            return { todoModalOpened : !state.todoModalOpened}
        default:
            return state
    }
}
export default reducer