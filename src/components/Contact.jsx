import React from "react";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <p className="contact-email">
        📧{" "}
        <a href={`mailto:${portfolioData.email}`}>
          {portfolioData.email}
        </a>
      </p>
    </section>
  );
}

export default Contact;
