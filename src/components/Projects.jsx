import React from "react";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">

        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-top orange">
              📝
            </div>

            <h4>To-Do App</h4>
            <p>
              Desktop-based Java GUI application with CRUD operations using File I/O.
            </p>

            <div className="project-tags">
              <span>Java</span>
              <span>OOP</span>
              <span>File I/O</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-top purple">
              💻
            </div>

            <h4>Future Project</h4>
            <p>
              Thinking  about my next project 
            </p>

           
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
