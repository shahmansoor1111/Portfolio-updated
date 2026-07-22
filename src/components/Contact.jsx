import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlinePaperAirplane } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Reveal from "./Reveal.jsx";
import { personal } from "../data/portfolioData.js";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // REPLACE_ME: wire this up to your form backend (Formspree, EmailJS, your own API, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            09 // contact.tsx
          </span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="section-sub">
            Have a role, project, or idea in mind? My inbox is open.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal direction="right" className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <HiOutlineMail size={20} />
              </div>
              <div>
                <span className="contact__info-label">Email</span>
                <a href={`mailto:${personal.email}`} className="contact__info-value">
                  {personal.email}
                </a>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <HiOutlinePhone size={20} />
              </div>
              <div>
                <span className="contact__info-label">Phone</span>
                <a href={`tel:${personal.phone}`} className="contact__info-value">
                  {personal.phone}
                </a>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <HiOutlineLocationMarker size={20} />
              </div>
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">{personal.location}</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
          
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="contact__form-wrap glass-panel">
            <div className="window-chrome">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
              <span className="window-title">send-message.tsx</span>
            </div>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or role..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary contact__submit"
                whileTap={{ scale: 0.97 }}
              >
                <HiOutlinePaperAirplane size={17} style={{ transform: "rotate(90deg)" }} />
                {sent ? "Message sent!" : "Send Message"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
