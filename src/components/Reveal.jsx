import { motion } from "framer-motion";

/**
 * Reveal — wraps children in a scroll-triggered fade/slide animation.
 * direction: "up" | "down" | "left" | "right" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 36,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
