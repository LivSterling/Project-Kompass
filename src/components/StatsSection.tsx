import { storyblokEditable } from "@storyblok/react/rsc";
import ImpactChart, { type ImpactDataPoint } from "@/components/ImpactChart";
import ImpactDonut from "@/components/ImpactDonut";
import { FIGMA_IMPACT_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const PK_TEXTURE = "/img/figma/pk-texture.png";

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
    <section {...storyblokEditable(blok)} className="relative overflow-x-clip bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url(${PK_TEXTURE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="section-shell relative z-10 px-4 md:px-6">
        <h2 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] uppercase leading-none tracking-wide text-orange">
          {blok.headline}
        </h2>

        {blok.body && (
          <p className="mt-6 max-w-[983px] whitespace-pre-wrap text-xl leading-[30px] tracking-wide text-black">
            {blok.body}
          </p>
        )}

        <div className="mt-14 grid min-w-0 items-end gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="min-w-0">
            {blok.chart_title ? (
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#474747]">
                {blok.chart_title}
              </h3>
            ) : null}
            <ImpactChart data={parsedChartData} variant="onLight" />
          </div>
          <div className="flex justify-center md:justify-end">
            {blok.chart_image_2?.filename ? (
              <img
                src={blok.chart_image_2.filename}
                alt={blok.chart_image_2.alt || "Impact distribution"}
                className="max-h-[340px] w-full max-w-[375px] object-contain"
              />
            ) : (
              <ImpactDonut />
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute top-0 right-[-5%] z-[1] hidden h-[min(90vh,760px)] w-[min(95vw,610px)] opacity-30 md:block"
          aria-hidden
        >
          <img
            src={FIGMA_IMPACT_LINE}
            alt=""
            className="h-full w-full object-contain object-right-top"
            style={{ transform: "rotate(-95.67deg)" }}
          />
        </div>
        <img
          src={FIGMA_MAP_X}
          alt=""
          className="pointer-events-none absolute bottom-[12%] right-[6%] z-[1] hidden h-20 w-20 opacity-30 object-contain md:block"
          aria-hidden
        />
      </div>
    </section>
  );
}
