import React from "react";
import { portfolioData } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="cert-section">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {portfolioData.certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.platform}</p>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
