import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

type Theme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

const HEADLINE_CASE: Record<string, string> = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  normal: "",
};

interface ContentSectionProps {
  blok: {
    headline?: string;
    theme?: Theme;
    /** `uppercase` (default) · `capitalize` · `normal`. */
    headline_case?: "uppercase" | "capitalize" | "normal";
    body?: string;
    body_align?: "center" | "left";
    image?: { filename: string; alt?: string };
    /** Where the image sits relative to the body. */
    image_position?: "none" | "above" | "below";
    _uid: string;
  };
}

export default function ContentSection({ blok }: ContentSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "orange";
  const headlineCase = HEADLINE_CASE[blok.headline_case ?? "uppercase"] ?? "uppercase";
  const align = blok.body_align === "left" ? "text-left" : "text-center";
  const imagePosition = blok.image?.filename ? blok.image_position ?? "above" : "none";

  const imageEl = blok.image?.filename ? (
    <div className="relative mx-auto aspect-[864/521] w-full max-w-[864px] overflow-hidden">
      <img
        src={blok.image.filename}
        alt={blok.image.alt || ""}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  ) : null;

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        {blok.headline ? (
          <h2
            className={`font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] ${HEADING_COLOR[theme]} ${headlineCase}`}
          >
            {blok.headline}
          </h2>
        ) : null}

        {imagePosition === "above" ? <div className="mt-10 md:mt-14">{imageEl}</div> : null}

        {blok.body ? (
          <p
            className={`mx-auto mt-10 max-w-[864px] text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white md:mt-12 ${align}`}
          >
            {blok.body}
          </p>
        ) : null}

        {imagePosition === "below" ? <div className="mt-10 md:mt-14">{imageEl}</div> : null}
      </div>
    </section>
  );
}
