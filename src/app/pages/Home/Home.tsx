import Hello from "app/components/Hello";
import React from "react";
import styles from "./Home.module.scss";

const Home = ({ ...props }) => {
  return <div className={styles.Home}>
    <Hello name="basem" age={23} title="frontend" />
  </div>;
};

export default Home;
