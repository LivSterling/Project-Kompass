"use client";

import { Cell, Pie, PieChart } from "recharts";

const SEGMENTS = [
  { name: "Community", value: 42, color: "#82a969" },
  { name: "Housing", value: 35, color: "#fc8f4c" },
  { name: "Programs", value: 23, color: "#4c7fc8" },
];

const W = 360;
const H = 280;

interface ImpactDonutProps {
  centerLabel?: string;
  className?: string;
}

export default function ImpactDonut({ centerLabel = "98%", className }: ImpactDonutProps) {
  return (
    <div className={`relative mx-auto flex w-full max-w-[375px] justify-center ${className ?? ""}`}>
      <PieChart width={W} height={H} style={{ maxWidth: "100%", height: "auto" }}>
        <Pie
          data={SEGMENTS}
          cx={W / 2}
          cy={H / 2}
          innerRadius={72}
          outerRadius={110}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {SEGMENTS.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      {centerLabel ? (
        <span className="pointer-events-none absolute top-[calc(50%-6px)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[clamp(2.25rem,5vw,4.15rem)] leading-none tracking-[0.01em] text-black">
          {centerLabel}
        </span>
      ) : null}
    </div>
  );
}
