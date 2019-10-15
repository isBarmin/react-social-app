import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setCurrentPageAC,
  setFollowingProgressAC,
  getUsersTC
} from "../../store/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;
    getUsers(currentPage, pageSize);
  }

  changePage = pageNum => {
    const { getUsers, pageSize } = this.props;
    this.props.setCurrentPage(pageNum);
    getUsers(pageNum, pageSize);
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

const mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setCurrentPage: setCurrentPageAC,
  setFollowingProgress: setFollowingProgressAC,
  getUsers: getUsersTC
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
