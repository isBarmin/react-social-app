import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import AuthUser from "./AuthUser";
import { setAuthUserDataAC } from "../../../store/auth-reducer";

class AuthUserContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        const { id, email, login } = response.data.data;

        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <AuthUser {...this.props} />;
  }
}

const mapStateToProps = state => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = dispatch => ({
  setAuthUserData: (id, email, login) =>
    dispatch(setAuthUserDataAC(id, email, login))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUserContainer);
