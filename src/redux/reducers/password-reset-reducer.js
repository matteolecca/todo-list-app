import { PWD_RESETTED, RESETTING_PWD } from "../actions";

const initialState = {
    resetting: false,
    resetted: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PWD_RESETTED:
            return { error: false, resetting: false, resetted: true }
        case RESETTING_PWD:
            return { error: false, resetting: true, resetted: false }
        default:
            return initialState
    }
}

export default reducer