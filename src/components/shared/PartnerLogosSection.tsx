import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

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

/** Nested-only content for one logo box — not registered as a React component (like
 * `hero_segment`), since `PartnerLogosSection` renders these directly. */
export type PartnerLogoBlok = {
  _uid?: string;
  component?: string;
  image?: { filename: string; alt?: string };
  /** Partner name — used as the accessible label. Falls back to the asset's own alt text. */
  alt?: string;
  link?: { url?: string; cached_url?: string };
};

interface PartnerLogosSectionProps {
  blok: {
    headline?: string;
    theme?: Theme;
    headline_case?: "uppercase" | "capitalize" | "normal";
    /** Scrolls left, like the top row on the reference site. */
    top_row?: PartnerLogoBlok[];
    /** Scrolls right (opposite direction from the top/bottom rows). */
    middle_row?: PartnerLogoBlok[];
    /** Scrolls left. */
    bottom_row?: PartnerLogoBlok[];
    /** Seconds of animation per logo — controls belt speed. Defaults to `4`. */
    speed?: number;
    /** Growing dotted connector after the belt, leading into the next section. Defaults to **on**. */
    show_bottom_connector?: boolean;
    _uid: string;
  };
}

function LogoBox({ item }: { item: PartnerLogoBlok }) {
  if (!item.image?.filename) return null;

  const content = (
    <div className="flex h-[116px] w-[288px] shrink-0 items-center justify-center bg-white px-6 py-4">
      <img
        src={item.image.filename}
        alt={item.alt || item.image.alt || ""}
        className="max-h-[72px] max-w-[220px] object-contain"
      />
    </div>
  );

  const href = item.link?.url || item.link?.cached_url;

  return (
    <div {...storyblokEditable(item as SbBlokData)} className="shrink-0">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: PartnerLogoBlok[];
  direction: "left" | "right";
  speed: number;
}) {
  const valid = items.filter((item) => item.image?.filename);
  if (!valid.length) return null;

  const duration = Math.max(valid.length * speed, 8);

  return (
    <div className="marquee-row w-full">
      <div
        className={`marquee-track marquee-track--${direction} gap-6`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...valid, ...valid].map((item, i) => (
          <LogoBox key={`${item._uid ?? i}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function PartnerLogosSection({ blok }: PartnerLogosSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "navy";
  const headlineCase = HEADLINE_CASE[blok.headline_case ?? "uppercase"] ?? "uppercase";
  const speed = blok.speed && blok.speed > 0 ? blok.speed : 4;

  const topRow = blok.top_row ?? [];
  const middleRow = blok.middle_row ?? [];
  const bottomRow = blok.bottom_row ?? [];

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="pb-14 md:pb-20">
        {blok.headline ? (
          <h2
            className={`font-heading px-4 text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] md:px-6 ${HEADING_COLOR[theme]} ${headlineCase}`}
          >
            {blok.headline}
          </h2>
        ) : null}

        <div className="mt-10 flex w-full flex-col gap-6 md:mt-14 md:gap-8">
          <MarqueeRow items={topRow} direction="left" speed={speed} />
          <MarqueeRow items={middleRow} direction="right" speed={speed} />
          <MarqueeRow items={bottomRow} direction="left" speed={speed} />
        </div>
      </div>

      {blok.show_bottom_connector !== false ? <GrowingDottedConnector variant={theme} /> : null}
    </section>
  );
}
