import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {

  return (
    <div className="container py-5 text-center">

      <p className="text-info fw-bold">05 / CONTACT</p>

      <h1 className="fw-bold mb-4">
        Let’s <span className="text-info">Connect</span>
      </h1>

      <p className="text-secondary mb-5">
        Have a project in mind? I'm always excited to explore new
        opportunities and collaborate with creative minds.
      </p>

      {/* SOCIAL ICONS */}
      <div className="d-flex justify-content-center gap-4">

        {[ 
          { 
            icon: <FaGithub />, 
            color: "#00d4ff",
            link: "https://github.com/arpita-1756/"
          },
          { 
            icon: <FaLinkedin />, 
            color: "#ff6b35",
            link: "https://www.linkedin.com/in/arpita-priya-b06b4424b/"
          },
         
        ].map((item, index) => (

          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                border: `2px solid ${item.color}`,
                color: item.color,
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              {item.icon}
            </div>
          </a>

        ))}

      </div>

    </div>
  );
}

export default Contact;