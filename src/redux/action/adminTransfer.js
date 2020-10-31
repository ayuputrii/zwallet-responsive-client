import {
  GET_SENDER,
  SEARCH_SENDER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
} from "../type/admin";
import Axios from "axios";
import { URL_ADM } from "../../utils";

// Get Sender
export const getSender = (token) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/transfer/search?page=1&limit=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({ type: GET_SENDER, payload: res.data });
};

// Delete Sender
export const deleteSenderRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteSenderSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};

export const deleteSenderFailed = (error) => {
  return {
    type: DELETE_USER_FAILED,
    payload: error,
  };
};

export const deleteSender = (fields) => async (dispatch) => {
  dispatch(deleteSenderRequest());
  Axios.delete(`${URL_ADM}/transfer/${fields.id}`, {
    headers: {
      Authorization: `Bearear ${fields.token}`,
    },
  })
    .then((res) => {
      dispatch(deleteSenderSuccess(res.data));
    })
    .catch((err) => {
      dispatch(deleteSenderFailed(err.message));
    });
};

// Search Sender
export const searchSender = (token, query) => async (dispatch) => {
  const res = await Axios.get(`${URL_ADM}/transfer/search/query`, {
    params: {
      // receiver: query,
      q: query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: SEARCH_SENDER, payload: res.data });
};
