import React from 'react';
import s from './AuthUser.module.css';
import { NavLink } from 'react-router-dom';

const AuthUser = props => {
  const { login, logout, isAuth } = props;
  let body;

  const handleLogoutClick = () => {
    logout();
  };

  body = isAuth ? (
    <>
      <span className={s.userBlock__login}>{login}</span>
      <button onClick={handleLogoutClick}>Logout</button>
    </>
  ) : (
    (body = <NavLink to="/login">Login</NavLink>)
  );

  return <div className={s.userBlock}>{body}</div>;
};

export default AuthUser;
