import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  setUsersAC,
  followAC,
  unfollowAC,
  setTotalUsersCountAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setFollowingProgressAC
} from "../../store/users-reducer";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        const users = data.items;
        const totalCount = data.totalCount;
        this.props.setUsers(users);
        this.props.setTotalUsersCount(totalCount);
        this.props.setIsFetching(false);
      });
  }

  changePage = pageNum => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNum);
    usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
      const users = data.items;
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
        followedInProgress={this.props.followedInProgress}
        setFollowingProgress={this.props.setFollowingProgress}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followedInProgress: state.usersPage.followedInProgress
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsersAC(users)),
  follow: userId => dispatch(followAC(userId)),
  unfollow: userId => dispatch(unfollowAC(userId)),
  setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
  setCurrentPage: num => dispatch(setCurrentPageAC(num)),
  setIsFetching: isFetching => dispatch(setIsFetchingAC(isFetching)),
  setFollowingProgress: (isFetching, userId) =>
    dispatch(setFollowingProgressAC(isFetching, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
