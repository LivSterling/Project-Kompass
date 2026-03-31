import { storyblokEditable } from "@storyblok/react/rsc";

interface CtaSectionProps {
  blok: {
    headline: string;
    button_text: string;
    button_link: string;
    background_color: "navy" | "tan" | "white";
    background_image: {
      filename: string;
    };
    image_alt: string;
    _uid: string;
  };
}

export default function CtaSection({ blok }: CtaSectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="relative min-h-[420px] overflow-hidden md:min-h-[560px] lg:min-h-[min(85vh,737px)]">
      <div className="absolute inset-0">
        <img src={blok.background_image.filename} alt={blok.image_alt} className="h-full w-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(35,42,67,0.5) 0%, rgba(35,42,67,0.72) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[420px] items-center justify-center px-4 py-20 text-center text-white md:min-h-[560px] lg:min-h-[min(85vh,737px)]">
        <div>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5.4rem)] uppercase leading-none tracking-wide">
            {blok.headline}
          </h2>
          <a
            href={blok.button_link}
            className="font-heading mt-10 inline-flex min-h-[68px] min-w-[280px] items-center justify-center bg-orange px-8 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-wide text-black transition-colors hover:bg-orange-light md:px-10"
          >
            {blok.button_text}
          </a>
        </div>
      </div>
    </section>
  );
}
