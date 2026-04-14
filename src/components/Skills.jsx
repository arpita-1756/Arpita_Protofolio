
import React, { useEffect, useState } from "react";

function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // delay animation
  }, []);

  const skills = [
    { name: "Java ", value: 95 },
    { name: "HTML/CSS/JavaScript", value: 90 },
    { name: "DSA", value: 88 },
    { name: "MySQL", value: 85 },
    { name: "Spring Boot", value: 82 },
  ];

  return (
    <div className="container py-5">

      {/* Section Title */}
      <p className="text-info fw-bold">02 / SKILLS</p>

      <h1 className="fw-bold mb-5">
        My <span className="text-info">Toolkit</span>
      </h1>

      {/* Skills List */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">

          {/* Top Row */}
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">{skill.name}</span>
            <span className="text-info fw-bold">{skill.value}%</span>
          </div>

          {/* Progress Bar */}
          <div className="progress mt-2" style={{ height: "8px" }}>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{
                width: animate ? `${skill.value}%` : "0%",
                transition: "width 1.5s ease"
              }}
            ></div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Skills;