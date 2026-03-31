import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

interface AboutHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    who_heading?: string;
    line_prefix?: string;
    highlight_green?: string;
    highlight_blue?: string;
    _uid: string;
  };
}

export default function AboutHero({ blok }: AboutHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const who = blok.who_heading || "Who are we?";
  const prefix = blok.line_prefix || "We are ";
  const greenWord = blok.highlight_green || "Project";
  const blueWord = blok.highlight_blue || "Kompass";

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip pt-28 pb-16 md:pt-32 md:pb-24">
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
            <p className="font-heading text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.12] tracking-[0.01em] text-black md:text-left">
              {who}
            </p>

            <p className="font-heading mt-10 text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.12] tracking-[0.01em] text-black md:mt-12 md:text-left">
              <span className="relative inline-block">
                <span className="relative z-10 px-1">{prefix}</span>
              </span>
              <span className="relative inline-block align-baseline">
                <span className="relative z-10 box-decoration-clone bg-green px-2 py-1 text-black">
                  {greenWord}
                </span>{" "}
                <span className="relative z-10 box-decoration-clone bg-navy px-2 py-1 text-black">
                  {blueWord}
                </span>
              </span>
            </p>
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
        className="pointer-events-none absolute right-[6%] top-[32%] z-[1] hidden h-[73px] w-[59px] opacity-30 object-contain md:block"
        aria-hidden
      />
    </section>
  );
}
