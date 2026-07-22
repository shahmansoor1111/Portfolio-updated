import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";
import Reveal from "./Reveal.jsx";
import { certifications } from "../data/portfolioData.js";
import "../styles/Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            06 // certs.yaml
          </span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">credentials</span>
          </h2>
        </Reveal>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.1} direction="up">
              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card glass-panel"
                whileHover={{ y: -6, borderColor: "var(--accent)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="cert-card__icon">
                  <HiOutlineBadgeCheck size={24} />
                </div>
                <div className="cert-card__body">
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <span className="cert-card__date mono">{cert.date}</span>
                </div>
                <HiOutlineExternalLink className="cert-card__external" size={16} />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
