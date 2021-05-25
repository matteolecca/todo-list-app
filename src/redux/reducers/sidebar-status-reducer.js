import * as actions from '../actions'

const initialState = {
    opened : true,
    mode : 'light'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.OPEN_SIDEBAR:
            return { ...state, opened : !state.opened }
        case actions.CHANGE_MODE:
            return { ...state, mode : state.mode === 'dark' ? 'light' : 'dark'}
        default:
            return state
    }
}

export default reducer