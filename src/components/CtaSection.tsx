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
        <section {...storyblokEditable(blok)} className="relative h-96">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={blok.background_image.filename}
            alt={blok.image_alt}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {blok.headline}
            </h2>
            <a 
              href={blok.button_link}
              className="inline-block bg-orange hover:bg-orange-dark text-white px-10 py-4 rounded-md text-xl font-semibold transition-colors"
            >
              {blok.button_text}
            </a>
          </div>
        </div>
      </section>
    );
  }