import React, { useRef } from "react"; // Import useRef
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar.jsx";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/About/About.jsx";
import Project from "./assets/components/Project/Project.jsx"


const App = () => {
  return (
    <div>
      <Navbar className="navbarStyle" />
      <Home className="homeStyle" />

      <About className="aboutStyle" />
      <Project className="projectStyle" />

    </div>
  );
};

export default App;
