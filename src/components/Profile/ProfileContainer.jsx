import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import Profile from './Profile';
import {
  getUserProfileTC,
  getUserStatusTC,
  updateUserStatusTC
} from '../../store/profile-reducer';
import withAuthRedirect from '../../hocs/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.userProfile,
  status: state.profile.userStatus
});

const mapDispatchToProps = {
  getUserProfile: getUserProfileTC,
  getUserStatus: getUserStatusTC,
  updateUserStatus: updateUserStatusTC
};

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileContainer);
