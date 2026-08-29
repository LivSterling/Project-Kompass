import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import ImpactStatItem, { type ImpactStatBlok } from "@/components/shared/ImpactStatItem";

type Theme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

interface ImpactStatsSectionProps {
  blok: {
    headline?: string;
    intro?: string;
    theme?: Theme;
    image?: { filename: string; alt?: string };
    stats?: ImpactStatBlok[];
    body?: ImpactStatBlok[];
    _uid: string;
  };
}

export default function ImpactStatsSection({ blok }: ImpactStatsSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "green";
  const stats = blok.stats?.length ? blok.stats : blok.body ?? [];

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        {blok.headline ? (
          <h2
            className={`font-heading mx-auto max-w-[1050px] text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] uppercase ${HEADING_COLOR[theme]}`}
          >
            {blok.headline}
          </h2>
        ) : null}

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 md:mt-16 md:grid-cols-[minmax(0,512px)_minmax(0,1fr)] md:items-start md:gap-14">
          {blok.image?.filename ? (
            <div className="relative aspect-[512/683] w-full overflow-hidden">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[512/683] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50">
              Add portrait photo in Storyblok
            </div>
          )}

          <div className="flex flex-col gap-10 md:gap-12">
            {blok.intro ? (
              <p className="max-w-[510px] text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white md:mx-auto md:text-center lg:mx-0 lg:text-left">
                {blok.intro}
              </p>
            ) : null}

            {stats.length === 0 ? (
              <p className="text-center text-base font-medium text-white/60 lg:text-left">
                Add impact stat blocks in Storyblok.
              </p>
            ) : (
              <div className="flex flex-col gap-8 md:gap-10">
                {stats.map((stat) => (
                  <ImpactStatItem key={stat._uid} blok={stat} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
