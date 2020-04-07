import React, { useReducer } from "react";
import { SwitchContext } from "./switchContext";
import { switchReducer } from "../../reducers/switchReducer";
import { SWITCH_THEME } from "../../consts/types";

export const SwitchState = ({ children }) => {
  const [state, dispatch] = useReducer(switchReducer, {
    themeSwitcher: JSON.parse(localStorage.getItem("theme_state"))
      ? JSON.parse(localStorage.getItem("theme_state"))
      : false,
  });

  const switchTheme = () => {
    dispatch({ type: SWITCH_THEME });
    localStorage.setItem("theme_state", JSON.stringify(!state.themeSwitcher));
  };

  return (
    <SwitchContext.Provider
      value={{
        switchTheme,
        themeSwitcher: state.themeSwitcher,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};
