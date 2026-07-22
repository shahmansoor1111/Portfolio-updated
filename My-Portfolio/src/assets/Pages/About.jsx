import { Link } from "react-router-dom";

const infoCards = [
  { icon: '📍', bg: 'rgba(0,212,255,0.1)', label: 'Location', value: 'Peshawar, Pakistan' },
  { icon: '💻', bg: 'rgba(255,77,109,0.1)', label: 'Specialty', value: 'Front-End Development' },
  { icon: '📅', bg: 'rgba(123,237,159,0.1)', label: 'Experience', value: '1+ Year' },
  { icon: '🎓', bg: 'rgba(255,211,42,0.1)', label: 'Education', value: 'BS Computer Science' },
  { icon: '🌱', bg: 'rgba(162,155,254,0.1)', label: 'Currently Learning', value: 'Backend (Node.js, MongoDB)' },
  { icon: '🎯', bg: 'rgba(253,121,168,0.1)', label: 'Goal', value: 'Full-Stack Developer' },
  { icon: '📧', bg: 'rgba(0,212,255,0.1)', label: 'Email', value: 'shahmansoor0316@gmail.com' },
];

const focuses = [
  { color: '#00d4ff', text: 'Responsive & Mobile-First Design' },
  { color: '#7bed9f', text: 'React & Modern JavaScript Ecosystem' },
  { color: '#ffd32a', text: 'Performance Optimization & Best Practices' },
  { color: '#ff4d6d', text: 'Currently Learning Backend Development' },
];

export default function About() {
  return (
    <div className="page-wrapper">
      <div className="section">

        {/* HEADER */}
        <div className="sec-eyebrow">Who Am I</div>
        <div className="sec-title">Get to Know Me 👋</div>

        {/* RESPONSIVE GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}
        >

          {/* LEFT CONTENT */}
          <div>

            <div style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>

              <p style={{ marginBottom: '1rem' }}>
                Hello! I am <strong style={{ color: 'var(--accent3)', fontWeight: 700 }}>Shahmansoor</strong> —
                a passionate <strong style={{ color: 'var(--accent3)', fontWeight: 700 }}>Front-End Developer</strong> from Peshawar.
              </p>

              <p style={{ marginBottom: '1rem' }}>
                I have <strong style={{ color: 'var(--accent3)', fontWeight: 700 }}>1 year of experience</strong> in building responsive and user-friendly web interfaces.
                My focus is always on creating websites that are visually appealing, fast, and easy to use.
              </p>

              <p style={{ marginBottom: '1rem' }}>
                Currently, I am advancing my journey by learning{' '}
                <strong style={{ color: 'var(--accent3)', fontWeight: 700 }}>Back-End Development</strong> to become a complete{' '}
                <strong style={{ color: 'var(--accent3)', fontWeight: 700 }}>Full-Stack Developer</strong>.
                I am working with Node.js, Express, and databases.
              </p>

              <p>
                When I am not coding, I explore modern UI designs or contribute to open-source projects to improve my skills.
              </p>

            </div>

            {/* FOCUS AREA */}
            <div style={{
              background: 'linear-gradient(135deg,rgba(0,212,255,0.06),rgba(0,128,255,0.06))',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '1rem',
                fontWeight: 700
              }}>
                My Focus Areas
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {focuses.map(({ color, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
                    <span style={{ color: 'var(--text)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '2rem',
                flexWrap: 'wrap'
              }}
            >
              <Link to="/skills" className="btn-primary">My Skills →</Link>
              <Link to="/contact" className="btn-secondary">Contact Me</Link>
            </div>

          </div>

          {/* RIGHT CARDS */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              width: '100%'
            }}
          >
            {infoCards.map(({ icon, bg, label, value }) => (
              <div
                key={label}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '1rem 1.2rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.background = 'var(--card2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'var(--card)';
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem'
                  }}
                >
                  {icon}
                </div>

                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {label}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '0.15rem' }}>
                    {value}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}