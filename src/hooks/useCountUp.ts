"use client";

import { useEffect, useRef, useState } from "react";

type EasingFn = (t: number) => number;

/** Fast ease-out — numbers ramp quickly then settle. */
const easeOutExpo: EasingFn = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function useCountUp(
  target: number,
  {
    duration = 1400,
    enabled = true,
    easing = easeOutExpo,
  }: { duration?: number; enabled?: boolean; easing?: EasingFn } = {},
) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!enabled) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || target <= 0) {
      setValue(target);
      return;
    }
    if (started.current) return;
    started.current = true;

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easing(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, enabled, easing]);

  return value;
}
