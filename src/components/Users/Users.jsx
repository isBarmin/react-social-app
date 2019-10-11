import React from 'react';
import s from './Users.module.css';

class Users extends React.Component {
  renderUsers = () => {
    return this.props.users.map(user => {
      const { follow, unfollow } = this.props;

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
              {user.location.country} {user.location.city}
            </p>
            <p className={s.userCard__text}>{user.status}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

export default Users;
