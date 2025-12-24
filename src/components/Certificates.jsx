import React from "react";
import { portfolioData } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="cert-showcase">
      
      {/* LEFT CONTENT */}
      <div className="cert-left">
        <h4>Check Out</h4>
        <h2> 📜 My Certificates</h2>

        <p>
          I have completed multiple cybersecurity and programming courses to
          strengthen my technical foundation. Below are some key certifications
          that showcase my learning journey and practical skills.
        </p>

        <a href="#contact" className="cert-btn">
          Know More
        </a>
      </div>

      {/* RIGHT CARDS */}
      <div className="cert-right">
        {portfolioData.certificates.map((cert, index) => (
          <div className="cert-mini-card" key={index}>
            {/* future image support */}
            {/* <img src={cert.image} alt={cert.title} /> */}

            <h3>{cert.title}</h3>
            <span>{cert.platform}</span>
            <small>{cert.year}</small>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Certificates;
