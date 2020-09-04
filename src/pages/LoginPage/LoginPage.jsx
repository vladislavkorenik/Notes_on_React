import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUpModal } from "../../components/SignUpModal/SignUpModal";
import { createBrowserHistory } from "history";

export const LoginPage = () => {
  const [valueOfModalDisplay, setValueOfModalDisplay] = useState("none");
  const users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  const history = createBrowserHistory();

  return (
    <div>
      <LoginForm props={{ setValueOfModalDisplay, history, users }} />
      <SignUpModal
        props={{ valueOfModalDisplay, setValueOfModalDisplay, history, users }}
      />
    </div>
  );
};
