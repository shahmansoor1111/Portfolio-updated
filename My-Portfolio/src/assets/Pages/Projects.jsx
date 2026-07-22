const PROJECTS = [
  {
   emoji: '🍔🍕',

    title: 'Food Website',
    desc: 'Welcome to our food website, enjoy fresh tasty meals, explore menu, order easily, fast delivery, best quality food for everyone',
    tags: ['Featured', 'React'],
    techs: ['Html','Css','Javascript'],
    color: '#00d4ff',
    bg: 'linear-gradient(135deg,#001a33,#003366)',
    live: 'https://food-website-woad-two.vercel.app',
    github: 'https://github.com/shahmansoor1111/food-website',
  },
  {
    emoji: '😂🤣',
    title: 'Funny Joke Craetor',
    desc: 'A Funny Joke Creator is a simple and entertaining tool I built that generates random jokes to make people laugh.So try it must',
    tags: ['Next.js', 'TypeScript'],
    techs: ['Next.js', 'TypeScript', 'Styled Components'],
    color: '#7bed9f',
    bg: 'linear-gradient(135deg,#001a0d,#003320)',
    live: ' https://shahmansoor1111.github.io/small-joke/',
    github: 'https://github.com/shahmansoor1111/small-joke',
  },
  {
    emoji: '🌤️',
    title: 'WeatherVibe — Dashboard',
    desc: 'Real-time weather data using OpenWeatherMap API. Beautiful charts with Chart.js, geolocation support, and glassmorphism design.',
    tags: ['API', 'Dashboard'],
    techs: ['React.js', 'Chart.js', 'Axios', 'CSS Modules'],
    color: '#ffd32a',
    bg: 'linear-gradient(135deg,#1a1500,#332900)',
    live: 'https://shahmansoor1111.github.io/weather-app/',
    github: 'https://github.com/shahmansoor1111/weather-app',
  },
  {
    emoji: '💬',
    title: 'Age Calculator',
    desc: 'An Age Calculator is a tool I made that allows users to quickly calculate their exact age from their date of birth.So Calculate your exact age',
    tags: ['Real-time', 'Firebase'],
    techs: ['React.js', 'Firebase', 'Tailwind CSS', 'React Router'],
    color: '#ff4d6d',
    bg: 'linear-gradient(135deg,#1a0010,#330020)',
    live: ' https://shahmansoor1111.github.io/age-calculator/',
    github: 'https://github.com/shahmansoor1111/age-calculator/',
  },
  {
    emoji: '📊',
    title: 'CryptoTrack — Price Tracker',
    desc: 'Live crypto prices using CoinGecko API. Interactive charts with Recharts, watchlist feature, and PWA support.',
    tags: ['API', 'PWA'],
    techs: ['Next.js', 'Recharts', 'Tailwind CSS', 'React Query', 'TypeScript'],
    color: '#a29bfe',
    bg: 'linear-gradient(135deg,#0d0020,#1a0040)',
    live: '#',
    github: '#',
  },
  {
    emoji: '🎨',
    title: 'PortfolioCraft — Builder',
    desc: 'Build your own portfolio with drag & drop. Multiple themes, live preview, and JSON export feature. Built with React + Vite.',
    tags: ['Builder', 'Tools'],
    techs: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    color: '#fd79a8',
    bg: 'linear-gradient(135deg,#1a000d,#33001a)',
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="page-wrapper">
      <div className="section">
        <div className="sec-eyebrow">My Work</div>
        <div className="sec-title">Projects 🚀</div>
      

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '20px', overflow: 'hidden', transition: 'all 0.35s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Banner */}
              <div style={{ height: '160px', position: 'relative', overflow: 'hidden', background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%,${project.color}22,transparent 65%)` }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${project.color}08 1px,transparent 1px),linear-gradient(90deg,${project.color}08 1px,transparent 1px)`, backgroundSize: '30px 30px' }} />
                <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 2, filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}>{project.emoji}</span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.4rem' }}>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.8rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ background: project.color + '18', border: `1px solid ${project.color}44`, color: project.color, padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.4rem', letterSpacing: '-0.3px' }}>{project.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{project.desc}</div>

                {/* Tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.2rem' }}>
                  {project.techs.map((tech) => (
                    <span key={tech} style={{ background: 'var(--card2)', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '5px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <a
                    href={project.live}
                    style={{ flex: 1, background: project.color, color: '#000', border: 'none', fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', fontWeight: 700, padding: '0.55rem', borderRadius: '10px', cursor: 'none', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'opacity 0.2s' }}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.github}
                    style={{ flex: 1, background: 'var(--card2)', color: 'var(--text)', border: '1px solid var(--border)', fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', fontWeight: 700, padding: '0.55rem', borderRadius: '10px', cursor: 'none', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'all 0.25s' }}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}