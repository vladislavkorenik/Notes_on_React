import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { Switcher } from "../Switcher/Switcher";
import { signOut } from "../../store/actionCreators/loginActionCreators";

export const Navbar = () => {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.loginReducer.authorized);
  const themeSwitcher = useSelector(
    (state) => state.switchReducer.themeSwitcher
  );

  const classes = `navbar navbar-dark ${
    themeSwitcher ? "bg-dark" : "bg-danger"
  }`;

  return (
    <nav className={classes}>
      <div className="navbar-expand-lg" style={{ display: "flex" }}>
        <div className="navbar-brand">NoteApp</div>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/about" exact>
              About us
            </NavLink>
          </li>
          {authorized ? (
            <li className="nav-item ">
              <a
                className="nav-link"
                href="/login"
                onClick={() => dispatch(signOut())}
              >
                Sign out
              </a>
            </li>
          ) : (
            <li className="nav-item ">
              <NavLink className="nav-link" to="/login" exact>
                Sign in
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-switcher">
        <Switcher />
      </div>
    </nav>
  );
};
