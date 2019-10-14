import React from "react";
import s from "./AuthUser.module.css";
import { NavLink } from "react-router-dom";

const AuthUser = props => {
  const { login, isAuth } = props;
  let body;

  if (isAuth) {
    body = <button>Logout</button>;
  } else {
    body = (
      <>
        <span className={s.userBlock__login}>{login}</span>
        <NavLink to="/login">Login</NavLink>
      </>
    );
  }

  return <div className={s.userBlock}>{body}</div>;
};

export default AuthUser;
