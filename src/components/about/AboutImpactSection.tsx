import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import ImpactChart, { type ImpactDataPoint } from "@/components/ImpactChart";
import ImpactDonut from "@/components/ImpactDonut";

const DEFAULT_CHART_DATA: ImpactDataPoint[] = [
  { year: "2020", transitional_housing: 12, community_center: 8, project_farm: 4 },
  { year: "2021", transitional_housing: 18, community_center: 14, project_farm: 7 },
  { year: "2022", transitional_housing: 26, community_center: 20, project_farm: 11 },
  { year: "2023", transitional_housing: 34, community_center: 28, project_farm: 16 },
];

function parseChartData(raw?: string): ImpactDataPoint[] {
  if (!raw?.trim()) return DEFAULT_CHART_DATA;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_CHART_DATA;
    return parsed as ImpactDataPoint[];
  } catch {
    return DEFAULT_CHART_DATA;
  }
}

interface AboutImpactSectionProps {
  blok: {
    headline?: string;
    chart_data?: string;
    donut_center?: string;
    _uid: string;
  };
}

export default function AboutImpactSection({ blok }: AboutImpactSectionProps) {
  const data = parseChartData(blok.chart_data);
  const donutCenter = blok.donut_center?.trim() || "98%";

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange capitalize">
          {blok.headline || "Our Impact"}
        </h2>

        <div className="mx-auto mt-10 grid max-w-[1100px] gap-8 md:mt-14 md:grid-cols-2 md:items-start md:gap-10 lg:gap-14">
          <div className="flex min-h-[280px] w-full min-w-0 justify-center rounded-sm bg-white p-4 shadow-sm md:min-h-[300px] md:p-5">
            <ImpactChart data={data} variant="onLight" />
          </div>
          <div className="flex min-h-[280px] w-full min-w-0 flex-col items-center justify-center rounded-sm bg-white p-6 shadow-sm md:min-h-[300px] md:p-8">
            <ImpactDonut centerLabel={donutCenter} />
          </div>
        </div>
      </div>
    </section>
  );
}
