"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

export interface ImpactDataPoint {
  year: string;
  transitional_housing: number;
  community_center: number;
  project_farm: number;
}

interface ImpactChartProps {
  data: ImpactDataPoint[];
  variant?: "onDark" | "onLight";
}

const chartConfig: ChartConfig = {
  transitional_housing: { label: "Transitional Housing", color: "#9a89ff" },
  community_center: { label: "Community Center", color: "#fbe38e" },
  project_farm: { label: "Project Farm", color: "#fc8f4c" },
};

export default function ImpactChart({ data, variant = "onDark" }: ImpactChartProps) {
  const light = variant === "onLight";
  const gridStroke = light ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.18)";
  const axisStroke = light ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)";
  const tickFill = light ? "#474747" : "rgba(255,255,255,0.75)";

  return (
    <ChartContainer
      config={chartConfig}
      className={`h-[300px] min-h-[300px] w-full min-w-0 max-w-[640px] rounded-sm border p-4 md:h-[340px] md:min-h-[340px] ${
        light ? "border-black/10 bg-white" : "border-white/10 bg-white/5"
      }`}
    >
      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={280}>
        <LineChart data={data} margin={{ top: 12, right: 12, left: 4, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: tickFill, fontSize: 12 }}
            axisLine={{ stroke: axisStroke }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: tickFill, fontSize: 12 }}
            axisLine={{ stroke: axisStroke }}
            tickLine={false}
            width={40}
          />
          <ChartTooltip
            content={<ChartTooltipContent config={chartConfig} theme={light ? "light" : "dark"} />}
          />
          <Line
            type="monotone"
            dataKey="transitional_housing"
            stroke="var(--color-transitional_housing)"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="community_center"
            stroke="var(--color-community_center)"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="project_farm"
            stroke="var(--color-project_farm)"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
