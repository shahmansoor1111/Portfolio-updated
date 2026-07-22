import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            05 // projects.tsx
          </span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-sub">
            A mix of production and personal work. Replace the placeholders with your own project
            screenshots and links.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} direction="up">
              <motion.div
                className="project-card glass-panel"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-card__media">
                  <img
                    src={project.image}
                    alt={project.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="project-card__fallback mono">
                    &lt;img src="{"{"}project-screenshot{"}"}" /&gt;
                  </div>
                  <span className="project-card__status mono">{project.status}</span>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__desc">{project.description}</p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <HiOutlineExternalLink size={16} />
                      Live
                    </a>
                  
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
