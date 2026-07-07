"use client";

import { useRef } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import usePinnedHorizontalScroll from "@/hooks/usePinnedHorizontalScroll";
import ScrollCard, {
  type ScrollCardBlok,
  type ScrollCardColor,
  type ScrollCardStyle,
} from "@/components/shared/ScrollCard";

type PinnedCardTheme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<PinnedCardTheme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

interface PinnedCardSectionProps {
  blok: {
    headline?: string;
    subheadline?: string;
    theme?: PinnedCardTheme;
    headline_uppercase?: boolean;
    auto_color_cards?: boolean;
    card_style?: ScrollCardStyle;
    default_card_color?: ScrollCardColor;
    cards?: ScrollCardBlok[];
    body?: ScrollCardBlok[];
    _uid: string;
  };
}

export default function PinnedCardSection({ blok }: PinnedCardSectionProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = blok.cards?.length ? blok.cards : blok.body ?? [];
  const theme: PinnedCardTheme =
    blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "orange";
  const cardStyle: ScrollCardStyle =
    blok.card_style === "values" ? "values" : "services";
  const autoColor = blok.auto_color_cards !== false && cardStyle === "services";
  const defaultColor: ScrollCardColor = blok.default_card_color ?? "navy";
  const headlineWide = Boolean(blok.subheadline || blok.headline_uppercase);

  usePinnedHorizontalScroll(pinRef, trackRef, cards.length);

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip"
    >
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-6 md:px-6 md:pb-10">
        <h2
          className={`font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] ${HEADING_COLOR[theme]} ${
            blok.headline_uppercase ? "uppercase" : ""
          } ${headlineWide ? "mx-auto max-w-[1050px]" : ""}`}
        >
          {blok.headline || "Our Values"}
        </h2>
        {blok.subheadline ? (
          <p className="font-heading mx-auto mt-6 max-w-[1050px] text-center text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.1] tracking-[0.01em] text-blue md:mt-8">
            {blok.subheadline}
          </p>
        ) : null}
      </div>

      <div
        ref={pinRef}
        className="relative flex min-h-[min(100dvh,920px)] w-full flex-col justify-center overflow-hidden pb-12 md:pb-16"
      >
        <div className="w-full overflow-hidden px-0">
          {cards.length === 0 ? (
            <p className="px-6 text-center text-white/60 md:px-10">
              Add scroll cards (nested blocks) in Storyblok for this section.
            </p>
          ) : (
            <div
              ref={trackRef}
              className="flex w-max flex-row items-stretch gap-[clamp(1rem,3vw,3.375rem)] pl-6 pr-[min(40vw,520px)] will-change-transform md:pl-10"
            >
              {cards.map((card, i) => (
                <ScrollCard
                  key={card._uid}
                  blok={card}
                  index={i}
                  cardStyle={cardStyle}
                  autoColor={autoColor}
                  defaultColor={defaultColor}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
