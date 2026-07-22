import { useEffect, useRef, useState } from 'react';

const SKILLS = [
  {
    name: 'Core Languages',
    sub: 'Foundation',
    icon: '⚡',
    color: '#00d4ff',
    bars: [
      { l: 'HTML5', v: 95 },
      { l: 'CSS3', v: 90 },
      { l: 'JavaScript (ES6+)', v: 85 },
      { l: 'TypeScript', v: 72 },
    ],
    chips: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'JSON', 'JSX'],
  },
  {
    name: 'Frameworks & Libraries',
    sub: 'UI Power',
    icon: '⚛️',
    color: '#ff4d6d',
    bars: [
      { l: 'React.js', v: 88 },
      { l: 'Next.js', v: 80 },
      { l: 'Redux / Zustand', v: 72 },
      { l: 'React Query', v: 68 },
    ],
    chips: ['React.js', 'Next.js', 'Redux', 'Zustand', 'React Query', 'React Router', 'Framer Motion'],
  },
  {
    name: 'Styling & Design',
    sub: 'Visual Layer',
    icon: '🎨',
    color: '#7bed9f',
    bars: [
      { l: 'Tailwind CSS', v: 90 },
      { l: 'SCSS / SASS', v: 82 },
      { l: 'CSS Modules', v: 85 },
      { l: 'Styled Components', v: 75 },
    ],
    chips: ['Tailwind CSS', 'SASS/SCSS', 'Styled Components', 'CSS Modules', 'Material UI', 'Chakra UI'],
  },
  {
    name: 'Build Tools & Development',
    sub: 'Workflow',
    icon: '🔧',
    color: '#ffd32a',
    bars: [
      { l: 'Vite', v: 82 },
      { l: 'Webpack', v: 70 },
      { l: 'Git & GitHub', v: 88 },
      { l: 'npm / yarn', v: 85 },
    ],
    chips: ['Vite', 'Webpack', 'Git', 'GitHub', 'npm', 'pnpm', 'ESLint', 'Prettier'],
  },
  {
    name: 'Backend (Learning)',
    sub: 'Expanding Skills',
    icon: '🚀',
    color: '#a29bfe',
    bars: [
      { l: 'Node.js', v: 50 },
      { l: 'Express.js', v: 45 },
      { l: 'REST APIs', v: 60 },
      { l: 'MongoDB', v: 40 },
    ],
    chips: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    name: 'Other Tools',
    sub: 'Productivity',
    icon: '🛠️',
    color: '#fd79a8',
    bars: [
      { l: 'Figma', v: 78 },
      { l: 'Axios / Fetch', v: 88 },
      { l: 'Postman', v: 72 },
      { l: 'Vercel / Netlify', v: 85 },
    ],
    chips: ['Figma', 'Axios', 'Postman', 'Vercel', 'Netlify', 'VS Code', 'Chrome DevTools'],
  },
];

function SkillCard({ skill }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--card)',
        border: `1px solid var(--border)`,
        borderRadius: '20px',
        padding: '1.8rem',
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: 44, height: 44, borderRadius: '12px', background: skill.color + '18', border: `1px solid ${skill.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
          {skill.icon}
        </div>
        <div>
          <div style={{ fontSize: '1rem', fontWeight: 800 }}>{skill.name}</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{skill.sub}</div>
        </div>
      </div>

      {/* Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {skill.bars.map((bar, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '0.3rem' }}>
              <span style={{ color: 'var(--text)' }}>{bar.l}</span>
              <span style={{ color: skill.color, fontWeight: 700 }}>{bar.v}%</span>
            </div>
            <div style={{ height: '3px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
              <div
                className="sb-fill"
                style={{
                  width: visible ? bar.v + '%' : '0',
                  background: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
        {skill.chips.map((chip) => (
          <span key={chip}>
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="page-wrapper" style={{ background: 'var(--surface)' }}>
      <div className="section">
        <div className="sec-eyebrow">What I Know</div>
        <div className="sec-title">My Skills 💡</div>
        <p className="sec-sub">
          Hands-on experience in frontend technologies — and growing toward backend development.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SKILLS.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}