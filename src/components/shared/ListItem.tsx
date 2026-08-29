"use client";

import { useState } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import { listItemTitle, type StoryblokRichtext } from "@/lib/listItemFields";

export { listItemTitle } from "@/lib/listItemFields";

const PAPER = "/img/figma/brown-paper.jpg";

export type ListItemBlok = {
  _uid: string;
  component?: string;
  /** Preferred field name for the row heading. */
  title?: string | StoryblokRichtext;
  /** API name used in some Storyblok schemas instead of `title`. */
  text?: string | StoryblokRichtext;
  /** Aliases some editors use when creating the blok in Storyblok. */
  headline?: string | StoryblokRichtext;
  heading?: string | StoryblokRichtext;
  name?: string | StoryblokRichtext;
  label?: string | StoryblokRichtext;
  body?: string;
  /** Overrides the auto color cycle. */
  accent_color?: "orange" | "green" | "blue" | "navy";
  /** Accordion only: open on first render. */
  default_open?: boolean;
  /** Accordion only: optional CTA inside the panel. */
  button_label?: string;
  button_link?: { url?: string; cached_url?: string };
};

const BAR_BG: Record<string, string> = {
  orange: "bg-orange",
  green: "bg-green",
  blue: "bg-blue",
  navy: "bg-navy",
};

const TEXT_COLOR: Record<string, string> = {
  orange: "text-orange",
  green: "text-green",
  blue: "text-blue",
  navy: "text-navy",
};

const ACCORDION_CYCLE = ["orange", "green", "blue", "navy"] as const;
const NUMBERED_CYCLE = ["orange", "blue", "green", "navy"] as const;

function CircleArrow({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[52px] w-[52px] shrink-0 text-black transition-transform duration-300 md:h-[64px] md:w-[64px] ${
        open ? "rotate-90" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10.5" />
      <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ListItem({
  blok,
  index = 0,
  variant = "accordion",
}: {
  blok: ListItemBlok;
  index?: number;
  variant?: "accordion" | "numbered";
}) {
  const [open, setOpen] = useState<boolean>(blok.default_open === true);
  const title = listItemTitle(blok);

  if (variant === "numbered") {
    const autoColor = NUMBERED_CYCLE[index % NUMBERED_CYCLE.length];
    const color =
      blok.accent_color && TEXT_COLOR[blok.accent_color] ? blok.accent_color : autoColor;

    return (
      <li {...storyblokEditable(blok as SbBlokData)} className="list-none">
        <h3
          className={`font-heading text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.2] tracking-[0.01em] ${TEXT_COLOR[color]}`}
        >
          <span>{index + 1}. </span>
          {title}
        </h3>
        <p className="mt-1 max-w-[510px] text-[20px] font-normal leading-[30px] tracking-[0.01em] whitespace-pre-wrap text-white">
          {blok.body}
        </p>
      </li>
    );
  }

  const autoColor = ACCORDION_CYCLE[index % ACCORDION_CYCLE.length];
  const accent =
    blok.accent_color && BAR_BG[blok.accent_color] ? blok.accent_color : autoColor;
  const barClass = BAR_BG[accent];
  const href = blok.button_link?.url || blok.button_link?.cached_url || undefined;

  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${PAPER})` }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
      >
        <span className="relative inline-block">
          {open && (
            <span
              className={`absolute inset-x-[-6px] top-1/2 z-0 h-[78%] -translate-y-1/2 ${barClass}`}
              aria-hidden
            />
          )}
          <span className="font-heading relative z-10 text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[0.01em] text-black">
            {title}
          </span>
        </span>
        <CircleArrow open={open} />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-7 md:px-8 md:pb-8">
            {blok.body && (
              <p className="max-w-[864px] text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-black">
                {blok.body}
              </p>
            )}
            {blok.button_label ? (
              <a
                href={href || "#"}
                className="font-heading mt-6 inline-flex h-[51px] w-[222px] items-center justify-center bg-blue px-5 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105"
              >
                {blok.button_label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
