import { storyblokEditable, type SbBlokData } from "@storyblok/react";

export type HousingRequirementBlok = {
  _uid: string;
  component?: string;
  title?: string;
  body?: string;
  /** Overrides the auto color cycle (orange → blue → green → navy). */
  color?: "orange" | "blue" | "green" | "navy";
};

const TEXT_COLOR: Record<string, string> = {
  orange: "text-orange",
  blue: "text-blue",
  green: "text-green",
  navy: "text-navy",
};

const CYCLE = ["orange", "blue", "green", "navy"] as const;

export default function HousingRequirement({
  blok,
  index = 0,
}: {
  blok: HousingRequirementBlok;
  index?: number;
}) {
  const autoColor = CYCLE[index % CYCLE.length];
  const color = blok.color && TEXT_COLOR[blok.color] ? blok.color : autoColor;

  return (
    <li {...storyblokEditable(blok as SbBlokData)} className="list-none">
      <h3 className={`font-heading text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.2] tracking-[0.01em] ${TEXT_COLOR[color]}`}>
        <span>{index + 1}. </span>
        {blok.title}
      </h3>
      <p className="mt-1 max-w-[510px] text-[20px] font-normal leading-[30px] tracking-[0.01em] whitespace-pre-wrap text-white">
        {blok.body}
      </p>
    </li>
  );
}
