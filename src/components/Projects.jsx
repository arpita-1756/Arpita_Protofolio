import React from "react";

import { FaPalette, FaShoppingCart, FaLeaf } from "react-icons/fa";



function Projects() {

  const projects = [
    {
      title: "Weather website",
      desc: "Analytics platform with real-time data visualization, interactive charts, and intuitive workflows for seamless data exploration.",
      tech: ["React", "D3.js", "Node.js"],
      icon: <FaPalette />
    },
    {
      title: "Neural Knowledge",
      desc: "Luxury fashion e-commerce platform with immersive product experiences, smooth animations, and frictionless checkout flow.",
      tech: ["Spring", "Security", "Thymeleaf"],
      icon: <FaShoppingCart />
    },
    {
      title: "GreenPulse",
      desc: "Sustainability tracking app that helps users monitor carbon footprint, eco habits, and environmental impact.",
      tech: ["React", "Firebase", "API"],
      icon: <FaLeaf />
    }
  ];

  return (
    <section>
      <p className="text-info fw-bold">03 / PROJECTS</p>

      {/* Title */}
      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      <div className="row g-4">

        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>

            <div className="card">

              {/* Icon */}
              <div className="card-icon">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="skill-name">{project.title}</h3>

              {/* Description */}
              <p className="text-secondary">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;