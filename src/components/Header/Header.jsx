import React from "react";

import s from "./Header.module.css";
import AuthUser from "./AuthUser/AuthUser";

const Header = props => {
  return (
    <header className={s.header}>
      <div className={s.header__part}>
        <a className={s.logo}>
          <img src="" alt="Logo" />
        </a>
      </div>

      <div className={`${s.header__part}  ${s.header__part_right}`}>
        <AuthUser />
      </div>
    </header>
  );
};

export default Header;
