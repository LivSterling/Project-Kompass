"use client";

import { storyblokEditable, type SbBlokData } from "@storyblok/react";

export type ScrollCardColor = "navy" | "green" | "orange" | "blue";
export type ScrollCardStyle = "values" | "services";

export type ScrollCardBlok = {
  _uid: string;
  component?: string;
  title?: string;
  body?: string;
  schedule?: string;
  card_color?: ScrollCardColor;
  button_label?: string;
  button_link?: { url?: string; cached_url?: string };
};

const BG: Record<ScrollCardColor, string> = {
  navy: "bg-[#345789]",
  green: "bg-[#82a969]",
  orange: "bg-orange",
  blue: "bg-[#4c7fc8]",
};

const COLOR_CYCLE: ScrollCardColor[] = ["navy", "green", "orange", "blue"];

export default function ScrollCard({
  blok,
  index = 0,
  cardStyle = "services",
  autoColor = true,
  defaultColor = "navy",
}: {
  blok: ScrollCardBlok;
  index?: number;
  cardStyle?: ScrollCardStyle;
  autoColor?: boolean;
  defaultColor?: ScrollCardColor;
}) {
  const autoCycleColor = COLOR_CYCLE[index % COLOR_CYCLE.length];
  const fallbackColor = autoColor ? autoCycleColor : defaultColor;
  const tone =
    blok.card_color && BG[blok.card_color] ? blok.card_color : fallbackColor;

  const buttonHref =
    blok.button_link?.url || blok.button_link?.cached_url || undefined;

  if (cardStyle === "values") {
    return (
      <article
        {...storyblokEditable(blok as SbBlokData)}
        className={`flex h-[310px] w-[min(100vw-3rem,406px)] shrink-0 flex-col px-7 pb-8 pt-10 text-white shadow-sm md:w-[406px] ${BG[tone]}`}
      >
        <h3 className="font-heading -mt-2 mb-5 text-center text-[35px] leading-none tracking-[0.01em] text-white">
          {blok.title}
        </h3>
        <p className="max-w-[334px] text-base font-medium leading-[26px] tracking-[0.01em] text-white">
          {blok.body}
        </p>
      </article>
    );
  }

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
