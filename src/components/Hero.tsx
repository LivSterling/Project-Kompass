import { storyblokEditable } from "@storyblok/react/rsc";
import { FIGMA_DOTTED_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

interface HeroProps {
  blok: {
    headline: string;
    subheadline: string;
    button_text: string;
    button_link: string;
    background_image: {
      filename: string;
      alt?: string;
    };
    image_alt: string;
  };
}

export default function Hero({ blok }: HeroProps) {
  const headlineDisplay = blok.headline?.replace(/\.\s+/g, ".\n").trim() ?? "";

  return (
    <section {...storyblokEditable(blok)} className="relative min-h-[min(100vh,1024px)] overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0">
        <img src={blok.background_image.filename} alt={blok.image_alt} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 115% at 78% 45%, rgba(37,43,66,0.12) 0%, rgba(37,43,66,0.55) 45%, rgba(37,43,66,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[min(100vh,1024px)] items-center pb-24">
        <div className="section-shell w-full px-4 md:px-6">
          <div className="max-w-[720px]">
            <img
              src="/img/logo compass.png"
              alt="Project Kompass"
              className="mb-6 h-[72px] w-auto object-contain md:h-[96px] md:w-[117px]"
            />
            <h1 className="font-heading text-[clamp(2.75rem,6.5vw,4.58rem)] leading-[1.18] tracking-[0.015em] text-white whitespace-pre-line">
              {headlineDisplay}
            </h1>

            <a
              href={blok.button_link}
              className="font-heading mt-10 inline-flex h-[51px] min-w-[168px] items-center justify-center bg-blue px-5 text-xl leading-7 tracking-wide text-black transition-colors hover:bg-blue/90"
            >
              {blok.button_text}
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-[4%] right-[1%] z-[1] flex h-[min(52vw,420px)] w-[min(55vw,480px)] items-center justify-center opacity-50 md:bottom-[6%] md:right-[3%]"
        aria-hidden
      >
        <img
          src={FIGMA_DOTTED_LINE}
          alt=""
          className="max-h-full max-w-full object-contain"
          style={{ transform: "rotate(113deg)" }}
        />
      </div>
      <img
        src={FIGMA_MAP_X}
        alt=""
        className="pointer-events-none absolute bottom-[14%] right-[8%] z-[1] h-16 w-16 opacity-40 object-contain md:bottom-[16%] md:right-[10%] md:h-20 md:w-20"
        aria-hidden
      />
    </section>
  );
}
