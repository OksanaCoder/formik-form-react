import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./InputRadioWrapper.module.scss";

const InputRadioWrapper = ({ name, value, children, ...options }) => {
  console.log(options, "options");
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <label className={styles.radioBox}>
            <input {...field} type="radio" value={value} {...options} />
            {children}
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

export default InputRadioWrapper;
