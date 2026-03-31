import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

const BROWN_PAPER = "/img/figma/brown-paper.jpg";

interface TextSectionProps {
  blok: {
    headline: string;
    body: string;
    backgrond_color: "navy" | "tan" | "white";
    background_image?: {
      filename: string;
      alt?: string;
    };
    image?: {
      filename: string;
      alt?: string;
    };
    button_text?: string;
    button_link?: string;
    _uid: string;
  };
}

export default function TextSection({ blok }: TextSectionProps) {
  const bgColorMap = {
    navy: "text-white",
    tan: "text-navy-dark",
    white: "text-navy-dark",
  } as const;
  const isNavy = blok.backgrond_color === "navy";

  const highlightStyles: Record<string, string> = {
    pathways: "bg-orange box-decoration-clone px-1",
    navigating: "bg-green box-decoration-clone px-1",
    transitions: "bg-navy box-decoration-clone px-1",
  };

  const pattern = /\b(pathways|navigating|transitions\.?)\b/gi;

  const headlineHtml =
    blok.headline?.replace(pattern, (match) => {
      const key = match.toLowerCase().replace(/\.$/, "");
      const cls = highlightStyles[key] ?? highlightStyles.transitions;
      return `<span class="${cls}">${match}</span>`;
    }) ?? "";

  const paperUrl = blok.background_image?.filename || (blok.backgrond_color === "tan" ? BROWN_PAPER : undefined);

  const decorOpacity = isNavy ? "opacity-35" : blok.backgrond_color === "white" ? "opacity-25" : "opacity-30";

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <div
        className={`relative py-14 md:py-20 ${bgColorMap[blok.backgrond_color]}`}
        style={
          paperUrl
            ? {
                backgroundImage: `url(${paperUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : isNavy
              ? { backgroundColor: "transparent" }
              : blok.backgrond_color === "white"
                ? { backgroundColor: "#ffffff" }
                : undefined
        }
      >
        <div className="section-shell relative z-10 px-4 md:px-6">
          <div className="max-w-[800px]">
            <h2
              className={`font-heading text-[clamp(2rem,4vw,3.625rem)] leading-[1.38] tracking-[0.01em] md:leading-[80px] ${
                isNavy ? "text-white" : "text-black"
              }`}
              dangerouslySetInnerHTML={{ __html: headlineHtml || blok.headline }}
            />
            <div
              className={`mt-8 max-w-[766px] space-y-4 text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap md:text-base ${
                isNavy ? "text-white/90" : "text-black"
              }`}
            >
              {blok.body}
            </div>
            <a
              href={blok.button_link || "#"}
              className={`font-heading mt-10 inline-flex h-[51px] min-w-[200px] items-center justify-center px-5 text-xl leading-7 tracking-wide transition-colors ${
                isNavy
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-blue text-black hover:bg-blue/90"
              }`}
            >
              {blok.button_text || "Submit a referral"}
            </a>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute top-2 right-0 z-[1] hidden h-[min(70vh,520px)] w-[min(45vw,340px)] md:block ${decorOpacity}`}
          aria-hidden
        >
          <img
            src={FIGMA_DOTTED_LINE}
            alt=""
            className="h-full w-full object-contain object-right-top"
            style={{ transform: "rotate(178deg)" }}
          />
        </div>
        <img
          src={FIGMA_MAP_X}
          alt=""
          className={`pointer-events-none absolute right-[8%] top-[38%] z-[1] hidden h-14 w-14 object-contain md:block ${decorOpacity}`}
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute bottom-6 left-2 z-[1] h-36 w-44 md:bottom-10 md:left-6 md:h-44 md:w-52 ${decorOpacity}`}
          aria-hidden
        >
          <img
            src={FIGMA_DOTTED_LINE}
            alt=""
            className="h-full w-full object-contain object-left-bottom"
            style={{ transform: "scaleX(-1) rotate(-8deg)" }}
          />
        </div>
      </div>
    </section>
  );
}
