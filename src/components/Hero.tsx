import { storyblokEditable } from "@storyblok/react/rsc";
import AnimatedDottedPath from "@/components/AnimatedDottedPath";

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
  const lines =
    blok.headline
      ?.split(".")
      .map((line) => line.trim())
      .filter(Boolean) ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative min-h-[640px] overflow-hidden pt-40 md:min-h-[740px]">
      <div className="absolute inset-0">
        <img src={blok.background_image.filename} alt={blok.image_alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,40,64,0.88)_0%,rgba(34,40,64,0.76)_32%,rgba(34,40,64,0.25)_60%,rgba(34,40,64,0.5)_100%)]"></div>
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="section-shell w-full px-4 md:px-6">
          <div className="max-w-xl">
            <img src="/img/logo compass.png" alt="Project Kompass Logo" className="w-20 h-20" />
            <h1 className="font-heading text-5xl leading-[0.92] text-white sm:text-6xl md:text-7xl">
              {lines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                  <span className="text-blue">.</span>
                </span>
              ))}
            </h1>

            <a
              href={blok.button_link}
              className="mt-8 inline-block bg-blue px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy-dark transition-colors hover:bg-blue/90"
            >
              {blok.button_text}
            </a>
          </div>
        </div>
      </div>

      <AnimatedDottedPath
        direction="up-right"
        dotCount={20}
        color="#d5d8e0"
        showX={true}
        className="pointer-events-none absolute bottom-8 right-8 h-44 w-44 opacity-80 md:bottom-12 md:right-12 md:h-52 md:w-52"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-navy-dark to-transparent" />
    </section>
  );
}