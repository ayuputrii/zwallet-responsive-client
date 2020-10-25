import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../type/login'

const initialState = {
    token: '',
    isLogin: false,
    loading: false,
    error: '',
    isEmailActive: false,
    isPasswordActive: false,
    isEyeClick: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                loading: false,
                isLogin: true,
                error: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload.data.message,
                loading: false,
                isLogin: false
            }
        case LOGOUT:
            return {
                ...state,
                token: '',
                isLogin: false,
                _persist: {
                    rehydrated: true,
                    version: -1
                }
            }
        default:
            return state
    }
}

