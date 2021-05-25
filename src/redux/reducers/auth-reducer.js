import { AUTH, CHECKING_AUTH, LOGOUT, UNAUTH } from '../actions'
const initialState = {
    auth: false,
    checking: true,
    error: false,
    user : {
        email  : '',
        name : ''
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKING_AUTH:
            return { auth: false, checking: true, error: false }
        case AUTH:
            return { auth: true, checking: false, error: false, user : action.user }
        case UNAUTH:
            return { auth: false, checking: false, error: false, message : action.message }
        case LOGOUT:
            return { auth: false, checking: false, error: false }
        case 'RESET_AUTH_MESSAGE':
            return { ...state, message : ''}
        default:
            return state
    }
}

export default reducer