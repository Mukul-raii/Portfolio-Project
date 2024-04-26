import React from "react";
import styles from "./Project.module.css";

function Project() {
  return (
    <div id="Project" className={styles.Project}>
      <div className={styles["Project-Heading"]}>
        <h1 className={styles["tracking-in-contract-bck-top"]}>My Projects</h1>
      </div>

      <div className={styles["projects-components"]}>
        
        
        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div className={styles["flip-card-front"]}>
              <img
                className={styles["mainImg"]}
                src="/images/portfolio.jpeg"
                alt=""
              />
            </div>

            <div className={styles["flip-card-back"]}>
              <div className={styles["Main-content"]}>
                <a className={styles["flip-card-back-head"]}>Project Name</a>
                <a className={styles["flip-card-back-para"]}>
                  Lorem ipsum dolor sit, amet consectetur adipisicingelit.
                  Recusandae consequuntur ipsa quos quod officia, reprehenderit
                  ipsum
                </a>
                <div className={styles["links"]}>
                  <a href="">Github</a>
                  <a href="">Live view</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div className={styles["flip-card-front"]}>
              <img src="/images/coming.avif" alt="" />
            </div>

            <div className={styles["flip-card-back"]}>
              <div className={styles["Main-content"]}>
                <a className={styles["flip-card-back-head"]}>Project Name</a>
                <a>
                  Lorem ipsum dolor sit, amet consectetur adipisicingelit.
                  Recusandae consequuntur ipsa quos quod officia, reprehenderit
                  ipsum
                </a>
                <div className={styles["links"]}>
                  <a href="">Github</a>
                  <a href="">Live view</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["flip-card"]}>
          <div className={styles["flip-card-inner"]}>
            <div className={styles["flip-card-front"]}>
              <img src="/images/coming.avif" alt="" />
            </div>

            <div className={styles["flip-card-back"]}>
              <div className={styles["Main-content"]}>
                <a className={styles["flip-card-back-head"]}>Project Name</a>
                <a>
                  Lorem ipsum dolor sit, amet consectetur adipisicingelit.
                  Recusandae consequuntur ipsa quos quod officia, reprehenderit
                  ipsum
                </a>
                <div className={styles["links"]}>
                  <a href="">Github</a>
                  <a href="">Live view</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
}

export default Project;
