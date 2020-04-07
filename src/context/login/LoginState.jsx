import React, { useReducer } from "react";
import { LoginContext } from "./loginContext";
import { loginReducer } from "../../reducers/loginReducer";
import { LOGIN } from "../../consts/types";

export const LoginState = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    authorized: JSON.parse(localStorage.getItem("authorized"))
      ? JSON.parse(localStorage.getItem("authorized"))
      : false,
  });

  const signIn = () => {
    dispatch({
      type: LOGIN.SIGN_IN,
    });
    localStorage.setItem("authorized", JSON.stringify(true));
  };

  const signOut = () => {
    dispatch({
      type: LOGIN.SIGN_OUT,
    });
    localStorage.setItem("authorized", JSON.stringify(false));
  };

  return (
    <LoginContext.Provider
      value={{ signOut,signIn, authorized: state.authorized }}
    >
      {children}
    </LoginContext.Provider>
  );
};
