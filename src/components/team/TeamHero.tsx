import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

interface TeamHeroProps {
  blok: {
    compass_image?: { filename: string; alt?: string };
    /** First word(s), plain on paper (default: Our). */
    title_prefix?: string;
    /** Word on orange bar (default: Team). */
    title_highlight?: string;
    /** Legacy: split on first space into prefix + highlight if prefix/highlight omitted. */
    title?: string;
    _uid: string;
  };
}

function heroTitleParts(blok: TeamHeroProps["blok"]) {
  const p = blok.title_prefix?.trim();
  const h = blok.title_highlight?.trim();
  if (p !== undefined || h !== undefined) {
    return { prefix: p || "Our", highlight: h || "Team" };
  }
  const t = blok.title?.trim() || "Our Team";
  const i = t.indexOf(" ");
  if (i <= 0) return { prefix: t, highlight: "" };
  return { prefix: t.slice(0, i).trim(), highlight: t.slice(i + 1).trim() };
}

export default function TeamHero({ blok }: TeamHeroProps) {
  const compassSrc = blok.compass_image?.filename || "/img/logo compass.png";
  const { prefix, highlight } = heroTitleParts(blok);

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip pt-28 pb-12 md:pt-32 md:pb-16">
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
            <h1 className="font-heading text-center text-[clamp(2.25rem,5.2vw,3.62rem)] leading-[1.12] tracking-[0.01em] text-black md:text-left">
              <span className="relative inline-block">
                <span className="relative z-10 px-1">{prefix}</span>
              </span>{" "}
              {highlight ? (
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 box-decoration-clone bg-green px-2 py-1 text-black">
                    {highlight}
                  </span>
                </span>
              ) : null}
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
        className="pointer-events-none absolute right-[6%] top-[32%] z-[1] hidden h-[73px] w-[59px] object-contain opacity-30 md:block"
        aria-hidden
      />
    </section>
  );
}
