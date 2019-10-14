import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import axios from "axios";

import Profile from "./Profile";
import { setUserProfileAC } from "../../store/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        const profile = response.data;
        this.props.setUserProfile(profile);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profile.userProfile
});

const mapDispatchToProps = dispatch => ({
  setUserProfile: profile => dispatch(setUserProfileAC(profile))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileContainer);
