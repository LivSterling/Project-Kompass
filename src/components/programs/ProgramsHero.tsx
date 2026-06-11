import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";
import { Fragment, type ReactNode } from "react";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

const BAR_BG: Record<string, string> = {
  green: "bg-green",
  blue: "bg-blue",
  navy: "bg-navy",
  orange: "bg-orange",
};

interface ProgramsHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    title?: string;
    highlight_green?: string;
    highlight_orange?: string;
    highlight_blue?: string;
    _uid: string;
  };
}

/** Wraps each highlighted phrase found in a line with its colored bar. */
function renderLine(
  line: string,
  highlights: { phrase: string; color: string }[],
): ReactNode {
  const active = highlights.filter((h) => h.phrase && line.includes(h.phrase));
  if (active.length === 0) return line;

  // Find the earliest matching phrase, split around it, and recurse.
  let earliest: { phrase: string; color: string; index: number } | null = null;
  for (const h of active) {
    const index = line.indexOf(h.phrase);
    if (earliest === null || index < earliest.index) {
      earliest = { ...h, index };
    }
  }
  if (!earliest) return line;

  const before = line.slice(0, earliest.index);
  const after = line.slice(earliest.index + earliest.phrase.length);
  const barClass = BAR_BG[earliest.color] ?? BAR_BG.green;

  return (
    <Fragment>
      {before}
      <span
        className={`box-decoration-clone ${barClass} px-2 py-1 text-black`}
      >
        {earliest.phrase}
      </span>
      {renderLine(after, active)}
    </Fragment>
  );
}

export default function ProgramsHero({ blok }: ProgramsHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const title = blok.title || "Support That Meets People\nWhere They Are.";
  const highlights = [
    { phrase: blok.highlight_green || "Support", color: "green" },
    { phrase: blok.highlight_orange || "Meets", color: "orange" },
    { phrase: blok.highlight_blue || "Are", color: "blue" },
  ];
  const lines = title.split("\n");

  return (
    <section
      {...storyblokEditable(blok)}
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
              className="h-[80px] w-auto object-contain md:h-[119px] md:w-[117px]"
            />
          </div>

          <h1 className="font-heading text-center text-[clamp(2.25rem,5.4vw,3.62rem)] leading-[1.4] tracking-[0.01em] text-black md:text-left">
            {lines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {renderLine(line, highlights)}
              </Fragment>
            ))}
          </h1>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-[14%] right-[-8%] z-[1] hidden h-[min(52vw,520px)] w-[min(62vw,610px)] opacity-30 md:block"
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
        className="pointer-events-none absolute top-[30%] right-[8%] z-[1] hidden h-[100px] w-[80px] object-contain opacity-30 md:block"
        aria-hidden
      />
    </section>
  );
}
