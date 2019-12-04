import React from 'react';
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { loginTC, logoutTC } from '../../store/auth-reducer';
import { Redirect } from 'react-router';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s['form-row']}>
        <Field
          component={Input}
          type="text"
          name="email"
          placeholder="email"
          validate={[required]}
        />
      </div>
      <div className={s['form-row']}>
        <Field
          component={Input}
          type="password"
          name="password"
          placeholder="Password"
          validate={[required]}
        />
      </div>
      <div className={s['form-row']}>
        <label>
          <Field component="input" type="checkbox" name="rememberMe" /> remember
          me
        </label>
      </div>
      {props.error && <p className={s['form-error-message']}>{props.error}</p>}
      <div className={s['form-row']}>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = props => {
  const { login, isAuth } = props;

  const onSubmit = formData => {
    const { email, password, rememberMe } = formData;
    login(email, password, rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  {
    login: loginTC,
    logout: logoutTC
  }
)(Login);
