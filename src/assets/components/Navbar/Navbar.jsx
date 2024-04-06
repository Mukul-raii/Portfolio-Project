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
        <a href="">Projects</a>
        </div>

        <div  className={styles["contactme"]}>
         
          <a href="">Contact me</a>  
    </div>
      </div>
      
    </div>
  );
}

export default Navbar;
