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
          Ethical Hacker | Bug Hunter <br />
          Security Researcher
        </h2>
             
          

            {/* Bio */}

       <div className="hero-bio">
<div className="bio-wrapper">
  <p className="bio-line line-1">
    Uncovering vulnerabilities before attackers can exploit them.<br />
      Focused on hands-on testing, ethical disclosure,
    and lifelong learning.
  </p>

  <p className="bio-line line-2">
   {/* You can add some extra line for bio */}
  </p>

  <span className="bio-underline"></span>
</div>

</div>


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
