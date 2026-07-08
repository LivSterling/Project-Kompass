import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";

type ButtonColor = "green" | "blue" | "orange" | "navy";

const BUTTON_BG: Record<ButtonColor, string> = {
  green: "bg-green",
  blue: "bg-blue",
  orange: "bg-orange",
  navy: "bg-navy",
};

interface IntroSectionProps {
  blok: {
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

  return (
    <section
      {...storyblokEditable(blok as SbBlokData)}
      className="relative w-full overflow-x-clip pt-12 pb-8 md:pt-16 md:pb-12"
    >
      <div className="section-shell px-4 md:px-6">
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
