import {
  TOPUPADM,
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
  messageEdit: "",
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
        data: action.payload.data,
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
        loading: false,
        data: action.payload.message,
      };
    case DELETE_TOPUP_FAILED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
