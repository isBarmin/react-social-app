import React from "react";
import axios from "axios";

import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        const users = response.data.items;
        this.props.setUsers(users);
      });
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      const { follow, unfollow } = this.props;

      return (
        <div className={s.userCard} key={user.id}>
          <div className={s.userCard__side}>
            <div className={s.userCard__avatar}>
              <img src={user.photosUrl} alt="" />
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
