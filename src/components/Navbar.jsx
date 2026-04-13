import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.setAttribute("data-theme", dark ? "light" : "dark");
  };

  return (
    <nav>
      <div className="container">

        {/* LOGO */}
        <div className="logo">Portfolio</div>

        {/* LINKS */}
        <div className={`links ${menuOpen ? "active" : ""}`}>

          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          {/* THEME BUTTON */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;