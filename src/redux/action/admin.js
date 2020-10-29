import Axios from "axios";
import {
  GET_ADMIN,
  SEARCH_ADMIN,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../type/admin";
import { URL_ADM } from "../../utils";

// Get User
export const getAdmin = (token) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/users`, {
    params: {
      page: 1,
      limit: 10,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_ADMIN, payload: res.data });
};

// Search User
export const searchAdmin = (token) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/users/search/query`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: SEARCH_ADMIN, payload: res.data });
};

///delete
export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteAdminSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};
export const deleteAdminFailed = (error) => {
  return {
    type: DELETE_USER_FAILED,
    payload: error,
  };
};

export const deleteAdmin = (fields) => (dispatch) => {
  dispatch(deleteUserRequest());
  Axios.delete(`${URL_ADM}/users/${fields.id}`, {
    headers: {
      Authorization: `Bearer ${fields.token}`,
    },
  })
    .then((res) => {
      dispatch(deleteAdminSuccess(res.data));
    })
    .catch((error) => {
      dispatch(deleteAdminFailed(error.message));
    });
};

// Edit Admin
export const editAdminRequest = () => {
  return {
    type: EDIT_USER_REQUEST,
  };
};

export const editAdminSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload: data,
  };
};
export const editAdminFailed = (error) => {
  return {
    type: EDIT_USER_FAILED,
    payload: error,
  };
};

export const editAdmin = (fields) => async (dispatch) => {
  dispatch(editAdminRequest());
  try {
    const res = await Axios.patch(`${URL_ADM}/users/${fields.id}`, fields, {
      headers: {
        Authorization: `Bearer ${fields.token}`,
      },
    });
    dispatch(editAdminSuccess(res.data));
  } catch (error) {
    dispatch(editAdminFailed(error.message));
  }
};
