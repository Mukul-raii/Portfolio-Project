import React from "react";
import "./App.css";

import Navbar from "./assets/components/Navbar/Navbar.jsx";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/About/About.jsx";


function App(){

  
  return (
      <>
        <Navbar  className="navbarStyle"/>
        <Home className="homeStyle"/>
        <About  className="aboutStyle"/>
        

</>
      
  );
};

export default App;



