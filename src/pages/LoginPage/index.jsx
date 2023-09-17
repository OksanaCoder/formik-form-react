import React from "react";
import cx from "classnames";
import styles from "./Login.module.scss";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h3 className={cx(styles.textUppercase, styles.textWhite)}>
        Login to your account
      </h3>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
