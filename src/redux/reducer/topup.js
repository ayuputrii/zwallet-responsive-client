import { TOPUP } from "../type/topup";

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOPUP:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}