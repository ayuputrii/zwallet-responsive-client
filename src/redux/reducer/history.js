import { GET_HISTORY_BY_MONTH, GET_HISTORY_BY_WEEK, GET_HISTORY, MAX_WEEK, MAX_MONTH } from '../type/history'

const initialState = {
    dataAll: [],
    dataWeek: [],
    dataMonth: [],
    isMaxWeek: false,
    isMaxMonth: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return {
                ...state,
                dataAll: action.payload
            }
        case GET_HISTORY_BY_WEEK:
            return {
                ...state,
                dataWeek: action.payload
            }
        case GET_HISTORY_BY_MONTH:
            return {
                ...state,
                dataMonth: action.payload
            }
        case MAX_WEEK:
            return {
                ...state,
                isMaxWeek: true
            }
        case MAX_MONTH:
            return {
                ...state,
                isMaxMonth: true
            }
        default:
            return {
                ...state,
                isMaxWeek: false,
                isMaxMonth: false
            }
    }
}