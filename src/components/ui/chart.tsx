"use client";

import * as React from "react";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Tooltip } from "recharts";

export type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

export function ChartContainer({
  config,
  className,
  children,
}: {
  config: ChartConfig;
  className?: string;
  children: React.ReactNode;
}) {
  const style = Object.entries(config).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[`--color-${key}`] = value.color;
    return acc;
  }, {});

  return (
    <div className={className} style={style as React.CSSProperties}>
      {children}
    </div>
  );
}

export const ChartTooltip = Tooltip<ValueType, NameType>;

export function ChartTooltipContent({
  active,
  payload,
  label,
  config,
  theme = "dark",
}: {
  active?: boolean;
  payload?: Array<{ dataKey?: string; name?: string; value?: number }>;
  label?: string;
  config: ChartConfig;
  theme?: "dark" | "light";
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const light = theme === "light";

  return (
    <div
      className={`rounded-md border p-3 text-xs shadow-lg ${
        light
          ? "border-black/10 bg-white text-navy-dark"
          : "border-white/20 bg-navy-dark/95 text-white"
      }`}
    >
      <p className="mb-2 font-semibold">{label}</p>
      <div className="space-y-1.5">
        {payload.map((item) => {
          const key = (item.dataKey ?? item.name ?? "").toString();
          const chartItem = config[key];
          return (
            <div key={key} className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: chartItem?.color ?? "#fff" }}
              />
              <span className={light ? "text-navy-dark/80" : "text-white/85"}>
                {chartItem?.label ?? key}
              </span>
              <span className="ml-auto font-medium">{item.value ?? 0}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
