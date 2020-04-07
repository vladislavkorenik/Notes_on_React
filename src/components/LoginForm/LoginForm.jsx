import React, { useState, useContext } from "react";
import { SwitchContext } from "../../context/switch/switchContext";

export const LoginForm = ({
  props: { setValueOfModalDisplay, login, history, users },
}) => {
  const switcher = useContext(SwitchContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    const userExist = users.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (userExist) {
      login.signIn();
      history.push("/");
    } else {
      event.preventDefault();
      alert("Wrong email or password");
    }
  };

  const bottomClass = `btn ${
    switcher.themeSwitcher ? "btn-dark" : "btn-danger"
  }`;
  const linkClass = `${switcher.themeSwitcher ? "text-dark" : "text-danger"}`;
  return (
    <div style={{ maxWidth: "500px" }} className="mx-auto">
      <form className="px-4 py-3" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className={bottomClass}>
          Sign in
        </button>
      </form>
      <hr />
      <button
        style={{ background: "none", border: "none", outline: "none" }}
        className={linkClass}
        onClick={() => setValueOfModalDisplay("block")}
      >
        New around here? Sign up
      </button>
    </div>
  );
};
