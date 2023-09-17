import React from "react";
import cx from "classnames";
import { Formik, Form } from "formik";
import { SIGNUP_SCHEMA } from "../../../utils/validationSchema";
import InputField from "../InputField";
import InputRadioWrapper from "../InputRadioWrapper";
import ButtonWrapper from "../../ButtonWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: ""
};

const SignUpForm = () => {
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={SIGNUP_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.flexContainer}>
              <InputField
                type="text"
                name="firstName"
                placeholder="First name"
              />
              <InputField type="text" name="lastName" placeholder="Last name" />
            </div>
            <div className={styles.flexContainer}>
              <InputField
                type="text"
                name="displayName"
                placeholder="Display name"
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className={styles.flexContainer}>
              <InputField
                type="password"
                name="password"
                placeholder="Password"
              />

              <InputField
                type="password"
                name="confirmPassword"
                placeholder="Password Confirmation"
              />
            </div>
            <div className={styles.radioContainer}>
              <InputRadioWrapper name="role" value="buyer">
                <div className={styles.leftMargin}>
                  <h6 className={styles.textNoMargin}>Join as a Buyer</h6>
                  <p className={cx(styles.textNoMargin, styles.textSmall)}>
                    I am looking for a Name, Logo or Tagline for my business or
                    product
                  </p>
                </div>
              </InputRadioWrapper>
            </div>
            <div className={styles.radioContainer}>
              <InputRadioWrapper name="role" value="seller">
                <div className={styles.leftMargin}>
                  <h6 className={cx(styles.textNoMargin)}>
                    Join as a Creative or Marketplace Seller
                  </h6>
                  <p className={cx(styles.textNoMargin, styles.textSmall)}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace
                  </p>
                </div>
              </InputRadioWrapper>
            </div>
            <div>
              <ButtonWrapper type="submit" disabled={isSubmitting}>
                Create account
              </ButtonWrapper>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
