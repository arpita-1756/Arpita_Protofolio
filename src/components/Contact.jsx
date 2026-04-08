import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">

        {/* Heading */}
        <p className="contact-number">06</p>
        <h2 className="contact-title">Let's Connect</h2>

        <p className="contact-desc">
          Got a project in mind or just want to chat? I'd love to hear from you.
        </p>

        {/* Cards */}
        <div className="contact-grid">

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon"></div>
            <h5>Email</h5>
            <p>arpitapriya2004@gmail.com</p>
          </div>

          {/* GitHub */}
          <div className="contact-card">
            <div className="contact-icon"></div>
            <h5>GitHub</h5>
           <p> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              Arpita Priya
            </a></p>
          </div>

          {/* LinkedIn */}
          <div className="contact-card">
            <div className="contact-icon"></div>
            <h5>LinkedIn</h5>
           <p> <a href="https://www.linkedin.com/in/arpita-priya-b06b4424b/" target="_blank" rel="noopener noreferrer">
              Arpita Priya
            </a></p>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;