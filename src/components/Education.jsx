import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Reveal from "./Reveal.jsx";
import { education } from "../data/portfolioData.js";
import "../styles/Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            04 // education.md
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">background</span>
          </h2>
        </Reveal>

        <div className="edu__grid">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.12} direction="up">
              <motion.div
                className="edu__card glass-panel"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="edu__icon">
                  <HiOutlineAcademicCap size={26} />
                </div>
                <span className="edu__period mono">{item.period}</span>
                <h3 className="edu__degree">{item.degree}</h3>
                <p className="edu__institute">{item.institute}</p>
                <p className="edu__desc">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
