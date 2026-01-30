import {storyblokEditable } from "@storyblok/react/rsc";

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
    return (
        <section {...storyblokEditable(blok)} className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={blok.background_image.filename} alt={blok.image_alt} className="w-full h-full object-cover" />
                {/* Gradient overlay - radial gradient from transparent to navy-dark at 40% */}
                <div className="absolute inset-0 bg-radial from-transparent via-transparent via-40% to-navy-dark/60"></div>
            </div>
            

            {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* Split headline by periods to create the stacked effect */}
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-8">
              {blok.headline.split('.').map((line, index) => (
                line.trim() && (
                  <span key={index} className="block">
                    {line.trim()}.
                  </span>
                )
              ))}
            </h1>
            
            <a 
              href={blok.button_link}
              className="inline-block bg-blue hover:bg-navy text-white px-8 py-3 text-lg font-semibold transition-colors"
            >
              {blok.button_text}
            </a>
          </div>
        </div>
      </div>

      {/* Dotted path decoration - positioned at bottom right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
        <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
          <path
            d="M 10 190 Q 50 150 100 120 T 190 10"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </section>
  );
}