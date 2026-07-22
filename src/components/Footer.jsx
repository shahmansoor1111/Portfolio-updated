import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { personal, navLinks } from "../data/portfolioData.js";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="mono footer__prompt">~/</span>
          {personal.name}
          <span className="footer__cursor mono">_</span>
        </div>

        <nav className="footer__links">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={17} />
          </a>
          <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </a>
          <a href={personal.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FiTwitter size={17} />
          </a>
        </div>
      </div>

      <div className="footer__bottom mono">
        <span>
          // built with React {"&"} a lot of coffee — © {year} {personal.name}
        </span>
      </div>
    </footer>
  );
}
