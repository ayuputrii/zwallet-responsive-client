import { TOPUPADM } from "../type/topupAdm";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOPUPADM:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
