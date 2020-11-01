import {
  TOPUPADM,
  ADD_TOPUP_REQUEST,
  ADD_TOPUP_SUCCESS,
  ADD_TOPUP_FAILED,
  EDIT_TOPUP_REQUEST,
  EDIT_TOPUP_SUCCESS,
  EDIT_TOPUP_FAILED,
  DELETE_TOPUP_REQUEST,
  DELETE_TOPUP_SUCCESS,
  DELETE_TOPUP_FAILED,
} from "../type/topupAdm";

const initialState = {
  dataTopup: [],
  loading: false,
  messageAdd: "",
  messageEdit: "",
  isAddSuccess: false,
  isAddFailed: false,
  isEditSuccess: false,
  isEditFailed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //GET
    case TOPUPADM:
      return {
        ...state,
        dataTopup: action.payload.data,
      };
    //ADD
    case ADD_TOPUP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_TOPUP_SUCCESS:
      return {
        ...state,
        loading: false,
        messageAdd: action.payload,
        isAddSuccess: true,
        isAddFailed: false
      }
    case ADD_TOPUP_FAILED:
      return {
        ...state,
        loading: false,
        messageAdd: action.payload,
        isAddSuccess: false,
        isAddFailed: true
      }
    // EDIT
    case EDIT_TOPUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_TOPUP_SUCCESS:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload.message,
        isEditSuccess: true,
        isEditFailed: false,
      };
    case EDIT_TOPUP_FAILED:
      return {
        ...state,
        loading: false,
        messageEdit: action.payload,
        isEditSuccess: false,
        isEditFailed: true,
      };

    // Delete
    case DELETE_TOPUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TOPUP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case DELETE_TOPUP_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
