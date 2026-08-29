import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { Fragment } from "react";

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
  /** `none` = plain text; otherwise a colored highlight bar. */
  bar_color?: "none" | "green" | "blue" | "navy" | "orange";
};

export type HeroLineBlok = {
  _uid?: string;
  component?: string;
  segments?: HeroSegmentBlok[];
};

function HeroSegment({
  seg,
  plainTextClassName,
}: {
  seg: HeroSegmentBlok;
  plainTextClassName: string;
}) {
  const text = seg.text ?? "";
  const color = seg.bar_color && seg.bar_color !== "none" ? seg.bar_color : null;

  if (!color) {
    return (
      <span {...storyblokEditable(seg as SbBlokData)} className={`relative z-10 ${plainTextClassName}`}>
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

/**
 * Shared renderer for `hero_line` / `hero_segment` blocks — one or more lines, each made of
 * plain-text or colored-highlight-bar segments. Used by `PageHero` and `MapSection` so both
 * blocks produce identical "big title lettering with solid backgrounds" typography.
 */
export function HeroTitleLines({
  lines,
  plainTextClassName = "text-black",
  lineClassName,
}: {
  lines: HeroLineBlok[];
  /** Text color class for plain (non-highlighted) segments — `text-black` on light backgrounds, `text-white` on dark. */
  plainTextClassName?: string;
  /**
   * When set, each line renders as its own block-level element with this className (e.g.
   * `mb-3 last:mb-0`) so you get an explicit, controllable gap between lines instead of relying
   * on `<br />` + line-height alone.
   */
  lineClassName?: string;
}) {
  return (
    <>
      {lines.map((line, i) => {
        const content = (line.segments ?? []).map((seg, j) => (
          <HeroSegment key={seg._uid ?? j} seg={seg} plainTextClassName={plainTextClassName} />
        ));

        if (lineClassName) {
          return (
            <span key={line._uid ?? i} className={`block ${lineClassName}`}>
              {content}
            </span>
          );
        }

        return (
          <Fragment key={line._uid ?? i}>
            {i > 0 && <br />}
            {content}
          </Fragment>
        );
      })}
    </>
  );
}
