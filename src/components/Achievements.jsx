import { motion } from "framer-motion";
import { HiOutlineStar } from "react-icons/hi";
import Reveal from "./Reveal.jsx";
import { achievements } from "../data/portfolioData.js";
import "../styles/Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            08 // achievements.js
          </span>
          <h2 className="section-title">
            Milestones worth <span className="gradient-text">mentioning</span>
          </h2>
        </Reveal>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} direction={i % 2 === 0 ? "right" : "left"}>
              <motion.div
                className="achievement-card glass-panel"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="achievement-card__icon">
                  <HiOutlineStar size={20} />
                </div>
                <div>
                  <h3 className="achievement-card__title">{item.title}</h3>
                  <p className="achievement-card__desc">{item.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
