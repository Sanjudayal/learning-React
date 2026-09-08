import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1 className="logo">Sael</h1>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
};

export default Header;
