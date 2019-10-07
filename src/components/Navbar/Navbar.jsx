import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className={s.navbar}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={s.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
