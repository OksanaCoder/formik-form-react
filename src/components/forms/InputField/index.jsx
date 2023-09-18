import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./InputField.module.scss";

const InputField = ({ name, type, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        console.log(field, meta);
        return (
          <label className={styles.relativeWrapper}>
            <input
              type={type}
              {...field}
              {...options}
              className={cx(
                styles.inputStyle,
                meta.touched && meta.error ? styles.errorInput : ""
              )}
            />
            <ErrorMessage
              name={name}
              component="div"
              className={styles.error}
            />
          </label>
        );
      }}
    </Field>
  );
};

export default InputField;
