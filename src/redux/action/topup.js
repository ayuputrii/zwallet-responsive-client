import axios from 'axios'
import { TOPUP } from '../type/topup'
import { URI } from '../../utils'

export const topup = (token) => async dispatch => {
    const res = await axios.get(`${URI}/topup`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: TOPUP, payload: res.data })
}
