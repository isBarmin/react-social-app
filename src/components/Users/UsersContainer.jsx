import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  setUsersAC,
  followAC,
  unfollowAC,
  setTotalUsersCountAC,
  setCurrentPageAC
} from "../../store/users-reducer";

const mapStateToProps = state => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsersAC(users)),
  follow: userId => dispatch(followAC(userId)),
  unfollow: userId => dispatch(unfollowAC(userId)),
  setTotalUsersCount: count => dispatch(setTotalUsersCountAC(count)),
  setCurrentPage: num => dispatch(setCurrentPageAC(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
