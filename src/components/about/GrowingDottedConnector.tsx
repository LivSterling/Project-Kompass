"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Figma segment height ~156px; vertical orange dotted rule between sections. */
const LINE_HEIGHT_PX = 156;

export default function GrowingDottedConnector({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const line = root.querySelector<HTMLElement>("[data-dotted-line]");
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            end: "top 45%",
            scrub: 0.6,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`flex w-full justify-center py-1 md:py-2 ${className ?? ""}`}
      aria-hidden
    >
      <div className="flex h-[156px] w-0 items-start justify-center overflow-visible">
        <div
          data-dotted-line
          className="w-0 shrink-0"
          style={{ height: LINE_HEIGHT_PX }}
        >
          <div
            className="h-full w-[5px] rounded-full"
            style={{
              marginLeft: "-2.5px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, #fc8f4c 0px, #fc8f4c 6px, transparent 6px, transparent 14px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
