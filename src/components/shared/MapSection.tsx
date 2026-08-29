import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { HeroTitleLines, type HeroLineBlok } from "@/components/shared/HeroTitleLines";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import { FIGMA_MAP_X } from "@/lib/figmaAssets";

type ButtonColor = "green" | "blue" | "orange" | "navy";
type Theme = "orange" | "navy" | "green" | "blue";

const BUTTON_BG: Record<ButtonColor, string> = {
  green: "bg-green",
  blue: "bg-blue",
  orange: "bg-orange",
  navy: "bg-navy",
};

const DEFAULT_BACKGROUND = "/img/figma/brown-paper-map-clean.png";
const DEFAULT_LOGO = "/img/logo compass.png";

interface MapSectionProps {
  blok: {
    /** Defaults to the brown-paper map texture. Swap for any other full-bleed background. */
    background_image?: { filename: string; alt?: string };
    /** Small compass/logo mark on the side. Defaults to on. */
    show_logo?: boolean;
    logo_image?: { filename: string; alt?: string };
    /** Big title made of `hero_line` blocks — same colored-highlight-bar segments as `page_hero`. */
    lines?: HeroLineBlok[];
    body?: string;
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    button_color?: ButtonColor;
    content_align?: "center" | "left";
    /** Connector color leading out of this section (and the map "X" mark). Defaults to `blue`. */
    theme?: Theme;
    /** Growing dotted connector + map "X" mark after the map. Defaults to **on** — this block is
     * typically the last section before the footer. */
    show_bottom_connector?: boolean;
    _uid: string;
  };
}

export default function MapSection({ blok }: MapSectionProps) {
  const bgSrc = blok.background_image?.filename || DEFAULT_BACKGROUND;
  const showLogo = blok.show_logo !== false;
  const logoSrc = blok.logo_image?.filename || DEFAULT_LOGO;
  const lines = blok.lines ?? [];
  const isLeft = blok.content_align === "left";
  const theme: Theme = blok.theme && ["orange", "navy", "green", "blue"].includes(blok.theme) ? blok.theme : "blue";
  const showBottomConnector = blok.show_bottom_connector !== false;

  const hasButton = Boolean(blok.button_label);
  const buttonHref = blok.button_link?.url || blok.button_link?.cached_url || "#";
  const buttonColor: ButtonColor =
    blok.button_color && BUTTON_BG[blok.button_color] ? blok.button_color : "green";

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip py-10 md:py-14">
      <div className="section-shell px-4 md:px-6">
        {/*
          The paper texture's ragged, torn edges are baked into the PNG itself, and the PNG's
          pixel dimensions (1080x675) are used as this box's locked aspect ratio. Because the box
          shape always exactly matches the image shape, the full image — every torn edge — always
          renders edge-to-edge with zero cropping and zero letterboxing, at any screen width.

          `@container` marks this box as a container-query context so the title, body, logo and
          button below can be sized in `cqw` (% of *this box's own* width) instead of the
          viewport's. That guarantees the content scales down together with the paper and can
          never spill past its bounds, even on narrow phones where the box itself gets short.
        */}
        <div className="relative mx-auto aspect-1080/675 w-full max-w-270 overflow-hidden @container">
          <img src={bgSrc} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 flex items-center gap-[4cqw] px-[8cqw]">
            {showLogo ? (
              <div className="flex shrink-0 items-center justify-center">
                <img
                  src={logoSrc}
                  alt={blok.logo_image?.alt || ""}
                  className="h-[22cqw] w-[22cqw] object-contain"
                />
              </div>
            ) : null}

            <div
              className={`flex min-w-0 flex-1 flex-col gap-[2.5cqw] ${isLeft ? "items-start text-left" : "items-center text-center"}`}
            >
              {lines.length ? (
                <h2 className="font-heading text-[clamp(0.8rem,5.3cqw,3.62rem)] leading-[1.15] tracking-[0.01em] text-black">
                  <HeroTitleLines
                    lines={lines}
                    plainTextClassName="text-black"
                    lineClassName="mb-[1.5cqw] last:mb-0"
                  />
                </h2>
              ) : null}

              {blok.body ? (
                <p className="max-w-full text-[clamp(0.5rem,1.5cqw,1rem)] font-medium leading-[1.35] tracking-[0.01em] whitespace-pre-wrap text-black">
                  {blok.body}
                </p>
              ) : null}

              {hasButton ? (
                <a
                  href={buttonHref}
                  className={`font-heading inline-flex h-[clamp(18px,7cqw,51px)] items-center justify-center ${BUTTON_BG[buttonColor]} px-[3.5cqw] text-center text-[clamp(0.55rem,2cqw,20px)] leading-none tracking-[0.01em] text-black transition hover:brightness-105`}
                >
                  {blok.button_label}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {showBottomConnector ? (
        <>
          <GrowingDottedConnector variant={theme} />
          <div className="flex justify-center pb-2 md:pb-4">
            <img src={FIGMA_MAP_X} alt="" className="h-14 w-11 opacity-40" aria-hidden />
          </div>
        </>
      ) : null}
    </section>
  );
}
