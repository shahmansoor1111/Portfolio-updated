import { useEffect, useRef, useState } from "react";

export default function Robot({ mousePos }) {
  const [eye, setEye] = useState({ x: 0, y: 0 });
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current || !mousePos) return;

    const r = wrapRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;

    const angle = Math.atan2(dy, dx);

    setEye({
      x: Math.cos(angle) * 3,
      y: Math.sin(angle) * 3,
    });
  }, [mousePos]);

  return (
    <div
      ref={wrapRef}
      className="relative w-[280px] h-[360px] flex items-center justify-center"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Shadow */}
      <div className="absolute bottom-0 w-40 h-5 bg-cyan-400/20 blur-xl rounded-full"></div>

      {/* ROBOT */}
      <svg
        viewBox="0 0 280 360"
        className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,212,255,0.4)] animate-bounce"
      >
        {/* HEAD */}
        <rect x="80" y="40" width="120" height="100" rx="20" fill="#0f172a" stroke="#00d4ff" />

        {/* ANTENNA */}
        <line x1="140" y1="40" x2="140" y2="15" stroke="#00d4ff" strokeWidth="2" />
        <circle cx="140" cy="10" r="6" fill="#00d4ff" />

        {/* EYES BACK */}
        <rect x="95" y="60" width="35" height="25" rx="6" fill="#111827" />
        <rect x="150" y="60" width="35" height="25" rx="6" fill="#111827" />

        {/* EYES */}
        <circle cx={112 + eye.x} cy={72 + eye.y} r="6" fill="#00d4ff" />
        <circle cx={168 + eye.x} cy={72 + eye.y} r="6" fill="#00d4ff" />

        {/* MOUTH */}
        <rect x="105" y="110" width="70" height="10" rx="5" fill="#00d4ff" opacity="0.7" />

        {/* BODY */}
        <rect x="70" y="150" width="140" height="120" rx="25" fill="#0f172a" stroke="#00d4ff" />

        {/* CHEST LIGHT */}
        <circle cx="140" cy="200" r="8" fill="#00d4ff" />

        {/* ARMS */}
        <rect x="40" y="170" width="25" height="80" rx="10" fill="#0f172a" stroke="#00d4ff" />
        <rect x="215" y="170" width="25" height="80" rx="10" fill="#0f172a" stroke="#00d4ff" />

        {/* LEGS */}
        <rect x="100" y="270" width="25" height="70" rx="10" fill="#0f172a" stroke="#00d4ff" />
        <rect x="155" y="270" width="25" height="70" rx="10" fill="#0f172a" stroke="#00d4ff" />
      </svg>
    </div>
  );
}