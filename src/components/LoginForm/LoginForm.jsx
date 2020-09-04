import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actionCreators/loginActionCreators";

export const LoginForm = ({
  props: { setValueOfModalDisplay, history, users },
}) => {
  const dispatch = useDispatch();
  const themeSwitcher = useSelector((state) => state.themeSwitcher);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    const userExist = users.some(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (userExist) {
      dispatch(signIn());
      history.push("/");
    } else {
      event.preventDefault();
      alert("Wrong email or password");
    }
  };

  const bottomClass = `btn ${themeSwitcher ? "btn-dark" : "btn-danger"}`;
  const linkClass = `${themeSwitcher ? "text-dark" : "text-danger"}`;
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
