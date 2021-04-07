import React from "react";
import styles from "./Hello.module.scss";

const Hello = ({ name, age, job, title }: { name: string, age: number, job?: string, title: string }) => {
  return <div className={styles.Hello}>
    hello {name} your age is {age}
  </div>;
};

export default Hello;
