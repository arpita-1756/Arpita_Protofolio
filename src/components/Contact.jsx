import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message sent successfully ✅");
      },
      () => {
        alert("Failed ❌");
      }
    );

    e.target.reset();
  };

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

      {/* FORM */}
      <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>

        {/* Email */}
        <div className="mb-4 text-start">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="your@email.com"
            required
            style={{
              background: "transparent",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "var(--text)",   // ✅ FIXED
              padding: "12px"
            }}
          />
        </div>

        {/* Message */}
        <div className="mb-4 text-start">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Tell me about your project..."
            required
            style={{
              background: "transparent",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "var(--text)",   // ✅ FIXED
              padding: "12px"
            }}
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="btn fw-semibold px-4 py-2 mb-4"
          style={{
            background: "linear-gradient(90deg, #00d4ff, #ff6b35)",
            color: "black",
            border: "none"
          }}
        >
          Send Message <FaPaperPlane />
        </button>

        {/* SOCIAL ICONS */}
        <div className="d-flex justify-content-center gap-4">

          {[ 
            { icon: <FaGithub />, color: "#00d4ff" },
            { icon: <FaLinkedin />, color: "#ff6b35" },
            { icon: <FaTwitter />, color: "#b366ff" }
          ].map((item, index) => (
            <div
              key={index}
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
          ))}

        </div>

      </form>
    </div>
  );
}

export default Contact;