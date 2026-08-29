import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";
import { HeroTitleLines, type HeroLineBlok, type HeroSegmentBlok } from "@/components/shared/HeroTitleLines";

export type { HeroLineBlok, HeroSegmentBlok };

const BROWN_PAPER = "/img/figma/brown-paper-hero.png";

interface PageHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    /** Small line above the title (e.g. About's "Who are we?"). */
    eyebrow?: string;
    /** Toggle the decorative dotted path + map "X" on the right (desktop). */
    show_decorations?: boolean;
    /**
     * `paper` (default): tan brown-paper texture, like every other page hero.
     * `photo`: dark navy background with a faint background photo — used by pages like
     * "Our Supporters" whose hero doesn't sit on paper.
     */
    background_style?: "paper" | "photo";
    /** Only used when `background_style` is `photo`. Rendered at 20% opacity over navy. */
    background_image?: { filename: string; alt?: string };
    lines?: HeroLineBlok[];
    _uid: string;
  };
}

export default function PageHero({ blok }: PageHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const showDecorations = blok.show_decorations !== false;
  const lines = blok.lines ?? [];
  const isPhoto = blok.background_style === "photo";
  const plainTextClassName = isPhoto ? "text-white" : "text-black";

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className={`relative w-full overflow-x-clip pt-28 pb-12 md:pt-32 md:pb-36 ${isPhoto ? "bg-navy-dark" : ""}`}
    >
      {isPhoto ? (
        blok.background_image?.filename ? (
          <img
            src={blok.background_image.filename}
            alt={blok.background_image.alt || ""}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            aria-hidden
          />
        ) : null
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${BROWN_PAPER})` }}
          aria-hidden
        />
      )}

      <div className="section-shell relative z-10 px-4 md:px-6">
        <div className="flex max-w-[940px] flex-col items-center gap-8 md:items-start md:gap-10">
          <div className="flex justify-center md:justify-start">
            <img
              src={compassSrc}
              alt={blok.compass_image?.alt || ""}
              className="h-[72px] w-auto object-contain md:h-[119px] md:w-[117px]"
            />
          </div>

          <div className="relative w-full">
            {blok.eyebrow ? (
              <p
                className={`font-heading mb-8 text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.12] tracking-[0.01em] md:mb-10 md:text-left ${plainTextClassName}`}
              >
                {blok.eyebrow}
              </p>
            ) : null}

            <h1
              className={`font-heading text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.4] tracking-[0.01em] md:text-left ${plainTextClassName}`}
            >
              <HeroTitleLines lines={lines} plainTextClassName={plainTextClassName} />
            </h1>
          </div>
        </div>
      </div>

      {showDecorations ? (
        <>
          <div
            className="pointer-events-none absolute top-[16%] right-[-8%] z-[1] hidden h-[min(52vw,520px)] w-[min(62vw,610px)] opacity-30 md:block"
            aria-hidden
          >
            <img
              src={FIGMA_DOTTED_LINE}
              alt=""
              className="h-full w-full max-w-none object-contain"
              style={{ transform: "rotate(-96deg)" }}
            />
          </div>
          <img
            src={FIGMA_MAP_X}
            alt=""
            className="pointer-events-none absolute top-[32%] right-[6%] z-[1] hidden h-[73px] w-[59px] object-contain opacity-30 md:block"
            aria-hidden
          />
        </>
      ) : null}
    </section>
  );
}
