import React from "react";
import { FaCode, FaHeart } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">

        {/* Heading */}
        <p className="skills-number">02</p>
        <h2 className="skills-title">Skills</h2>

        {/* Technical Skills */}
        <div className="skills-block">
          <h4 className="skills-subtitle">
            <FaCode className="me-2" /> Technical
          </h4>

          <div className="skills-list">
            <span>Java</span>
            <span>DSA</span>
            <span>OOP</span>
            <span>Spring</span>
            <span>Hibernate</span>
            <span>JDBC</span>
            <span>Servlet</span>
            <span>HTML / CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>MySQL</span>
            <span>Oracle</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-block mt-4">
          <h4 className="skills-subtitle">
            <FaHeart className="me-2" /> Soft Skills
          </h4>

          <div className="skills-list">
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Leadership</span>
            <span>Time Management</span>
            <span>Critical Thinking</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;