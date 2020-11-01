import axios from "axios";
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
import { URL_ADM } from "../../utils";

//GET
export const topupAdm = (token) => async (dispatch) => {
  const res = await axios.get(`${URL_ADM}/topup`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: TOPUPADM, payload: res.data });
};

//ADD
export const addTopupRequest = () => {
  return {
    type: ADD_TOPUP_REQUEST
  }
}

export const addTopupSuccess = (message) => {
  return {
    type: ADD_TOPUP_SUCCESS,
    payload: message
  }
}

export const addTopupFailed = message => {
  return {
    type: ADD_TOPUP_FAILED,
    payload: message
  }
}

export const addTopup = (fields, token) => async dispatch => {
  dispatch(addTopupRequest())
  try {
    const res = await axios.post(`${URL_ADM}/topup`, fields, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(addTopupSuccess(res.data.message))
  } catch (error) {
    dispatch(addTopupFailed(error.response))
  }
}

//DELETE
export const deleteTopupRequest = () => {
  return {
    type: DELETE_TOPUP_REQUEST,
  };
};

export const deleteTopupSuccess = (data) => {
  return {
    type: DELETE_TOPUP_SUCCESS,
    payload: data,
  };
};
export const deleteTopupFailed = (error) => {
  return {
    type: DELETE_TOPUP_FAILED,
    payload: error,
  };
};

export const deleteTopup = (fields) => (dispatch) => {
  dispatch(deleteTopupRequest());
  axios.delete(`${URL_ADM}/topup/${fields.sequence}`, {
    headers: {
      Authorization: `Bearer ${fields.token}`,
    },
  })
    .then((res) => {
      dispatch(deleteTopupSuccess(res.data));
    })
    .catch((error) => {
      dispatch(deleteTopupFailed(error.message));
    });
};

//EDIT
export const editTopupRequest = () => {
  return {
    type: EDIT_TOPUP_REQUEST,
  };
};

export const editTopupSuccess = (data) => {
  return {
    type: EDIT_TOPUP_SUCCESS,
    payload: data,
  };
};
export const editTopupFailed = (error) => {
  return {
    type: EDIT_TOPUP_FAILED,
    payload: error,
  };
};

export const editTopup = (fields) => async (dispatch) => {
  dispatch(editTopupRequest());
  try {
    const res = await axios.patch(
      `${URL_ADM}/topup/${fields.sequence}`,
      {
        title: fields.title
      },
      {
        headers: {
          Authorization: `Bearer ${fields.token}`,
        },
      }
    );
    dispatch(editTopupSuccess(res.data));
  } catch (error) {
    dispatch(editTopupFailed(error.message));
  }
};
