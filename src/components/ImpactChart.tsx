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
}

const chartConfig: ChartConfig = {
  transitional_housing: { label: "Transitional Housing", color: "#7AA7E8" },
  community_center: { label: "Community Center", color: "#F79D53" },
  project_farm: { label: "Project Farm", color: "#8AB56A" },
};

export default function ImpactChart({ data }: ImpactChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[260px] w-full rounded-lg bg-white/5 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.18)" />
          <XAxis
            dataKey="year"
            tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 11 }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 11 }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={false}
            width={36}
          />
          <ChartTooltip content={<ChartTooltipContent config={chartConfig} />} />
          <Line type="monotone" dataKey="transitional_housing" stroke="var(--color-transitional_housing)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="community_center" stroke="var(--color-community_center)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="project_farm" stroke="var(--color-project_farm)" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
