import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { Fragment } from "react";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

const BAR_BG: Record<string, string> = {
  green: "bg-green",
  blue: "bg-blue",
  navy: "bg-navy",
  orange: "bg-orange",
};

export type HeroSegmentBlok = {
  _uid?: string;
  component?: string;
  text?: string;
  /** `none` = plain text on the paper; otherwise a colored highlight bar. */
  bar_color?: "none" | "green" | "blue" | "navy" | "orange";
};

export type HeroLineBlok = {
  _uid?: string;
  component?: string;
  segments?: HeroSegmentBlok[];
};

interface PageHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    /** Small line above the title (e.g. About's "Who are we?"). */
    eyebrow?: string;
    /** Toggle the decorative dotted path + map "X" on the right (desktop). */
    show_decorations?: boolean;
    lines?: HeroLineBlok[];
    _uid: string;
  };
}

function Segment({ seg }: { seg: HeroSegmentBlok }) {
  const text = seg.text ?? "";
  const color = seg.bar_color && seg.bar_color !== "none" ? seg.bar_color : null;

  if (!color) {
    return (
      <span {...storyblokEditable(seg as SbBlokData)} className="relative z-10">
        {text}
      </span>
    );
  }

  return (
    <span
      {...storyblokEditable(seg as SbBlokData)}
      className={`relative z-10 box-decoration-clone ${BAR_BG[color]} px-2 py-1 text-black`}
    >
      {text}
    </span>
  );
}

export default function PageHero({ blok }: PageHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const showDecorations = blok.show_decorations !== false;
  const lines = blok.lines ?? [];

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BROWN_PAPER})` }}
        aria-hidden
      />

      <div className="section-shell relative z-10 px-4 md:px-6">
        <div className="flex max-w-[940px] flex-col items-center gap-8 md:items-start md:gap-10">
          <div className="flex justify-center md:justify-start">
            <img
              src={compassSrc}
              alt={blok.compass_image?.alt || ""}
              className="h-[72px] w-auto object-contain md:h-[119px] md:w-[117px]"
            />
          </div>

          <div className="relative w-full">
            {blok.eyebrow ? (
              <p className="font-heading mb-8 text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.12] tracking-[0.01em] text-black md:mb-10 md:text-left">
                {blok.eyebrow}
              </p>
            ) : null}

            <h1 className="font-heading text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.4] tracking-[0.01em] text-black md:text-left">
              {lines.map((line, i) => (
                <Fragment key={line._uid ?? i}>
                  {i > 0 && <br />}
                  {(line.segments ?? []).map((seg, j) => (
                    <Segment key={seg._uid ?? j} seg={seg} />
                  ))}
                </Fragment>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {showDecorations ? (
        <>
          <div
            className="pointer-events-none absolute top-[16%] right-[-8%] z-[1] hidden h-[min(52vw,520px)] w-[min(62vw,610px)] opacity-30 md:block"
            aria-hidden
          >
            <img
              src={FIGMA_DOTTED_LINE}
              alt=""
              className="h-full w-full max-w-none object-contain"
              style={{ transform: "rotate(-96deg)" }}
            />
          </div>
          <img
            src={FIGMA_MAP_X}
            alt=""
            className="pointer-events-none absolute top-[32%] right-[6%] z-[1] hidden h-[73px] w-[59px] object-contain opacity-30 md:block"
            aria-hidden
          />
        </>
      ) : null}
    </section>
  );
}
