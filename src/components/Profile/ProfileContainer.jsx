import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

import Profile from "./Profile";
import { getUserProfileTC } from "../../store/profile-reducer";
import withAuthRedirect from "../../hocs/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profile.userProfile
});

const mapDispatchToProps = {
  getUserProfile: getUserProfileTC
};

export default compose(
  withAuthRedirect,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileContainer);
