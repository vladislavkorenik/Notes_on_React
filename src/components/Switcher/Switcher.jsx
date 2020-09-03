import React, { useContext } from "react";
import { SwitchContext } from "../../context/switch/switchContext";

export const Switcher = () => {
  const switcher = useContext(SwitchContext);

  const handlers = () => {
    switcher.switchTheme();
  };
  return (
    <form className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={switcher.themeSwitcher}
        onChange={handlers}
      />
      <label
        className="custom-control-label"
        htmlFor="customSwitch1"
        style={{ color: `${switcher.themeSwitcher ? "white" : "black"}` }}
      >
        {`Switch theme`}
      </label>
    </form>
  );
};
