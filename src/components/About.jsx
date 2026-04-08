import React from "react";
import myphoto from "../assets/myphoto.png";
const About = () => {
  return (
    <section className="about-section">
      <div className="container about-wrapper">

        {/* LEFT */}
        <div className="about-left">
          <p className="about-number">01</p>

          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I’m an aspiring full-stack developer with strong foundation in Java,
            DSA, and Web Development. I focus on building clean and efficient applications.
          </p>

          <p className="about-text">
            I enjoy learning new technologies, solving problems, and creating
            user-friendly digital experiences.
          </p>

          
        </div>

        {/* RIGHT */}
        <img src={myphoto} alt="About Me" />

      </div>
    </section>
  );
};

export default About;