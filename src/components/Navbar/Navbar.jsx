import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Switcher } from "../Switcher/Switcher";
import { SwitchContext } from "../../context/switch/switchContext";

export const Navbar = () => {
  const switcher = useContext(SwitchContext);
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
        </ul>
      </div>
      <div className="navbar-switcher">
        <Switcher />
      </div>
    </nav>
  );
};
