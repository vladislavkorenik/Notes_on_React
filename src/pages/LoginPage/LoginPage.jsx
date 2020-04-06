import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SwitchContext } from "../../context/switch/switchContext";
import { createBrowserHistory } from "history";

export const LoginPage = () => {
  const switcher = useContext(SwitchContext);
  const history = createBrowserHistory();
  const [formData, setFormData] = useState({});

  const logData = { email: "val@gmail.com", password: "12345" };
  const bottomClass = `btn ${
    switcher.themeSwitcher ? "btn-dark" : "btn-danger"
  }`;
  const linkClass = `${switcher.themeSwitcher ? "text-dark" : "text-danger"}`;

  const submitHandler = (event) => {
    console.log(formData);
    if (
      logData.email === formData.email &&
      logData.password === formData.password
    ) {
      history.push("/");
    }
  };
  return (
    <div style={{ maxWidth: "500px" }} className="mx-auto">
      <form className="px-4 py-3" onSubmit={submitHandler} >
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
      <NavLink className={linkClass} to="/">
        New around here? Sign up
      </NavLink>
    </div>
  );
};
