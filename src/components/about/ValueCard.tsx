"use client";

import { storyblokEditable, type SbBlokData } from "@storyblok/react";

export type ValueCardBlok = {
  _uid: string;
  component?: string;
  title: string;
  body: string;
  /** Storyblok single-option: navy | green | orange */
  card_color?: "navy" | "green" | "orange" | "blue";
};

const BG: Record<string, string> = {
  navy: "bg-[#345789]",
  green: "bg-[#82a969]",
  orange: "bg-orange",
  blue: "bg-[#4c7fc8]",
};

export default function ValueCard({ blok }: { blok: ValueCardBlok }) {
  const tone = blok.card_color && BG[blok.card_color] ? blok.card_color : "navy";
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
