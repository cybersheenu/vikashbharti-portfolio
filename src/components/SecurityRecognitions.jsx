import React from "react";
import { portfolioData } from "../data/portfolioData";

function SecurityRecognitions() {
  return (
    <section id="security" className="security-section">
      <h2>🐞Security Recognitions🐞</h2>

      <div className="security-grid">
        {portfolioData.securityRecognitions.map((item, index) => (
          <div className="security-card" key={index}>
            <h3>{item.company}</h3>

            <p className="security-program">
              {item.program}
            </p>

            <p className="security-vuln">
              🐞 {item.vulnerability}
            </p>

            <div className="security-footer">
              <span>{item.year}</span>
              <a
                href={item.proof}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recognition →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecurityRecognitions;
