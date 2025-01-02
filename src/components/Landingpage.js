import React, { useState } from "react";
import logo from "../Logos/logo.png";
import "./compoCss/Landingpage.css";

function Landingpage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div id="landing-page">
      <div className="navbar">
        <img src={logo} alt="msg" />

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`navigation ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#cont">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="para">
        <p>
          Capturing Every Angle From Real Estate to Culinary Art, We Bring Your
          Vision to Life.
        </p>
      </div>
    </div>
  );
}

export default Landingpage;
