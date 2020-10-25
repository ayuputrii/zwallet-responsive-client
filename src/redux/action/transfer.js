import Axios from 'axios'
import { FORM_FILLED, TRANSFER_REQUEST, TRANSFER_SUCCESS, TRANSFER_FAILED } from '../type/transfer'
import { URI } from '../../utils'

export const formFilled = data => {
    return {
        type: FORM_FILLED,
        payload: data
    }
}

export const transferRequest = () => {
    return {
        type: TRANSFER_REQUEST
    }
}

export const transferSuccess = data => {
    return {
        type: TRANSFER_SUCCESS,
        payload: data
    }
}

export const transferFailed = data => {
    return {
        type: TRANSFER_FAILED,
        payload: data
    }
}

export const transfer = (token, data, balance) => async dispatch => {
    dispatch(transferRequest())
    try {
        console.log(token, data)
        const res = await Axios.post(`${URI}/transfer`, data, {
            params: {
                balance_receiver: balance
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(transferSuccess(res.data.message))
    } catch (error) {
        dispatch(transferFailed(error.response.data))
    }
}