import { useEffect } from "react";
import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  
    return (
    <div id="navbar" className={styles.Navbar}>
      <div className={styles["Navbar-Component"]}>
        <div className={styles["Navbar-Component-a"]}>

        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Project">Projects</a>
        </div>

        <div  className={styles["contactme"]}>
          <button className={styles["button2"]} href="https://www.linkedin.com/in/mukul-rai-3546822564654687786786/"> Contact me</button>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
