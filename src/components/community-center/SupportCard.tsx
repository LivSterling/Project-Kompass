"use client";

import { storyblokEditable, type SbBlokData } from "@storyblok/react";

export type SupportCardBlok = {
  _uid: string;
  component?: string;
  title?: string;
  schedule?: string;
  body?: string;
  /** Overrides the auto color cycle (navy → green → orange → blue). */
  card_color?: "navy" | "green" | "orange" | "blue";
  button_label?: string;
  button_link?: { url?: string; cached_url?: string };
};

const BG: Record<string, string> = {
  navy: "bg-[#345789]",
  green: "bg-[#82a969]",
  orange: "bg-orange",
  blue: "bg-[#4c7fc8]",
};

const CYCLE = ["navy", "green", "orange", "blue"] as const;

export default function SupportCard({
  blok,
  index = 0,
}: {
  blok: SupportCardBlok;
  index?: number;
}) {
  const autoColor = CYCLE[index % CYCLE.length];
  const tone = blok.card_color && BG[blok.card_color] ? blok.card_color : autoColor;

  const buttonHref =
    blok.button_link?.url || blok.button_link?.cached_url || undefined;

  return (
    <article
      {...storyblokEditable(blok as SbBlokData)}
      className={`flex h-[310px] w-[min(100vw-3rem,406px)] shrink-0 flex-col px-7 pb-7 pt-5 text-white shadow-sm md:w-[406px] ${BG[tone]}`}
    >
      <h3 className="font-heading mb-3 text-center text-[32px] leading-[32px] tracking-[0.01em] text-white">
        {blok.title}
      </h3>

      <div className="max-w-[334px] text-[20px] font-normal leading-[30px] tracking-[0.01em] text-white">
        {blok.schedule ? <p className="mb-1 font-semibold">{blok.schedule}</p> : null}
        {blok.body ? <p className="whitespace-pre-wrap">{blok.body}</p> : null}
      </div>

      {blok.button_label ? (
        <div className="mt-auto pt-4">
          <a
            href={buttonHref || "#"}
            className="font-heading inline-flex h-[40px] items-center justify-center bg-blue px-5 py-[10px] text-center text-[14px] leading-[24px] tracking-[0.01em] text-white transition hover:brightness-110"
          >
            {blok.button_label}
          </a>
        </div>
      ) : null}
    </article>
  );
}
