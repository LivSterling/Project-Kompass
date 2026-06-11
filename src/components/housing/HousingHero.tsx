import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

const BAR_BG: Record<string, string> = {
  green: "bg-green",
  blue: "bg-blue",
  navy: "bg-navy",
  orange: "bg-orange",
};

interface HousingHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    title_line1?: string;
    title_line2?: string;
    line1_color?: "green" | "blue" | "navy" | "orange";
    line2_color?: "green" | "blue" | "navy" | "orange";
    _uid: string;
  };
}

export default function HousingHero({ blok }: HousingHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const line1 = blok.title_line1 || "Transitional Housing.";
  const line2 = blok.title_line2 || "Enduring Support.";
  const bar1 = BAR_BG[blok.line1_color || "green"] ?? BAR_BG.green;
  const bar2 = BAR_BG[blok.line2_color || "blue"] ?? BAR_BG.blue;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full overflow-x-clip pt-28 pb-12 md:pt-32 md:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BROWN_PAPER})` }}
        aria-hidden
      />

      <div className="section-shell relative z-10 px-4 md:px-6">
        <div className="flex max-w-[900px] flex-col items-center gap-8 md:items-start md:gap-10">
          <div className="flex justify-center md:justify-start">
            <img
              src={compassSrc}
              alt={blok.compass_image?.alt || ""}
              className="h-[72px] w-auto object-contain md:h-[119px] md:w-[117px]"
            />
          </div>

          <div className="relative w-full">
            <h1 className="font-heading text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.4] tracking-[0.01em] text-black md:text-left">
              <span className="relative inline-block">
                <span className={`relative z-10 box-decoration-clone ${bar1} px-2 py-1 text-black`}>
                  {line1}
                </span>
              </span>
              <br />
              <span className="relative mt-2 inline-block">
                <span className={`relative z-10 box-decoration-clone ${bar2} px-2 py-1 text-black`}>
                  {line2}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-[18%] right-[-8%] z-[1] hidden h-[min(52vw,520px)] w-[min(62vw,610px)] opacity-30 md:block"
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
    </section>
  );
}
