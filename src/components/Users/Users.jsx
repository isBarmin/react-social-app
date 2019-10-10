import React from 'react';

const Users = props => {
  const { users, follow, unfollow } = props;

  const usersElements = users.map(user => {
    return (
      <div className="user-card" key={user.id}>
        <div className="user-card__side">
          <img className="user-card__avatar" src={user.photoUrl} alt="" />
          {user.followed ? (
            <button onClick={() => unfollow(user.id)}>unfollow</button>
          ) : (
            <button onClick={() => follow(user.id)}>follow</button>
          )}
        </div>

        <div className="user-card__body">
          <p className="user-card__text">{user.fullName}</p>
          <p className="user-card__text">
            {user.location.Country} {user.location.city}
          </p>
          <p className="user-card__text">{user.status}</p>
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
