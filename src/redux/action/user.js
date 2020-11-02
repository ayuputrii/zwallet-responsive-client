import Axios from 'axios'
import { GET_USER, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILED, CHECK_PIN, PIN_CHECKED, USER_LOGOUT, NOTIFICATION } from '../type/user'
import { URI } from '../../utils'

export const getUser = token => async dispatch => {
    const res = await Axios.get(`${URI}/users/login`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_USER, payload: res.data })
}

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}

export const editUserSuccess = data => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: data

    }
}

export const editUserFailed = error => {
    return {
        type: EDIT_USER_FAILED,
        payload: error
    }
}

export const editUser = (data, token) => async dispatch => {
    dispatch(editUserRequest())
    try {
        const res = await Axios.patch(`${URI}/users`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(editUserSuccess(res.data))
    } catch (error) {
        dispatch(editUserFailed(error.response))
    }
}

export const pinChecked = () => {
    return {
        type: PIN_CHECKED
    }
}

export const checkPin = (pin, token) => async dispatch => {
    const res = await Axios.post(`${URI}/users/pin`, pin, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if(res.data === 'OK') {
        dispatch(pinChecked())
    }

    dispatch({ type: CHECK_PIN, payload: res.data })
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

export const notification = () => {
    return {
        type: NOTIFICATION
    }
}