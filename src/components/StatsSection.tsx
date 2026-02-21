import { storyblokEditable } from "@storyblok/react/rsc";
import ImpactChart, { type ImpactDataPoint } from "@/components/ImpactChart";
import AnimatedDottedPath from "@/components/AnimatedDottedPath";

interface StatsSectionProps {
  blok: {
    headline: string;
    body?: string;
    chart_title?: string;
    chart_data?: Array<{
      year?: string;
      transitional_housing?: number | string;
      community_center?: number | string;
      project_farm?: number | string;
    }>;
    chart_image_1?: {
      filename: string;
      alt?: string;
    };
    chart_image_2?: {
      filename: string;
      alt?: string;
    };
    _uid: string;
  };
}

export default function StatsSection({ blok }: StatsSectionProps) {
  const parsedChartData: ImpactDataPoint[] =
    blok.chart_data?.length
      ? blok.chart_data.map((point) => ({
          year: point.year || "",
          transitional_housing: Number(point.transitional_housing) || 0,
          community_center: Number(point.community_center) || 0,
          project_farm: Number(point.project_farm) || 0,
        }))
      : [
          { year: "2021", transitional_housing: 120, community_center: 90, project_farm: 40 },
          { year: "2022", transitional_housing: 150, community_center: 110, project_farm: 58 },
          { year: "2023", transitional_housing: 175, community_center: 138, project_farm: 76 },
          { year: "2024", transitional_housing: 210, community_center: 168, project_farm: 92 },
        ];

  return (
    <section {...storyblokEditable(blok)} className="relative bg-white-50% py-16 md:py-20">
      <div className="section-shell px-4 md:px-6">
        <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-heading text-4xl leading-none text-orange md:text-6xl">{blok.headline}</h2>
            {blok.body && <p className="mt-5 max-w-[700px] text-sm leading-relaxed text-white/85 md:text-base">{blok.body}</p>}
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/80">
              {blok.chart_title || "People Served Over Time"}
            </h3>
            <div className="mt-3">
              <ImpactChart data={parsedChartData} />
            </div>
          </div>

          <div className="relative min-h-[240px] rounded-sm bg-white/5 p-4">
            <img
              src={blok.chart_image_2?.filename || blok.chart_image_1?.filename || "/img/bg.png"}
              alt={blok.chart_image_2?.alt || blok.chart_image_1?.alt || "Impact visual"}
              className="h-full max-h-[300px] w-full object-cover object-center"
            />
          </div>
        </div>

        <AnimatedDottedPath
          direction="up-right"
          dotCount={12}
          color="#f39a58"
          className="pointer-events-none absolute bottom-2 right-5 h-36 w-36 opacity-70 md:bottom-4 md:right-12"
        />
      </div>
    </section>
  );
}