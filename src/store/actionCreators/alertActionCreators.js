import { ALERT } from "../actions/alertAction";

export const hideAlert = () => {
  return {
    type: ALERT.HIDE,
  };
};

export const showAlert = (text, type = "warning") => {
  return {
    type: ALERT.SHOW,
    payload: { text, type },
  };
};
