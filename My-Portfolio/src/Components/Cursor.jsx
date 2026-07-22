import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const pos = useRef({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      setDot((prev) => ({
        x: prev.x + (pos.current.x - prev.x) * 0.2,
        y: prev.y + (pos.current.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="fixed w-3 h-3 bg-cyan-400 rounded-full z-[9999] pointer-events-none"
        style={{ transform: `translate(${dot.x}px,${dot.y}px)` }}
      />
    </>
  );
}