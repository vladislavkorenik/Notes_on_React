import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Alert.scss";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../../store/actionCreators/alertActionCreators";

export const Alert = () => {
  const { alertVisible, alertInfo } = useSelector(
    (state) => state.alertReducer
  );
  const dispatch = useDispatch();

  if (alertVisible) {
    setTimeout(() => dispatch(hideAlert()), 3000);
  }

  return (
    <CSSTransition
      in={alertVisible}
      timeout={750}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alertInfo.type} alert-dismissible`}>
        <strong>Attention! </strong>
        {alertInfo.text}
        <button
          onClick={() => dispatch(hideAlert())}
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
