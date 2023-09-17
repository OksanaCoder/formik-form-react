import React from "react";
import styles from "./ButtonWrapper.module.scss";

const ButtonWrapper = ({ children }) => {
  return <button className={styles.authBtn}>{children}</button>;
};

export default ButtonWrapper;
