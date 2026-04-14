import React from "react";

import {  FaShoppingCart} from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";


function Projects() {

  const projects = [
    {
      title: "Weather website",
      desc: "A modern and responsive weather application that provides real-time weather updates for any city using the OpenWeather API.",
      tech: ["Html", "CSS", "JavaScript"],
      icon: <TiWeatherCloudy />
    },
    {
      title: "Neural Knowledge",
      desc: "An AI-powered knowledge management system that helps users organize, search, and retrieve information efficiently from pdf.",
      tech: ["Spring", "Security", "Thymeleaf"],
       
    },

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