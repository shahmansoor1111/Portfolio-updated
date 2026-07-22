import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { skills } from "../data/portfolioData.js";
import "../styles/Skills.css";

const GROUPS = [
  { key: "languages", label: "Languages", file: "core" },
  { key: "frameworks", label: "Frameworks & Libraries", file: "frameworks" },
  { key: "tools", label: "Tools & Workflow", file: "devDependencies" },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__top">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level mono">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            02 // skills.json
          </span>
          <h2 className="section-title">
            Tools in my <span className="gradient-text">toolbelt</span>
          </h2>
          <p className="section-sub">
            The languages, frameworks, and tools I use daily to build interfaces at Fits Digital.
          </p>
        </Reveal>

        <div className="skills__grid">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.key} delay={gi * 0.12} className="skills__card glass-panel">
              <div className="window-chrome">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
                <span className="window-title">"{group.file}"</span>
              </div>
              <div className="skills__card-body">
                <h3 className="skills__group-title">{group.label}</h3>
                {skills[group.key].map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
