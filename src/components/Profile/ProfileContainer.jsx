import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import Profile from "./Profile";
import { setUserProfileAC } from "../../store/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        const profile = response.data.profile;
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile
});

const mapDispatchToProps = dispatch => ({
  setUserProfile: profile => dispatch(setUserProfileAC(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
