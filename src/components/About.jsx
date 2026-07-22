import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { personal, aboutStats } from "../data/portfolioData.js";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            01 // about.tsx
          </span>
          <h2 className="section-title">
            Getting to <span className="gradient-text">know me</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal direction="right" className="about__panel glass-panel">
            <div className="window-chrome">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
              <span className="window-title">about.tsx</span>
            </div>
            <div className="about__code mono">
              <div className="gutter-line">
                <span className="ln">1</span>
                <span className="about__code-line">
                  <span className="about__kw">const</span> shahMansoor = {"{"}
                </span>
              </div>
              <div className="gutter-line">
                <span className="ln">2</span>
                <span className="about__code-line">
                  &nbsp;&nbsp;role: <span className="about__str">"{personal.title}"</span>,
                </span>
              </div>
              <div className="gutter-line">
                <span className="ln">3</span>
                <span className="about__code-line">
                  &nbsp;&nbsp;company: <span className="about__str">"Fits Digital"</span>,
                </span>
              </div>
              <div className="gutter-line">
                <span className="ln">4</span>
                <span className="about__code-line">
                  &nbsp;&nbsp;base: <span className="about__str">"{personal.location}"</span>,
                </span>
              </div>
              <div className="gutter-line">
                <span className="ln">5</span>
                <span className="about__code-line">&nbsp;&nbsp;bio: `</span>
              </div>
              <div className="gutter-line about__bio-row">
                <span className="ln">6</span>
                <p className="about__bio-text">{personal.intro}</p>
              </div>
              <div className="gutter-line">
                <span className="ln">7</span>
                <span className="about__code-line">&nbsp;&nbsp;`,</span>
              </div>
              <div className="gutter-line">
                <span className="ln">8</span>
                <span className="about__code-line">{"};"}</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="about__stats">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat glass-panel"
                whileHover={{ y: -6, borderColor: "var(--accent)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
