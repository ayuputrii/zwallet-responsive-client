import Axios from "axios";
import {
  GET_ADMIN,
  DETAIL_USER_SUCCESS,
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

///delete
export const deletetUserRequest = () => {
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

// Detail Admin
export const detailAdminSuccess = (data) => {
  return {
    type: DETAIL_USER_SUCCESS,
    payload: data,
  };
};

// Detail Admin
export const detailAdmin = (fields, token) => (dispatch) => {
  Axios.get(`${URL_ADM}/users/${fields.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    dispatch(detailAdminSuccess(res.data));
  });
};

// Delete Admin
export const deleteAdmin = (fields) => (dispatch) => {
  dispatch(deletetUserRequest());
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
