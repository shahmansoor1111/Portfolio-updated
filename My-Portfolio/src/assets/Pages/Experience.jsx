import { useEffect, useRef, useState } from 'react';

const EXPERIENCE = [
  {
    year: '2024 – Present',
    company: 'Freelance / Self Projects',
    role: 'Frontend Developer',
    color: '#00d4ff',
    desc: 'I am building modern web applications for personal projects and freelance clients. Using React, Next.js, and modern frontend tools to deliver responsive and high-performance user interfaces.',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
  },
  {
    year: '2023 – 2024',
    company: 'Web Development Bootcamp',
    role: 'Frontend Development Training',
    color: '#7bed9f',
    desc: 'Completed a comprehensive frontend development bootcamp. Learned from HTML/CSS fundamentals to advanced React patterns. Built 15+ hands-on projects and learned real-world development workflows.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git/GitHub'],
  },
  {
    year: '2023',
    company: 'Personal Projects',
    role: 'UI/UX Enthusiast',
    color: '#ffd32a',
    desc: 'Started my journey by building static websites. Designed layouts in Figma and converted them into responsive HTML/CSS. Developed strong design sense and pixel-perfect implementation skills.',
    skills: ['HTML5', 'CSS3', 'Figma', 'Responsive Design', 'SCSS'],
  },
];

function TimelineItem({ item, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`tl-item ${visible ? 'visible' : ''}`}
      style={{ paddingBottom: '2.5rem', paddingLeft: '2.5rem', position: 'relative' }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute',
        left: '-7px',
        top: '2px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: item.color,
        border: '2.5px solid var(--bg)',
        boxShadow: `0 0 0 3px ${item.color}44`,
      }} />

      {/* Meta */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '5px', letterSpacing: '1px', textTransform: 'uppercase', color: item.color, background: item.color + '18' }}>
          {item.year}
        </span>
        <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600 }}>{item.company}</span>
      </div>

      {/* Role */}
      <div style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', letterSpacing: '-0.3px' }}>
        {item.role}
      </div>

      {/* Description */}
      <div style={{ color: 'var(--muted)', fontSize: '0.83rem', lineHeight: 1.75, maxWidth: '620px' }}>
        {item.desc}
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.8rem' }}>
        {item.skills.map((skill) => (
          <span
            key={skill}
            style={{
              background: item.color + '10',
              border: `1px solid ${item.color}30`,
              color: item.color,
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '0.2rem 0.55rem',
              borderRadius: '5px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="page-wrapper" style={{ background: 'var(--surface)' }}>
      <div className="section">

        <div className="sec-eyebrow">My Journey</div>
        <div className="sec-title">Experience 🛤️</div>

        <p className="sec-sub">
          It is a short journey, but every step has taught me something new.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #00d4ff, #7bed9f, #ffd32a, transparent)',
          }} />

          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
}