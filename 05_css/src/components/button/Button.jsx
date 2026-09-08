import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Click Here</button>
      </div>
    </div>
  );
};

export default Button;
