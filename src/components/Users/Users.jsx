import React from "react";

import s from "./Users.module.css";
import Preloader from "../Preloader/Preloader";
import { NavLink } from "react-router-dom";

const Users = props => {
  const {
    users,
    follow,
    unfollow,
    totalUsersCount,
    pageSize,
    currentPage,
    changePage,
    isFetching
  } = props;

  const renderUsers = () => {
    return users.map(user => {
      return (
        <div className={s.userCard} key={user.id}>
          <div className={s.userCard__side}>
            <div className={s.userCard__avatar}>
              <NavLink to={`profile/${user.id}`}>
                <img src={user.photos.small} alt="" />
              </NavLink>
            </div>
            {user.followed ? (
              <button onClick={() => unfollow(user.id)}>unfollow</button>
            ) : (
              <button onClick={() => follow(user.id)}>follow</button>
            )}
          </div>

          <div className={s.userCard__body}>
            <p className={s.userCard__text}>{user.name}</p>
            <p className={s.userCard__text}>{user.status}</p>
          </div>
        </div>
      );
    });
  };

  const renderPagination = () => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const items = [];

    for (let i = 1; i <= pagesCount; i++) {
      const classes = [s.pager__item];
      if (currentPage === i) {
        classes.push(s.active);
      }
      const item = (
        <button
          key={i}
          className={classes.join(" ")}
          onClick={() => changePage(i)}
        >
          {i}
        </button>
      );
      items.push(item);
    }

    return <div className={s.pager}>{items}</div>;
  };

  return (
    <div>
      <h1>Users</h1>
      {renderPagination()}
      {isFetching ? <Preloader /> : null}
      {renderUsers()}
    </div>
  );
};

export default Users;
