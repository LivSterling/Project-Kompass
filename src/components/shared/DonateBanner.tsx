import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import { FIGMA_MAP_X } from "@/lib/figmaAssets";

type Theme = "orange" | "navy" | "green" | "blue";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

interface DonateBannerProps {
  blok: {
    headline?: string;
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    background_image?: { filename: string; alt?: string };
    theme?: Theme;
    show_bottom_connector?: boolean;
    _uid: string;
  };
}

export default function DonateBanner({ blok }: DonateBannerProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "green";
  const href = blok.button_link?.url || blok.button_link?.cached_url || "/donate";
  const headline =
    blok.headline ||
    "You too can make a difference in helping to support our area youth and young adults!";
  const label = blok.button_label || "Donate Today";

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-10 md:px-6 md:pb-14">
        <div className="relative mx-auto w-full max-w-[1048px] overflow-hidden">
          {blok.background_image?.filename ? (
            <>
              <img
                src={blok.background_image.filename}
                alt={blok.background_image.alt || ""}
                className="aspect-[1048/518] w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(37,43,66,0.35) 0%, rgba(37,43,66,0.55) 100%)",
                }}
                aria-hidden
              />
            </>
          ) : (
            <div
              className="flex aspect-[1048/518] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50"
              aria-hidden
            >
              Add background photo in Storyblok
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-center">
            <p className="font-heading max-w-[900px] text-[clamp(1.25rem,2.4vw,1.5rem)] leading-[1.35] tracking-[0.01em] text-white">
              {headline}
            </p>
            <a
              href={href}
              className="font-heading mt-8 inline-flex h-[51px] min-w-[164px] items-center justify-center bg-blue px-6 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105"
            >
              {label}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center md:mt-10">
        <img src={FIGMA_MAP_X} alt="" className="h-14 w-11 opacity-40" aria-hidden />
      </div>

      {blok.show_bottom_connector !== false ? (
        <GrowingDottedConnector variant={theme} />
      ) : null}
    </section>
  );
}
