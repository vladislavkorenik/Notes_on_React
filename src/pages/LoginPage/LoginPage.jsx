import React, { useContext, useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUpModal } from "../../components/SignUpModal/SignUpModal";
import { LoginContext } from "../../context/login/loginContext";
import { createBrowserHistory } from "history";

export const LoginPage = () => {
  const [valueOfModalDisplay, setValueOfModalDisplay] = useState("none");
  const users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const login = useContext(LoginContext);
  const history = createBrowserHistory();

  return (
    <div>
      <LoginForm props={{ setValueOfModalDisplay, login, history, users }} />
      <SignUpModal
        props={{ valueOfModalDisplay, setValueOfModalDisplay, login, history, users }}
      />
    </div>
  );
};
