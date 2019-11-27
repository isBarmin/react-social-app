import React from "react";
import classNames from "classnames";
import s from "./FormsControls.module.css";

const FormControl = ({ input, meta, element, ...props }) => {
  const hasError = meta.touched && meta.error;
  const classes = classNames({
    [s["form-control"]]: true,
    [s.error]: hasError
  });
  const Component = element || "input";

  return (
    <div className={classes}>
      <Component className={s["form-control__field"]} {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = props => {
  return <FormControl {...props} element="textarea" />;
};

export const Input = props => {
  return <FormControl {...props} element="input" />;
};
