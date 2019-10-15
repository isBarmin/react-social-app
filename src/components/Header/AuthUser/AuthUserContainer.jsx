import React from "react";
import { connect } from "react-redux";

import AuthUser from "./AuthUser";
import { getAuthUserDataTC } from "../../../store/auth-reducer";
import { authAPI } from "../../../api/api";

class AuthUserContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    authAPI.me().then(data => {
      const { id, email, login } = data.data;
      if (data.resultCode === 0) {
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

export default connect(
  mapStateToProps,
  {
    getAuthUserData: getAuthUserDataTC
  }
)(AuthUserContainer);
