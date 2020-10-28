import Axios from "axios";
import {
  GET_USER,
  DETAIL_USER_SUCCESS,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "../type/admin";
import { URL_ADM } from "../../utils";

// Get User
export const getUser = (token) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/users?page=1&limit=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: GET_USER, payload: res.data });
};

// Update
export const editUserRequest = () => {
  return {
    type: EDIT_USER_REQUEST,
  };
};

export const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload: data,
  };
};

export const editUserFailed = (error) => {
  return {
    type: EDIT_USER_FAILED,
    payload: error,
  };
};

///delete
export const deletetUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};
export const deleteUserFailed = (error) => {
  return {
    type: DELETE_USER_FAILED,
    payload: error,
  };
};

// Update
export const detailusersSuccess = (data) => {
  return {
    type: DETAIL_USER_SUCCESS,
    payload: data,
  };
};

// Detail User
export const detailUser = (fields, token) => (dispatch) => {
  Axios.get(`${URL_ADM}/users/${fields.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    dispatch(detailusersSuccess(res.data));
  });
};

// Update
export const editUser = (data, token) => async (dispatch) => {
  dispatch(editUserRequest());
  try {
    const res = await Axios.patch(`${URL_ADM}/users`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(editUserSuccess(res.data));
  } catch (error) {
    dispatch(editUserFailed(error.message));
  }
};

// Delete
// export const deleteUser = (fields) => async (dispatch) => {
//   dispatch(deletetUserRequest());
//   try {
//     const res = await Axios.delete(`${URL_ADM}/users/${fields.id}`, {
//       headers: {
//         Authorization: `Bearer ${fields.token}`,
//       },
//     });
//     dispatch(deleteUserSuccess(res.data));
//   } catch (error) {
//     dispatch(deleteUserFailed(error.message));
//   }
// };

export const deleteUser = (fields) => (dispatch) => {
  dispatch(deletetUserRequest());
  Axios.delete(`${URL_ADM}/users/${fields.id}`, {
    headers: {
      Authorization: `Bearer ${fields.token}`,
    },
  })
    .then((res) => {
      dispatch(deleteUserSuccess(res.data));
    })
    .catch((error) => {
      dispatch(deleteUserFailed(error.message));
    });
};
