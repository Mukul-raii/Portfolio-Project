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
          
            <p> 😄 Pronouns: He/Him</p>
            <p> 👋 Hi, I’m @Mukul-raii</p>
            <p> 👀 I’m interested in coding, machine learning, and open source projects.</p>
            <p> 👀 I’m interested in coding, Web Devlopment,machine learning, and open source projects.</p>
            <p> 🌱 I’m currently learning new technologies and frameworks to enhance my development skills.</p>
            <p> 💞️ I’m looking to collaborate on innovative projects and contribute to impactful initiatives.</p>
            <p> 📫 How to reach me: Feel free to connect with me via email at mukurai2004@gmail.com or through my LinkedIn profile.</p>

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
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
              alt=""
            />
       
            <img
              className={styles["logo"]}
              src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
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
              src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
              alt=""
            />
       
            <img
              className={styles["logo"]}
              src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
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
