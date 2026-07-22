import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, personal } from "../data/portfolioData.js";
import "../styles/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner container">
        <button
          className="navbar__brand"
          onClick={() => handleNavClick("about")}
          aria-label="Scroll to top"
        >
          <span className="navbar__prompt mono">~/</span>
          <span className="navbar__name">
            {personal.name}
            <span className="navbar__cursor">_</span>
          </span>
        </button>

        <nav className="navbar__tabs" aria-label="Section navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__tab ${active === link.id ? "is-active" : ""}`}
              onClick={() => handleNavClick(link.id)}
            >
              <span className="navbar__tab-label">{link.label}</span>
              {active === link.id && (
                <motion.span
                  layoutId="tab-underline"
                  className="navbar__tab-underline"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          ))}
        </nav>

        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`navbar__mobile-link ${active === link.id ? "is-active" : ""}`}
                onClick={() => handleNavClick(link.id)}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}