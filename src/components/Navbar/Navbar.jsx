import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Switcher } from "../Switcher/Switcher";
import { SwitchContext } from "../../context/switch/switchContext";
import { LoginContext } from "../../context/login/loginContext";

export const Navbar = () => {
  const switcher = useContext(SwitchContext);
  const login = useContext(LoginContext);
  const classes = `navbar navbar-dark ${
    switcher.themeSwitcher ? "bg-dark" : "bg-danger"
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
          {login.authorized ? (
            <li className="nav-item ">
              <a
                className="nav-link"
                href="/login"
                onClick={() =>
                  login.signOut()
                }
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
