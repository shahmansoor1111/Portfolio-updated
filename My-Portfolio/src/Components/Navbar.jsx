import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">

      {/* Logo */}
      <Link to="/" className="nav-logo">
        Shah<span style={{ color: "#00d4ff" }}> Mansoor</span>
      </Link>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            onClick={() => setMenuOpen(false)}
            className={`nav-link ${
              location.pathname === path ? "active" : ""
            }`}
          >
            {label}
          </Link>
        ))}

        {/* CTA inside mobile */}
        <Link to="/contact" className="nav-cta mobile-cta">
          Hire Me ✦
        </Link>
      </div>

      {/* Desktop CTA */}
      <Link to="/contact" className="nav-cta desktop-cta">
        Hire Me ✦
      </Link>

    </nav>
  );
}