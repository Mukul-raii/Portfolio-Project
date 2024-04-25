import React, { useRef } from "react";
import styles from "./Home.module.css";

import { Parallax } from "react-scroll-parallax";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const headingText = "I AM A WEB DEVELOPER"; // The text you want to type out for the heading
const nameText = "MUKUL RAI"; // The text you want to type out for the name
const typingSpeed = 100; // Typing speed in milliseconds

// Function to simulate typing effect
function typeWriter(text, speed, element) {
  let i = 0;
  element.style.borderRight = "2px solid white"; // Display text cursor
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      element.style.borderRight = "none"; // Remove text cursor after typing is done
    }
  }, speed);
}

window.onload = function () {
  const headingElement = document.getElementById("typing-heading");
  const nameElement = document.getElementById("typing-name");
  typeWriter(headingText, typingSpeed, headingElement);
  setTimeout(() => {
    typeWriter(nameText, typingSpeed, nameElement);
  }, headingText.length * typingSpeed + 500); // Wait for heading to finish typing before typing the name
};

const Home = () => {
  return (
    <div id="Home" className={styles.Home}>
      <div className={styles["Home-components"]}>
        <div className={styles["H1div"]}>
          <h1 id="typing-heading" className={styles["HomeH1"]}></h1>
        </div>
        <div className={styles["Img-Component"]}>
          <img
            src="./images/Picsart_24-04-05_09-30-26-405.png"
            alt=""
            className={styles["image"]}
          />
        </div>
        <div className={styles["H2div"]}>
          <h2 id="typing-name" className={styles["HomeH2"]}></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
