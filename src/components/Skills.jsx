import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2> 🛠️ Skills</h2>

      <div className="skills-box-wrapper">

        {/* BOX 1 */}
        <div className="skills-box">
          <h3>Offensive Security</h3>
          <ul>
            <li>Web Application Security</li>
            <li>Business Logic Flaws</li>
            <li>Authentication & Authorization</li>
            <li>OTP / Rate Limit Bypass</li>
            <li>API Security Testing</li>
          </ul>
        </div>

        {/* BOX 2 */}
        <div className="skills-box">
          <h3>Tools & Frameworks</h3>
          <ul>
            <li>Burp Suite (Advanced)</li>
            <li>Metasploit Framework</li>
            <li>Wireshark</li>
            <li>John The Ripper</li>
            <li>Nmap & Recon Tools</li>
          </ul>
        </div>

        {/* BOX 3 */}
        <div className="skills-box">
          <h3>Bug Bounty & CTF</h3>
          <ul>
            <li>Bug Bounty Hunting</li>
            <li>CTF Challenges</li>
            <li>OWASP Top 10</li>
            <li>Responsible Disclosure</li>
            <li>Vulnerability Reporting</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
