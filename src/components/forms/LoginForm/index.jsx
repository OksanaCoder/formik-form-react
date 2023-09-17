import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { LOGIN_SCHEMA } from "../../../utils/validationSchema";
import InputField from "../InputField";
import ButtonWrapper from "../../ButtonWrapper";
import styles from "./LoginForm.module.scss";

const initialValues = {
  email: "",
  password: ""
};

const LoginForm = () => {
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
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
            <div>
              <InputField type="email" name="email" placeholder="Email" />
            </div>
            <div>
              <InputField
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

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
