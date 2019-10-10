import React from 'react';
import s from './Users.module.css';

const Users = props => {
  const { users, follow, unfollow } = props;

  const usersElements = users.map(user => {
    return (
      <div className={s.userCard} key={user.id}>
        <div className={s.userCard__side}>
          <div className={s.userCard__avatar}>
            <img src={user.photoUrl} alt="" />
          </div>
          {user.followed ? (
            <button onClick={() => unfollow(user.id)}>unfollow</button>
          ) : (
            <button onClick={() => follow(user.id)}>follow</button>
          )}
        </div>

        <div className={s.userCard__body}>
          <p className={s.userCard__text}>{user.fullName}</p>
          <p className={s.userCard__text}>
            {user.location.Country} {user.location.city}
          </p>
          <p className={s.userCard__text}>{user.status}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Users</h1>
      {usersElements}
    </div>
  );
};

export default Users;
