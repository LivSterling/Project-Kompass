"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePinnedHorizontalScroll(
  pinRef: RefObject<HTMLDivElement | null>,
  trackRef: RefObject<HTMLDivElement | null>,
  cardCount: number,
) {
  useLayoutEffect(() => {
    const pinEl = pinRef.current;
    const track = trackRef.current;
    if (!pinEl || !track || cardCount === 0) return;

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
  }, [pinRef, trackRef, cardCount]);
}
