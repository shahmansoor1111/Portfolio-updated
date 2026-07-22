import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/Images/profile.jpeg"


export default function ProfilePhoto({ mousePos }) {
  const wrapRef = useRef();
  const [angle, setAngle] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  useEffect(() => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;

    // Rotate border toward cursor
    const deg = Math.atan2(dy, dx) * (180 / Math.PI);
    setAngle(deg);

    // Glow follows cursor (as % of the element)
    const gx = ((mousePos.x - rect.left) / rect.width) * 100;
    const gy = ((mousePos.y - rect.top) / rect.height) * 100;
    setGlowX(Math.min(100, Math.max(0, gx)));
    setGlowY(Math.min(100, Math.max(0, gy)));
  }, [mousePos]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        width: 340,
        height: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Outer rotating conic-gradient ring ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          padding: 3,
          background: `conic-gradient(from ${angle}deg, #00d4ff, #0066ff, #a855f7, #ff4d6d, #00d4ff)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          transition: "background 0.05s linear",
        }}
      />

      {/* ── Second outer glow ring (slower, blurred) ── */}
      <div
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: "50%",
          background: `conic-gradient(from ${angle - 40}deg, rgba(0,212,255,0.35), rgba(168,85,247,0.25), rgba(255,77,109,0.3), rgba(0,212,255,0.35))`,
          filter: "blur(14px)",
          transition: "background 0.08s linear",
          zIndex: 0,
        }}
      />

      {/* ── Dynamic glow spot that follows cursor ── */}
      <div
        style={{
          position: "absolute",
          inset: -20,
          borderRadius: "50%",
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,212,255,0.25) 0%, transparent 65%)`,
          transition: "background 0.06s linear",
          zIndex: 0,
        }}
      />

      {/* ── Floating dots that orbit ── */}
      {[0, 90, 180, 270].map((base, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 340,
            height: 340,
            borderRadius: "50%",
            transform: `rotate(${angle + base}deg)`,
            transition: "transform 0.05s linear",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -5,
              left: "50%",
              transform: "translateX(-50%)",
              width: i % 2 === 0 ? 10 : 7,
              height: i % 2 === 0 ? 10 : 7,
              borderRadius: "50%",
              background: i % 2 === 0 ? "#00d4ff" : "#a855f7",
              boxShadow: i % 2 === 0
                ? "0 0 10px #00d4ff, 0 0 20px #00d4ff"
                : "0 0 8px #a855f7, 0 0 16px #a855f7",
            }}
          />
        </div>
      ))}

      {/* ── Profile image circle ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 314,
          height: 314,
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid rgba(0,0,0,0.6)",
          boxShadow: "inset 0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={profileImg}
          alt="Shah Mansoor"
          style={{
            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
          }}
        />
      </div>

      {/* ── Name tag below ── */}
      <div
        style={{
          position: "absolute",
          bottom: -44,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 20px",
          borderRadius: 999,
          background: "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.25)",
          whiteSpace: "nowrap",
          zIndex: 4,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#34d399",
            boxShadow: "0 0 7px #34d399",
            display: "inline-block",
            animation: "dotPulse 1.8s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#67e8f9",
            letterSpacing: "1px",
            
          }}
        >
          Shah Mansoor · Available
        </span>
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 7px #34d399; }
          50%       { opacity: 0.35; box-shadow: none; }
        }
      `}</style>
    </div>
  );
}
