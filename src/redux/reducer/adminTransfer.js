import {
    GET_SENDER,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,
    SEARCH_SENDER,
  } from "../type/admin";
  
  const initialState = {
    data: [],
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_SENDER:
        return {
          ...state,
          data: action.payload.data,
          loading: false,
        };
  
      case DELETE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          data: action.payload.message,
          loading: false,
        };
  
      case DELETE_USER_FAILED:
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
  
      case SEARCH_SENDER:
        return {
          ...state,
          data: action.payload.data,
        };
  
      default:
        return state;
    }
  }
  