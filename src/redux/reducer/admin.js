import {
  GET_USER,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../type/admin";

const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        data: action.payload.data,
      };

    // Update
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
        data: action.payload.message,
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return {
        ...state,
        pinCheck: "",
        checkedPin: false,
      };
  }
};
