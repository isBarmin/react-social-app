import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Users from "./Users";
import {
  setUsersAC,
  followAC,
  unfollowAC,
  setTotalUsersCountAC,
  setCurrentPageAC,
  setIsFetchingAC
} from "../../store/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
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
        this.props.setIsFetching(false);
      });
  }

  changePage = pageNum => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${
          this.props.pageSize
        }`
      )
      .then(response => {
        const users = response.data.items;
        this.props.setUsers(users);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        changePage={this.changePage}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsersAC(users)),
  follow: userId => dispatch(followAC(userId)),
  unfollow: userId => dispatch(unfollowAC(userId)),
  setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
  setCurrentPage: num => dispatch(setCurrentPageAC(num)),
  setIsFetching: isFetching => dispatch(setIsFetchingAC(isFetching))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
