import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";

const LoginForm = props => {
  return (
    <div className={s.login}>
      <form onSubmit={props.handleSubmit}>
        <p>
          <Field
            component="input"
            type="text"
            name="login"
            placeholder="Login"
          />
        </p>
        <p>
          <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </p>
        <p>
          <label>
            <Field component="input" type="checkbox" name="rememberMe" />{" "}
            remember me
          </label>
        </p>
        <p>
          <button>Login</button>
        </p>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
