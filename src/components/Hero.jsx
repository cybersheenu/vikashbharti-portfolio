import React from "react";
import profile from "../assets/profile.png";
import "../App.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* TEXT */}
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Vikash Bharti</span>
        </h1>

        <h2>
          Ethical Hacker | Bug Bounty Hunter <br />
          Security Researcher
        </h2>

        <p>
         A passionate Ethical Hacker & Bug Bounty Hunter specializing in discovering real-world vulnerabilities, breaking flawed business logic, and securing modern web applications before attackers do.
        </p>

        <div className="buttons">
          <a href="#skills">View My Work</a>
          <a href="#contact" className="outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="hero-portrait">
        <img src={profile} alt="Vikash Bharti" />
      </div>

      
      <div className="buttons">
 
</div>

    </section>
  );
}

export default Hero;
