import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import CounterItem, { type CounterItemBlok } from "@/components/shared/CounterItem";

type Theme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

const HEADLINE_CASE: Record<string, string> = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  normal: "",
};

interface CounterSectionProps {
  blok: {
    headline?: string;
    theme?: Theme;
    /** `uppercase` (default) · `capitalize` · `normal`. */
    headline_case?: "uppercase" | "capitalize" | "normal";
    body?: string;
    counters?: CounterItemBlok[];
    _uid: string;
  };
}

export default function CounterSection({ blok }: CounterSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "blue";
  const headlineCase = HEADLINE_CASE[blok.headline_case ?? "uppercase"] ?? "uppercase";
  const counters = blok.counters ?? [];

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        {blok.headline ? (
          <h2
            className={`font-heading mx-auto max-w-[1050px] text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] ${HEADING_COLOR[theme]} ${headlineCase}`}
          >
            {blok.headline}
          </h2>
        ) : null}

        {blok.body ? (
          <p className="mx-auto mt-10 max-w-[864px] text-center text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white md:mt-12">
            {blok.body}
          </p>
        ) : null}

        {counters.length === 0 ? (
          <p className="mt-14 text-center text-base font-medium text-white/60 md:mt-16">
            Add counter blocks in Storyblok.
          </p>
        ) : (
          <div className="mx-auto mt-14 flex max-w-[1100px] flex-wrap items-start justify-center gap-x-16 gap-y-10 md:mt-16 md:gap-x-24">
            {counters.map((counter) => (
              <CounterItem key={counter._uid} blok={counter} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
