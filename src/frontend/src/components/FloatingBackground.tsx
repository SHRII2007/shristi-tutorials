import { motion } from "motion/react";

interface Shape {
  id: number;
  x: string;
  y: string;
  size: number;
  type: "circle" | "square" | "diamond" | "symbol";
  symbol?: string;
  delay: number;
  duration: number;
  opacity: number;
}

const shapes: Shape[] = [
  {
    id: 1,
    x: "8%",
    y: "15%",
    size: 60,
    type: "circle",
    delay: 0,
    duration: 6,
    opacity: 0.06,
  },
  {
    id: 2,
    x: "88%",
    y: "10%",
    size: 40,
    type: "square",
    delay: 1,
    duration: 5,
    opacity: 0.07,
  },
  {
    id: 3,
    x: "70%",
    y: "75%",
    size: 80,
    type: "circle",
    delay: 2,
    duration: 7,
    opacity: 0.05,
  },
  {
    id: 4,
    x: "15%",
    y: "70%",
    size: 50,
    type: "diamond",
    delay: 0.5,
    duration: 8,
    opacity: 0.06,
  },
  {
    id: 5,
    x: "50%",
    y: "88%",
    size: 30,
    type: "circle",
    delay: 3,
    duration: 5,
    opacity: 0.08,
  },
  {
    id: 6,
    x: "35%",
    y: "5%",
    size: 25,
    type: "square",
    delay: 1.5,
    duration: 6,
    opacity: 0.07,
  },
  {
    id: 7,
    x: "92%",
    y: "55%",
    size: 45,
    type: "circle",
    delay: 2.5,
    duration: 7,
    opacity: 0.05,
  },
  {
    id: 8,
    x: "3%",
    y: "45%",
    size: 35,
    type: "diamond",
    delay: 4,
    duration: 6,
    opacity: 0.06,
  },

  // Math symbols
  {
    id: 9,
    x: "20%",
    y: "30%",
    size: 28,
    type: "symbol",
    symbol: "π",
    delay: 0,
    duration: 7,
    opacity: 0.12,
  },
  {
    id: 10,
    x: "75%",
    y: "20%",
    size: 24,
    type: "symbol",
    symbol: "∑",
    delay: 1,
    duration: 5,
    opacity: 0.1,
  },
  {
    id: 11,
    x: "60%",
    y: "50%",
    size: 22,
    type: "symbol",
    symbol: "√",
    delay: 2,
    duration: 8,
    opacity: 0.09,
  },
  {
    id: 12,
    x: "45%",
    y: "65%",
    size: 20,
    type: "symbol",
    symbol: "÷",
    delay: 3,
    duration: 6,
    opacity: 0.11,
  },
  {
    id: 13,
    x: "10%",
    y: "85%",
    size: 26,
    type: "symbol",
    symbol: "+",
    delay: 1.5,
    duration: 5,
    opacity: 0.1,
  },
  {
    id: 14,
    x: "85%",
    y: "40%",
    size: 18,
    type: "symbol",
    symbol: "∞",
    delay: 2.5,
    duration: 7,
    opacity: 0.09,
  },
  {
    id: 15,
    x: "30%",
    y: "90%",
    size: 20,
    type: "symbol",
    symbol: "Δ",
    delay: 0.8,
    duration: 6,
    opacity: 0.1,
  },
  {
    id: 16,
    x: "55%",
    y: "12%",
    size: 22,
    type: "symbol",
    symbol: "θ",
    delay: 3.5,
    duration: 5,
    opacity: 0.11,
  },

  // Tiny dots
  {
    id: 17,
    x: "22%",
    y: "55%",
    size: 8,
    type: "circle",
    delay: 1,
    duration: 4,
    opacity: 0.15,
  },
  {
    id: 18,
    x: "78%",
    y: "82%",
    size: 6,
    type: "circle",
    delay: 2,
    duration: 5,
    opacity: 0.12,
  },
  {
    id: 19,
    x: "48%",
    y: "30%",
    size: 10,
    type: "circle",
    delay: 0.5,
    duration: 6,
    opacity: 0.1,
  },
  {
    id: 20,
    x: "65%",
    y: "92%",
    size: 7,
    type: "circle",
    delay: 3,
    duration: 4,
    opacity: 0.13,
  },
];

export function FloatingBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            opacity: shape.opacity,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {shape.type === "symbol" ? (
            <span
              style={{
                fontSize: shape.size,
                color: "#7c3aed",
                fontFamily: "serif",
                fontWeight: "bold",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {shape.symbol}
            </span>
          ) : shape.type === "diamond" ? (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                background: "linear-gradient(135deg, #7c3aed, #c4b5fd)",
                transform: "rotate(45deg)",
                borderRadius: 4,
              }}
            />
          ) : shape.type === "square" ? (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                background: "linear-gradient(135deg, #a855f7, #e9d5ff)",
                borderRadius: 6,
              }}
            />
          ) : (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                background: "linear-gradient(135deg, #7c3aed, #c084fc)",
                borderRadius: "50%",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
