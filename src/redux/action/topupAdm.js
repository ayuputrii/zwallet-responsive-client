import axios from "axios";
import { TOPUPADM } from "../type/topupAdm";
import { URL_ADM } from "../../utils";

export const topupAdm = (token) => async (dispatch) => {
  const res = await axios.get(`${URL_ADM}/topup`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  dispatch({ type: TOPUPADM, payload: res.data });
};