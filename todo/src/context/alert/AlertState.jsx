import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "../../reducers/alertReducer";
import { ALERT } from "../../consts/types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visiable: false });
  const show = (text, type = "warning") => {
    dispatch({
      type: ALERT.SHOW,
      payload: { text, type }
    });
  };
  const hide = () => dispatch({ type: ALERT.HIDE });

  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
