import React from "react";
import styles from "./Header.module.scss";

const Header = ({ ...props }): JSX.Element => {
  return <div className={styles.Header}>header</div>;
};

export default Header;
