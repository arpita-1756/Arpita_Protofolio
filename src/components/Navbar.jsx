import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar custom-nav">
      <div className="container">

        {/* LEFT */}

        {/* CENTER */}
        <ul className="navbar-nav">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/skills" className="nav-link">SKILLS</Link></li>
          <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
          <li><Link to="/education" className="nav-link">EDUCATION</Link></li>
          <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>

        {/* RIGHT */}
        <button onClick={toggleTheme} class="float-end" >
      {darkMode ? "☀️" : "🌙"}
    </button>

      </div>
    </nav>
  );
}

export default Navbar;