import React from "react";

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">

        {/* Heading */}
        <p className="edu-number">05</p>
        <h2 className="edu-title">Education</h2>

        <div className="edu-grid">

          {/* B.Tech */}
          <div className="edu-card">
            <div className="edu-icon"></div>

            <h4>B.Tech Information Technology</h4>
            <p className="edu-sub">NIET, Greater Noida</p>

            <p className="edu-year">2022 – 2026</p>

            <p className="edu-desc">
              Pursuing Bachelor of Technology in IT with focus on Java,
              DSA, and Web Development.
            </p>
          </div>

          {/* Oracle Certificate */}
          <div className="edu-card">
            <div className="edu-icon"></div>

            <h4>Oracle Certified (OCFA)</h4>
            <p className="edu-sub">Java, OOP, JVM, Debugging</p>

            <p className="edu-year">2025</p>

            <p className="edu-desc">
              Certified in Java fundamentals, object-oriented programming,
              JVM concepts, and debugging techniques.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;