import React from "react";


function Education() {
  const cards = [
    {
      title: "Bachelor of Technology in Information Technology",
      org: "Noida Institute of Engineering and Technology",
      desc: "Comprehensive study of software development, algorithms, data structures, and web technologies with focus on modern frameworks.",
      color: "#00d4ff",
      icon: "🎓"
    },
    {
      title: "OCFA Certified",
      org: "Oracle",
      desc: "Professional certification in Java, oops, and debugging.",
      color: "#ff6b35",
      icon: "📚"
    }
  ];

  return (
    <div className="container py-5">

      {/* Title */}
      <p className="text-info fw-bold">04 / EDUCATION</p>

      <h1 className="fw-bold mb-5">
        My <span className="text-info">Learning</span> Journey
      </h1>

      {/* Cards */}
      <div className="row g-4">

        {cards.map((card, index) => (
          <div className="col-md-6" key={index}>
            
            <div
              className="p-4 h-100"
              style={{
                borderRadius: "15px",
                border: "1px solid rgba(0,212,255,0.3)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
              
              // 🔥 Hover animation
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,212,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              {/* Icon */}
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  background: "rgba(0,212,255,0.1)",
                  fontSize: "24px"
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="fw-bold mb-2">{card.title}</h4>

              {/* Org */}
              <p className="fw-semibold" style={{ color: card.color }}>
                {card.org}
              </p>

              {/* Desc */}
              <p className="text-secondary">
                {card.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Education;