import { EMAIL_FILLED, RESET_FAILED, RESET_REQUEST, RESET_SUCCESS  } from '../type/forgot'

const initialState = {
    email: '',
    isEmailFilled: false,
    loading: false,
    isSuccess: false,
    isFailed: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_FILLED:
            return {
                ...state,
                email: action.payload,
                isEmailFilled: true
            }
        case RESET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESET_SUCCESS: 
            return {
                ...state,
                loading: false,
                isSuccess: true,
                isFailed: false
            }
        case RESET_FAILED:
            return {
                ...state,
                loading: false,
                isFailed: true,
                isSuccess: false
            }
        default:
            return {
                ...state,
                data: {}
            }
    }
}