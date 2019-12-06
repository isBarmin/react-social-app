import React from 'react';
import { connect } from 'react-redux';

import AuthUser from './AuthUser';
import { logoutTC } from '../../../store/auth-reducer';

class AuthUserContainer extends React.Component {
  render() {
    return <AuthUser {...this.props} />;
  }
}

const mapStateToProps = state => ({
  id: state.auth.userId,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  {
    logout: logoutTC
  }
)(AuthUserContainer);
