import React from "react";
import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>

        <p className="contact-email">
          📧{" "}
          <a href={`mailto:${portfolioData.email}`}>
            {portfolioData.email}
          </a>
        </p>

        {/* SOCIAL LINKS */}
        <div className="contact-socials">
          <a href={portfolioData.socialLinks.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={portfolioData.socialLinks.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={portfolioData.socialLinks.tryhackme} target="_blank" rel="noreferrer">
            TryHackMe
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
