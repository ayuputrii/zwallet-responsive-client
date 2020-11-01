import {
  GET_ADMIN,
  SEARCH_ADMIN,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  GET_SENDER,
  SEARCH_SENDER,
} from "../type/admin";

const initialState = {
  dataAdmin: [],
  loading: false,
  messageEdit: "",
  isEditSuccess: false,
  isEditFailed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Get Admin
    case GET_ADMIN:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    // Search Admin
    case SEARCH_ADMIN:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    // Edit Admin
    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload.message,
        data: action.payload.data,
        isEditSuccess: true,
        isEditFailed: false,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload,
        isEditSuccess: false,
        isEditFailed: true,
      };

    // Delete Admin
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

    case GET_SENDER:
      return {
        ...state,
        dataAdmin: action.payload.data,
        loading: false,
      };

    case SEARCH_SENDER:
      return {
        ...state,
        dataAdmin: action.payload.data,
      };

    default:
      return {
        ...state,
      };
  }
};
