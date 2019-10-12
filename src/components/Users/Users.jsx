import React from "react";
import axios from "axios";

import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
      )
      .then(response => {
        const users = response.data.items;
        const totalCount = response.data.totalCount;
        this.props.setUsers(users);
        this.props.setTotalUsersCount(totalCount);
      });
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      const { follow, unfollow } = this.props;

      return (
        <div className={s.userCard} key={user.id}>
          <div className={s.userCard__side}>
            <div className={s.userCard__avatar}>
              <img src={user.photos.small} alt="" />
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

  renderPagination = () => {
    const { totalUsersCount, pageSize, currentPage } = this.props;
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
          onClick={() => this.handlePagerItemClick(i)}
        >
          {i}
        </button>
      );
      items.push(item);
    }

    return <div className={s.pager}>{items}</div>;
  };

  handlePagerItemClick = currentPage => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${
          this.props.pageSize
        }`
      )
      .then(response => {
        const users = response.data.items;
        this.props.setUsers(users);
      });
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.renderPagination()}
        {this.renderUsers()}
      </div>
    );
  }
}

export default Users;
