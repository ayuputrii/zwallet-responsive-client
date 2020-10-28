import {
  GET_ADMIN,
  DETAIL_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../type/admin";

const initialState = {
  dataAdmin: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    // Detail User
    case DETAIL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        dataAdmin: action.payload.data,
      };

    // Delete
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        dataAdmin: action.payload.message,
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        dataAdmin: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
