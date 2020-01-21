import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
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
  </nav>
);
