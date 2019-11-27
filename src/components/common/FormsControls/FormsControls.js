import React from "react";
import classNames from "classnames";
import s from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const classes = classNames({
    [s["form-control"]]: true,
    [s.error]: hasError
  });

  return (
    <div className={classes}>
      <textarea className={s["form-control__field"]} {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
