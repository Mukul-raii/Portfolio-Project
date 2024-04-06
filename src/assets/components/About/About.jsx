import React from "react";
import styles from "./About.module.css";
import Draggable from "react-draggable";

function About() {
  return (
    <div id="About" className={styles["Main-About"]}>
      <div className={styles.About}>
        <div className={styles["Image-Container"]}>
          <img src="./images/Picsart_24-04-05_09-30-26-405.png" alt="" />
        </div>

        <div className={styles["Content"]}>
          <div className={styles["h1-content"]}>
            <h1> About me</h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non,
              iste exercitationem maiores cupiditate tenetur, laborum totam odio
              sint, similique nobis nesciunt voluptates quo dignissimos corporis
              voluptatibus. Consequuntur, ab voluptas! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Esse non, iste exercitationem
              maiores cupiditate tenetur, laborum totam odio sint, similique
              nobis nesciunt voluptates quo dignissimos corporis voluptatibus.
              Consequuntur, ab voluptas!
            </p>
          </div>
        </div>
      </div>

      <div className={styles["logo-main"]}>
        <Draggable axis="x">
          <div
            className={styles["logo-container"]}
            onMouseEnter={() =>
              (document.querySelector(
                `.${styles["logo-container"]}`
              ).style.animationPlayState = "paused")
            }
            onMouseLeave={() =>
              (document.querySelector(
                `.${styles["logo-container"]}`
              ).style.animationPlayState = "running")
            }
          >
            <img
              className={styles["logo"]}
              src="/images/Java-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/html-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/CSS-Logo-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/jss-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/Mongo-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/express-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/nodejs-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/Java-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/html-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/CSS-Logo-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/jss-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/Mongo-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/express-removebg-preview.png"
              alt=""
            />
            <img
              className={styles["logo"]}
              src="/images/nodejs-removebg-preview.png"
              alt=""
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default About;
