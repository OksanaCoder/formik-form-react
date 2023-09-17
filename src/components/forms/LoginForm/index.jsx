import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { LOGIN_SCHEMA } from "../../../utils/validationSchema";
import InputField from "../InputField";
import ButtonWrapper from "../../ButtonWrapper";
import styles from "./LoginForm.module.scss";

const initialValues = {
  email: "",
  password: ""
};

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField type="email" name="email" placeholder="Email" />

            <InputField
              type="password"
              name="password"
              placeholder="Password"
            />

            <div>
              <ButtonWrapper type="submit" disabled={isSubmitting}>
                Login
              </ButtonWrapper>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
