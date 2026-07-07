import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import FaqItem, { type FaqAccent, type FaqItemBlok } from "@/components/shared/FaqItem";

type FaqTheme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<FaqTheme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

interface FaqSectionProps {
  blok: {
    headline?: string;
    theme?: FaqTheme;
    show_bottom_connector?: boolean;
    default_item_accent?: FaqAccent;
    items?: FaqItemBlok[];
    body?: FaqItemBlok[];
    _uid: string;
  };
}

export default function FaqSection({ blok }: FaqSectionProps) {
  const items = blok.items?.length ? blok.items : blok.body ?? [];
  const theme: FaqTheme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "orange";
  const defaultAccent: FaqAccent = blok.default_item_accent ?? theme;

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        <h2
          className={`font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] uppercase ${HEADING_COLOR[theme]}`}
        >
          {blok.headline || "FAQ"}
        </h2>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-base font-medium text-white/60">
            Add FAQ items (nested blocks) in Storyblok for this section.
          </p>
        ) : (
          <div className="mx-auto mt-12 flex max-w-[686px] flex-col gap-[5px]">
            {items.map((item) => (
              <FaqItem key={item._uid} blok={item} defaultAccent={defaultAccent} />
            ))}
          </div>
        )}
      </div>

      {blok.show_bottom_connector ? <GrowingDottedConnector variant={theme} /> : null}
    </section>
  );
}
