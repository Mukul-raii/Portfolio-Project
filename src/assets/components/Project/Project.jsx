import React from "react";
import styles from "./Project.module.css";

function Project() {
  return (
    <div id="Project" className={styles.Project}>
      <div className={styles["Project-Heading"]}>
        <h1>My Projects</h1>
      </div>

      <div className={styles["projects-components"]}>

        <div id="project-1" className={styles["newProject"]}>
        <img src="/images/portfolio.png" alt="" />
       
        </div>
        <div id="project-2" className={styles["newProject"]}>
        <img src="/images/coming.avif" alt="" />
      
        </div>
        <div id="project-3" className={styles["newProject"]}>
        <img src="/images/coming.avif" alt="" />
      
        </div>


      </div>
    </div>
  );
}

export default Project;
