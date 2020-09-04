import React, { useState } from "react";
import { createModalStyles } from "../../consts/createModalStyles";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actionCreators/loginActionCreators";

export const SignUpModal = ({
  props: { valueOfModalDisplay, setValueOfModalDisplay, history, users },
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const ModalDisplay = createModalStyles(valueOfModalDisplay);

  const submitHandler = (event) => {
    const userExist = users.some((user) => user.email === formData.email);
    if (userExist) {
      event.preventDefault();
      alert("User exists");
    } else if (formData.email.trim() && formData.password.trim()) {
      localStorage.setItem("users", JSON.stringify([formData, ...users]));
      dispatch(signIn());
      history.push("/");
    } else event.preventDefault();
  };

  return (
    <div style={ModalDisplay} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Sign Up</h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              setValueOfModalDisplay("none");
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="px-4 py-3" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="exampleFormEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormEmail1"
                placeholder="email@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormPassword1"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setValueOfModalDisplay("none");
                }}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
