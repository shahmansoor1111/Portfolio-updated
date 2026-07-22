import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineTemplate, HiOutlineSparkles } from "react-icons/hi";
import Reveal from "./Reveal.jsx";
import { services } from "../data/portfolioData.js";
import "../styles/Services.css";

const ICONS = [HiOutlineCode, HiOutlineTemplate, HiOutlineSparkles];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            07 // services.tsx
          </span>
          <h2 className="section-title">
            What I can <span className="gradient-text">help with</span>
          </h2>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={service.id} delay={i * 0.12} direction="up">
                <motion.div
                  className="service-card glass-panel"
                  whileHover={{ y: -8, rotate: -0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="service-card__num mono">0{i + 1}</span>
                  <div className="service-card__icon">
                    <Icon size={26} />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
