import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchAction } from "../../store/actionCreators/switchActionCreators";

export const Switcher = () => {
  const themeSwitcher = useSelector(
    (state) => state.switchReducer.themeSwitcher
  );
  const dispatch = useDispatch();

  return (
    <form className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={themeSwitcher}
        onChange={() => dispatch(switchAction())}
      />
      <label
        className="custom-control-label"
        htmlFor="customSwitch1"
        style={{ color: `${themeSwitcher ? "white" : "black"}` }}
      >
        {`Switch theme`}
      </label>
    </form>
  );
};
