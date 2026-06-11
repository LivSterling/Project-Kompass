"use client";

import { useLayoutEffect, useRef } from "react";
import { storyblokEditable, type SbBlokData } from "@storyblok/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import SupportCard, { type SupportCardBlok } from "@/components/community-center/SupportCard";

gsap.registerPlugin(ScrollTrigger);

interface CommunitySupportsProps {
  blok: {
    headline?: string;
    subheadline?: string;
    cards?: SupportCardBlok[];
    /** Storyblok sometimes names nested blocks fields `body`. */
    body?: SupportCardBlok[];
    _uid: string;
  };
}

export default function CommunitySupports({ blok }: CommunitySupportsProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = blok.cards?.length ? blok.cards : blok.body ?? [];

  useLayoutEffect(() => {
    const pinEl = pinRef.current;
    const track = trackRef.current;
    if (!pinEl || !track || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const getEndX = () => {
        const overflow = track.scrollWidth - pinEl.clientWidth;
        return overflow > 0 ? -overflow : 0;
      };

      /** First card centered in viewport, then scrub scrolls track left. */
      const getStartX = () => {
        gsap.set(track, { x: 0 });
        const first = track.children[0] as HTMLElement | undefined;
        if (!first) return 0;
        const pinRect = pinEl.getBoundingClientRect();
        const cardRect = first.getBoundingClientRect();
        const pinCenter = pinRect.left + pinRect.width / 2;
        const cardCenter = cardRect.left + cardRect.width / 2;
        return pinCenter - cardCenter;
      };

      gsap.fromTo(
        track,
        { x: getStartX },
        {
          x: getEndX,
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: () => {
              const travel = Math.abs(getEndX() - getStartX());
              return `+=${Math.max(travel + 320, pinEl.clientHeight * 2)}`;
            },
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, pinEl);

    return () => ctx.revert();
  }, [cards.length]);

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip"
    >
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-6 md:px-6 md:pb-10">
        <h2 className="font-heading mx-auto max-w-[1050px] text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange uppercase">
          {blok.headline || "How the PKCC Supports Our Community"}
        </h2>
        <p className="font-heading mx-auto mt-6 max-w-[1050px] text-center text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.1] tracking-[0.01em] text-blue md:mt-8">
          {blok.subheadline ||
            "The PKCC brings together essential services, shared spaces, and partner supports to strengthen our community."}
        </p>
      </div>

      <div
        ref={pinRef}
        className="relative flex min-h-[min(100dvh,920px)] w-full flex-col justify-center overflow-hidden pb-12 md:pb-16"
      >
        <div className="w-full overflow-hidden px-0">
          {cards.length === 0 ? (
            <p className="px-6 text-center text-white/60 md:px-10">
              Add support cards (nested blocks) in Storyblok — use six to seven for the designed layout.
            </p>
          ) : (
            <div
              ref={trackRef}
              className="flex w-max flex-row items-stretch gap-[clamp(1rem,3vw,3.375rem)] pl-6 pr-[min(40vw,520px)] will-change-transform md:pl-10"
            >
              {cards.map((card, i) => (
                <SupportCard key={card._uid} blok={card} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
