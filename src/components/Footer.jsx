import React from "react";
import { portfolioData } from "../data/portfolioData";

function Footer() {
  const { instagram, linkedin, youtube, github, tryhackme } =
    portfolioData.socialLinks;

  return (
    <footer className="footer">
      {/* <a href={instagram} target="_blank" rel="noreferrer">
        Instagram
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href={youtube} target="_blank" rel="noreferrer">
        YouTube
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a href={tryhackme} target="_blank" rel="noreferrer">
        TryHackMe
      </a> */}
    </footer>
  );
}

export default Footer;
