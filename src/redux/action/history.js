import Axios from 'axios'
import { GET_HISTORY, GET_HISTORY_BY_WEEK, GET_HISTORY_BY_MONTH, MAX_WEEK, MAX_MONTH } from '../type/history'
import { URI } from '../../utils'

export const getHistory = (token) => async dispatch => {
    const res = await Axios.get(`${URI}/transfer/history/all`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_HISTORY, payload: res.data.data })
}

export const maxWeek = () => {
    return {
        type: MAX_WEEK
    }
}

export const maxMonth = () => {
    return {
        type: MAX_MONTH
    }
}

export const getHistoryByWeek = (token, page) => async dispatch => {
    const res = await Axios.get(`${URI}/transfer/history`, {
        params: {
            order: 'week',
            page
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if(res.data.data.length) {
        dispatch({ type: GET_HISTORY_BY_WEEK, payload: res.data.data })
    } else {
        dispatch(maxWeek())
    }
}

export const getHistoryByMonth = (token, page) => async dispatch => {
    const res = await Axios.get(`${URI}/transfer/history`, {
        params: {
            order: 'month',
            page
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if(res.data.data.length) {
        dispatch({ type: GET_HISTORY_BY_MONTH, payload: res.data.data })
    } else {
        dispatch(maxMonth())
    }
}