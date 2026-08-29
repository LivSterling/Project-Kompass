import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

type Theme = "orange" | "navy" | "green" | "blue";
type ButtonColor = "green" | "blue" | "orange" | "navy";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

const BUTTON_BG: Record<ButtonColor, string> = {
  green: "bg-green",
  blue: "bg-blue",
  orange: "bg-orange",
  navy: "bg-navy",
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
    /** Where the image sits relative to the body. `right` = two-column split (text left, image right). */
    image_position?: "none" | "above" | "below" | "right";
    /** Optional CTA under the body copy. Button only renders when `button_label` is set. */
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    button_color?: ButtonColor;
    _uid: string;
  };
}

export default function ContentSection({ blok }: ContentSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "orange";
  const headlineCase = HEADLINE_CASE[blok.headline_case ?? "uppercase"] ?? "uppercase";
  const align = blok.body_align === "left" ? "text-left" : "text-center";
  const imagePosition = blok.image?.filename ? blok.image_position ?? "above" : "none";
  const isSplit = imagePosition === "right";

  const hasButton = Boolean(blok.button_label);
  const buttonHref = blok.button_link?.url || blok.button_link?.cached_url || "#";
  const buttonColor: ButtonColor =
    blok.button_color && BUTTON_BG[blok.button_color] ? blok.button_color : "green";

  const imageEl = blok.image?.filename ? (
    <div
      className={`relative w-full overflow-hidden ${
        isSplit ? "aspect-[509/501]" : "mx-auto aspect-[864/521] max-w-[864px]"
      }`}
    >
      <img
        src={blok.image.filename}
        alt={blok.image.alt || ""}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  ) : null;

  const bodyEl = blok.body ? (
    <p
      className={`text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white ${
        isSplit ? "max-w-[510px]" : `mx-auto mt-10 max-w-[864px] md:mt-12 ${align}`
      }`}
    >
      {blok.body}
    </p>
  ) : null;

  const buttonEl = hasButton ? (
    <a
      href={buttonHref}
      className={`font-heading inline-flex h-[51px] min-w-[192px] items-center justify-center ${BUTTON_BG[buttonColor]} px-6 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105`}
    >
      {blok.button_label}
    </a>
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

        {isSplit ? (
          <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 md:mt-16 md:grid-cols-[minmax(0,510px)_minmax(0,509px)] md:items-start md:justify-between md:gap-12">
            <div className="flex flex-col items-start gap-8">
              {bodyEl}
              {buttonEl}
            </div>
            {imageEl}
          </div>
        ) : (
          <>
            {imagePosition === "above" ? <div className="mt-10 md:mt-14">{imageEl}</div> : null}
            {bodyEl}
            {buttonEl ? <div className="mt-10 flex justify-center md:mt-12">{buttonEl}</div> : null}
            {imagePosition === "below" ? <div className="mt-10 md:mt-14">{imageEl}</div> : null}
          </>
        )}
      </div>
    </section>
  );
}
