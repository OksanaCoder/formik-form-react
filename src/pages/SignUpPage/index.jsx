import React from "react";
import cx from "classnames";
import SignUpForm from "../../components/forms/SignUpForm";
import styles from "./SignUpPage.module.scss";

const SignUpPage = () => {
  return (
    <div>
      <h3 className={cx(styles.textUppercase, styles.textWhite)}>
        Create an account
      </h3>
      <p className={styles.textWhite}>
        We always keep your name and email address private.
      </p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
