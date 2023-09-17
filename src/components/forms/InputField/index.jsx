import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./InputField.module.scss";

const InputField = ({ name, ...options }) => {
  return (
    <Field name={name}>
      {({ form }) => {
        const { touched, errors } = form;
        return (
          <>
            <input
              type={name}
              {...options}
              className={cx(
                styles.inputStyle,
                touched[name] && errors[name] ? styles.errorInput : ""
              )}
            />
            <ErrorMessage
              name={name}
              component="div"
              className={styles.error}
            />
          </>
        );
      }}
    </Field>
  );
};

export default InputField;
