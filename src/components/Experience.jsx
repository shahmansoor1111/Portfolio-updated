import Reveal from "./Reveal.jsx";
import { experience } from "../data/portfolioData.js";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            03 // experience.log
          </span>
          <h2 className="section-title">
            Where I've been <span className="gradient-text">shipping code</span>
          </h2>
        </Reveal>

        <div className="timeline">
          <div className="timeline__line" />
          {experience.map((item, i) => (
            <Reveal
              key={item.id}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={i * 0.1}
              className={`timeline__item ${item.status === "current" ? "is-current" : ""}`}
            >
              <span className="timeline__dot" />
              <div className="timeline__card glass-panel">
                {item.status === "current" && (
                  <span className="timeline__badge mono">
                    <span className="timeline__badge-pulse" /> current
                  </span>
                )}
                <div className="timeline__head">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__period mono">{item.period}</span>
                </div>
                <p className="timeline__company">
                  {item.company} <span className="timeline__location">· {item.location}</span>
                </p>
                <ul className="timeline__points">
                  {item.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
