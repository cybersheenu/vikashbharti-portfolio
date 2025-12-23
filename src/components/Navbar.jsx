import React from "react";
import logo from "../assets/logo.png"; // 👈 logo import
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT : LOGO + TEXT */}
      <div className="nav-brand">
        <img src={logo} alt="CyberSheenu Logo" className="nav-logo" />
        <span className="logo-text">CyberSheenu</span>
      </div>

      {/* RIGHT : MENU */}
     <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#experience">Experience</a></li>
     

       
   <li><a href="#contact">Contact</a></li>

   

  {/* 🔥 RESUME BUTTON */}
  <li>
    <a
      href="/VikashBharti-Resume.pdf"
      download
      className="resume-btn"
    >
      Download Resume
    </a>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
