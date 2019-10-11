import React from "react";
import { connect } from "react-redux";

import Users from "./Users";
import { setUsersAC, followAC, unfollowAC } from "../../store/users-reducer";

const mapStateToProps = state => ({
  users: state.usersPage.users
});

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsersAC(users)),
  follow: userId => dispatch(followAC(userId)),
  unfollow: userId => dispatch(unfollowAC(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
