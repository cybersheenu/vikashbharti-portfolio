import React from "react";

function Experience() {
  return (
    <section id="experience" className="experience-new">
      <h2>💼 Experience</h2>

      <div className="experience-grid">

        <div className="experience-card">
          <h3>Bug Bounty Hunting</h3>
          <p>
            OTP Bypass, Rate Limit Issues, Authentication Flaws discovered
            in real-world applications.
          </p>
        </div>

        <div className="experience-card">
          <h3>Business Logic Vulnerabilities</h3>
          <p>
            Price Manipulation, Coupon Abuse, Workflow Bypass issues
            identified during testing.
          </p>
        </div>

        <div className="experience-card">
          <h3>No Rate Limit & Abuse Issues</h3>
          <p>
            OTP brute-force, API abuse and missing rate-limiting
            vulnerabilities tested.
          </p>
        </div>

        <div className="experience-card">
          <h3>CTF Challenges & Labs</h3>
          <p>
            Web exploitation, privilege escalation and hands-on
            security lab practice.
          </p>
        </div>

        <div className="experience-card">
          <h3>Web Application Security</h3>
          <p>
            IDOR, XSS, SQL Injection, Security Misconfigurations
            found and analyzed.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
