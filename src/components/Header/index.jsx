import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./logo.png";
const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <img src={logo} alt="squadhelp" />
      {location.pathname === "/" || location.pathname === "/sign-up" ? (
        <Link to="login" className={styles.authLink}>
          Login
        </Link>
      ) : (
        <Link to="sign-up" className={styles.authLink}>
          Sign Up
        </Link>
      )}
    </div>
  );
};

export default Header;
