import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";

type ButtonColor = "green" | "blue" | "orange" | "navy";
type Theme = "orange" | "navy" | "green" | "blue";

const BUTTON_BG: Record<ButtonColor, string> = {
  green: "bg-green",
  blue: "bg-blue",
  orange: "bg-orange",
  navy: "bg-navy",
};

const TITLE_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

interface IntroSectionProps {
  blok: {
    /** Small heading above the body copy, e.g. "What is the Jump Start Scholarship?". */
    title?: string;
    /** Color for `title`. Defaults to `blue`. */
    theme?: Theme;
    body?: string;
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    button_color?: ButtonColor;
    image?: { filename: string; alt?: string };
    /** Aspect ratio for the image frame, e.g. `967/533` (default) or `963/450`. */
    image_ratio?: string;
    _uid: string;
  };
}

export default function IntroSection({ blok }: IntroSectionProps) {
  const href = blok.button_link?.url || blok.button_link?.cached_url || "/contact";
  const buttonColor =
    blok.button_color && BUTTON_BG[blok.button_color] ? blok.button_color : "green";
  const ratio = blok.image_ratio?.trim() || "967/533";
  const hasButton = Boolean(blok.button_label);
  const theme: Theme = blok.theme && TITLE_COLOR[blok.theme] ? blok.theme : "blue";

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip pt-12 pb-8 md:pt-16 md:pb-12"
    >
      <div className="section-shell px-4 md:px-6">
        {blok.title ? (
          <p
            className={`font-heading mb-6 text-center text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.4] tracking-[0.01em] md:mb-8 ${TITLE_COLOR[theme]}`}
          >
            {blok.title}
          </p>
        ) : null}

        {blok.body ? (
          <p className="mx-auto max-w-[864px] text-center text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white">
            {blok.body}
          </p>
        ) : null}

        {hasButton ? (
          <div className="mt-10 flex justify-center md:mt-12">
            <a
              href={href}
              className={`font-heading inline-flex h-[51px] min-w-[222px] items-center justify-center ${BUTTON_BG[buttonColor]} px-6 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105`}
            >
              {blok.button_label}
            </a>
          </div>
        ) : null}

        {blok.image?.filename ? (
          <div className="mx-auto mt-12 w-full max-w-[967px] md:mt-16">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: ratio.replace("/", " / ") }}
            >
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
