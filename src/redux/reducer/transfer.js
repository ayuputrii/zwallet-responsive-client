import { FORM_FILLED, TRANSFER_REQUEST, TRANSFER_SUCCESS, TRANSFER_FAILED } from '../type/transfer'

const initialState = {
    dataTransfer: {},
    loading: false,
    isSuccess: false,
    isFailed: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FORM_FILLED:
            return {
                ...state,
                dataTransfer: action.payload
            }
        case TRANSFER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TRANSFER_SUCCESS:
            return {
                ...state,
                loading: false,
                isSuccess: true,
                isFailed: false,
                message: 'Transfer Success'
            }
        case TRANSFER_FAILED:
            return {
                ...state,
                loading: false,
                isSuccess: false,
                isFailed: true,
                message: action.payload.message
            }
        default:
            return {
                ...state,
                message: ''
            }
    }
}