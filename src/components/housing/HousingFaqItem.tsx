"use client";

import { useState } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";

export type HousingFaqItemBlok = {
  _uid: string;
  component?: string;
  question?: string;
  answer?: string;
  accent_color?: "green" | "blue";
  default_open?: boolean;
};

const ACCENT_BG: Record<string, string> = {
  green: "bg-green",
  blue: "bg-blue",
};

function CircleArrow({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[34px] w-[34px] shrink-0 md:h-[42px] md:w-[42px]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10.5" />
      <path
        d={open ? "M8 11l4 4 4-4" : "M11 8l4 4-4 4"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HousingFaqItem({ blok }: { blok: HousingFaqItemBlok }) {
  const [open, setOpen] = useState<boolean>(blok.default_open === true);
  const accent = blok.accent_color === "blue" ? "blue" : "green";

  return (
    <div
      {...storyblokEditable(blok as SbBlokData)}
      className={`overflow-hidden transition-colors ${
        open ? ACCENT_BG[accent] : "bg-[#151825]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center gap-4 px-6 py-4 text-left transition-colors ${
          open ? "text-black" : "text-white"
        }`}
      >
        <span className="font-heading flex-1 text-center text-[16px] leading-[24px] tracking-[0.01em]">
          {blok.question}
        </span>
        <span className={open ? "text-black" : "text-white"}>
          <CircleArrow open={open} />
        </span>
      </button>

      {open && blok.answer ? (
        <div className="-mt-1 px-6 pb-5">
          <p className="max-w-[567px] text-[16px] font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-[#151825]">
            {blok.answer}
          </p>
        </div>
      ) : null}
    </div>
  );
}
