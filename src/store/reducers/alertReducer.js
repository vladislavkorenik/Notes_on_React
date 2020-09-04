import { ALERT } from "../actions/alertAction";

export const initialState = {
  alertVisible: false,
  alertInfo: {},
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT.HIDE:
      return { ...state, alertVisible: false };
    case ALERT.SHOW:
      return {
        alertVisible: true,
        alertInfo: action.payload,
      };
    default:
      return state;
  }
};
