import { storyblokEditable } from "@storyblok/react/rsc";

interface CtaSectionProps {
    blok: {
        headline: string;
        button_text: string;
        button_link: string;
        background_color: 'navy' | 'tan' | 'white';
        background_image: {
            filename: string;
          };
          image_alt: string;
        _uid: string;
    };
}

export default function CtaSection({ blok }: CtaSectionProps) {
    return (
        <section {...storyblokEditable(blok)} className="relative h-[340px] md:h-[410px]">
        <div className="absolute inset-0">
          <img 
            src={blok.background_image.filename}
            alt={blok.image_alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(35,42,67,0.68),rgba(35,42,67,0.45))]"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="font-heading text-5xl leading-none md:text-7xl">
              {blok.headline}
            </h2>
            <a 
              href={blok.button_link}
              className="font-heading mt-7 inline-block bg-orange px-7 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-orange-light"
            >
              {blok.button_text}
            </a>
          </div>
        </div>
      </section>
    );
  }