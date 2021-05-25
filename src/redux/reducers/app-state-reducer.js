import { ERROR, SUCCESS, RESET } from "../actions";

const initialState = {
    error : null,
    success : null,
    message : ''
}

const reducer = ( state = initialState, action ) =>{
    switch (action.type) {
        case ERROR:
                return { ...state, error : true, message : action.message}
        case SUCCESS:
            return { ...state, success : true, message : action.message}
        case RESET:
            return initialState
        default:
            return initialState
    }
}

export default reducer