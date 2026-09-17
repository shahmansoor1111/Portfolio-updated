import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineDownload, HiOutlineMail, HiOutlineArrowDown } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { personal } from "../data/portfolioData.js";
import profilePhoto from "../images/shahmeer.png";
import "../styles/Hero.css";

const LINES = [
  { prompt: "const engineer = require('shah-mansoor');", color: "var(--text-muted)" },
  { prompt: "engineer.role;", result: `"Frontend Engineer @ Fits Digital"` },
  { prompt: "engineer.location;", result: `"Islamabad, Pakistan"` },
  { prompt: "engineer.currentlyBuilding;", result: `"Zaheen.com"` },
  { prompt: "engineer.status;", result: `"Open to interesting problems"` },
];

function useTypedLines(lines, speed = 26, pauseBetween = 380) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const { prompt, result, color } = lines[i];
        let typed = "";
        for (let c = 0; c < prompt.length; c++) {
          if (cancelled) return;
          typed += prompt[c];
          setOutput((prev) => {
            const next = [...prev];
            next[i] = { prompt: typed, result: null, color };
            return next;
          });
          await new Promise((r) => setTimeout(r, speed));
        }
        if (result) {
          await new Promise((r) => setTimeout(r, 150));
          setOutput((prev) => {
            const next = [...prev];
            next[i] = { prompt, result, color };
            return next;
          });
        }
        await new Promise((r) => setTimeout(r, pauseBetween));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { output, done };
}

export default function Hero() {
  const { output } = useTypedLines(LINES);

  return (
    <section id="hero" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">
            <span className="dot" />
            available for opportunities
          </span>

          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="hero__subtitle mono">&gt; {personal.title}</h2>

          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__cta">
            <a
              href={personal.resumeUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineDownload size={18} />
              Resume
            </a>
            <button
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <HiOutlineMail size={18} />
              Contact Me
            </button>
          </div>

          <div className="hero__socials">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={19} />
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={19} />
            </a>
           
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" />
            <div className="hero__photo-frame">
              <img
                src={profilePhoto}
                alt={personal.name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero__photo-fallback mono">
                &lt;photo <br />
                &nbsp;&nbsp;src="{"{"}your-photo{"}"}" /&gt;
              </div>
            </div>
            <span className="hero__badge hero__badge--1 mono">React</span>
            <span className="hero__badge hero__badge--2 mono">JavaScript</span>
            <span className="hero__badge hero__badge--3 mono">Fits Digital</span>
          </div>

          <div className="hero__terminal glass-panel">
            <div className="window-chrome">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
              <span className="window-title">whoami.js — zsh</span>
            </div>
            <div className="hero__terminal-body mono">
              {output.map((line, i) => (
                <div className="hero__terminal-line" key={i}>
                  <span className="hero__terminal-arrow">❯</span>
                  <span>{line.prompt}</span>
                  {line.result && <div className="hero__terminal-result">{line.result}</div>}
                </div>
              ))}
              <span className="hero__terminal-cursor">▍</span>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        className="hero__scroll-hint"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <HiOutlineArrowDown size={20} />
      </motion.button>
    </section>
  );
}