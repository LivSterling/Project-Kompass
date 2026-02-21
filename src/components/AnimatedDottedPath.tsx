"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type Direction = "up-right" | "down-right" | "vertical";

interface AnimatedDottedPathProps {
  direction?: Direction;
  dotCount?: number;
  color?: string;
  showX?: boolean;
  className?: string;
}

export default function AnimatedDottedPath({
  direction = "up-right",
  dotCount = 18,
  color = "#252B42",
  showX = true,
  className,
}: AnimatedDottedPathProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const points = useMemo(() => {
    const steps = Array.from({ length: dotCount }, (_, i) => i);
    return steps.map((idx) => {
      const progress = idx / Math.max(dotCount - 1, 1);
      if (direction === "vertical") {
        return { x: 28, y: 12 + progress * 176 };
      }
      if (direction === "down-right") {
        return {
          x: 12 + progress * 176,
          y: 16 + Math.pow(progress, 1.3) * 168,
        };
      }
      return {
        x: 12 + progress * 176,
        y: 188 - Math.pow(progress, 1.3) * 168,
      };
    });
  }, [direction, dotCount]);

  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
        {points.map((point, idx) => (
          <motion.circle
            key={`${point.x}-${point.y}-${idx}`}
            cx={point.x}
            cy={point.y}
            r="3.5"
            fill={color}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 0.55, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: idx * 0.05, duration: 0.25 }}
          />
        ))}
        {showX && (
          <motion.g
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 0.85, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ delay: dotCount * 0.05, duration: 0.3 }}
          >
            <line x1="182" y1="28" x2="206" y2="52" stroke={color} strokeWidth="4" strokeLinecap="round" />
            <line x1="206" y1="28" x2="182" y2="52" stroke={color} strokeWidth="4" strokeLinecap="round" />
          </motion.g>
        )}
      </svg>
    </div>
  );
}
