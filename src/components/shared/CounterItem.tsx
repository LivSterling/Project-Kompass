"use client";

import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import useCountUp from "@/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";

export type CounterItemBlok = {
  _uid: string;
  component?: string;
  value?: number | string;
  prefix?: string;
  suffix?: string;
  label?: string;
  color?: "navy" | "orange" | "blue" | "green";
};

const VALUE_COLOR: Record<string, string> = {
  navy: "text-navy",
  orange: "text-orange",
  blue: "text-blue",
  green: "text-green",
};

const LABEL_COLOR: Record<string, string> = {
  navy: "text-navy",
  orange: "text-orange",
  blue: "text-blue",
  green: "text-green",
};

export default function CounterItem({ blok }: { blok: CounterItemBlok }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const target = Number(blok.value) || 0;
  const color = blok.color && VALUE_COLOR[blok.color] ? blok.color : "blue";
  const count = useCountUp(target, { enabled: visible, duration: 1200 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      {...storyblokEditable(blok as SbBlokData)}
      className="flex min-w-[200px] flex-1 flex-col items-center text-center"
    >
      <p
        className={`font-heading text-[clamp(3.5rem,8vw,6.2rem)] leading-none tracking-[0.01em] ${VALUE_COLOR[color]}`}
        aria-label={`${blok.prefix ?? ""}${target}${blok.suffix ?? ""} ${blok.label ?? ""}`}
      >
        {blok.prefix}
        {count.toLocaleString()}
        {blok.suffix}
      </p>
      {blok.label ? (
        <p
          className={`font-heading mt-1 text-[20px] capitalize leading-none tracking-[0.01em] ${LABEL_COLOR[color]}`}
        >
          {blok.label}
        </p>
      ) : null}
    </div>
  );
}
