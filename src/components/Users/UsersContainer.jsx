import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { followAC, unfollowAC } from '../../store/users-reducer';

const mapStateToProps = state => ({
  users: state.usersPage.users
});

const mapDispatchToProps = dispatch => ({
  follow: userId => dispatch(followAC(userId)),
  unfollow: userId => dispatch(unfollowAC(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
