import myphoto from "../assets/myphoto.png";
import React from "react";

function About() {
  return (
    <div className="container py-5">

      {/* Section Number */}
      <p className="text-secondary mb-2">01</p>

      {/* Heading */}
      <h1 className="fw-bold mb-4">About Me</h1>

      {/* Content Row */}
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-md-7">
          <p className="text-secondary fs-5">
            I’m an aspiring full-stack developer with strong foundation in Java,
            DSA, and Web Development. I focus on building clean and efficient
            applications.
          </p>

          <p className="text-secondary fs-5">
            I enjoy learning new technologies, solving problems, and creating
            user-friendly digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src={myphoto}
            alt="profile"
            className="img-fluid rounded"
            style={{ maxWidth: "220px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default About;