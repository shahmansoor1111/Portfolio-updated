import { useState } from 'react';

const contactLinks = [
{ icon: '📧', label: 'Send Email',     href: 'mailto:shahmansoor0316@gmail.com' },
  { icon: '💼', label: 'LinkedIn',     href: 'https://www.linkedin.com/in/shah-mansoor-a9292625b'},
  { icon: '🐙', label: 'GitHub',       href: 'https://github.com/shahmansoor1111' },
  { icon: '📱', label: 'WhatsApp',     href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    background: 'var(--card2)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '0.85rem',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
  };

  return (
    <div className="page-wrapper">
      <div style={{ minHeight: 'calc(100vh - 65px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', textAlign: 'center' }}>

        <div className="sec-eyebrow">Let's Connect</div>
        <div className="sec-title">Get in Touch 💬</div>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '440px', lineHeight: 1.8, marginBottom: '2rem' }}>
          Whether it's a project, an idea, or just saying hello — I'm always available. Let's build something amazing together!
        </p>

        {/* Contact Card */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '28px', padding: '2.5rem', maxWidth: '560px', width: '100%', position: 'relative' }}>

          {/* Social Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {contactLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.4rem', borderRadius: '50px', border: '1px solid var(--border)', background: 'var(--card2)', color: 'var(--text)', fontFamily: "'Outfit',sans-serif", fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
              >
                {icon} {label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <span style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>or send a direct message</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Success message */}
          {sent && (
            <div style={{ background: 'rgba(123,237,159,0.1)', border: '1px solid rgba(123,237,159,0.3)', color: 'var(--accent3)', padding: '0.75rem', borderRadius: '10px', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
              ✅ Message sent successfully! I will reply soon.
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'left' }}>
            <input
              style={inputStyle}
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              style={inputStyle}
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="Your Message..."
              rows="4"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              style={{ background: 'linear-gradient(135deg,var(--accent),#0080ff)', color: '#000', border: 'none', fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '0.85rem', padding: '0.85rem', borderRadius: '12px', cursor: 'none', transition: 'all 0.3s', letterSpacing: '0.5px' }}
            >
              Send Message ✦
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}