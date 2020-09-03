import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../../context/alert/alertContext";

import "./Alert.scss";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (alert.visiable) {
    setTimeout(() => hide(), 3000);
  }

  return (
    <CSSTransition
      in={alert.visiable}
      timeout={750}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Attention! </strong>
        {alert.text}
        <button
          onClick={hide}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
