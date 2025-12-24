import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-brand">
        <img src={logo} alt="CyberSheenu Logo" className="nav-logo" />
        <span className="logo-text">CyberSheenu</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <ul className={open ? "open" : ""}>
       <li>
  <a href="#home" data-label="Home" onClick={closeMenu}>🏠</a>
</li>
<li>
  <a href="#skills" data-label="Skills" onClick={closeMenu}>🛠️</a>
</li>
<li>
  <a href="#experience" data-label="Experience" onClick={closeMenu}>💼</a>
</li>
<li>
  <a href="#contact" data-label="Contact" onClick={closeMenu}>✉️</a>
</li>


        <li className="mobile-resume">
          <a href="/VikashBharti-Resume.pdf" download onClick={closeMenu}>
            📄 Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
