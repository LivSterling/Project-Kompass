import { storyblokEditable } from "@storyblok/react/rsc";

interface TextSectionProps {
    blok: {
        headline: string;
        body: string;
        backgrond_color: 'navy' | 'tan' | 'white';
        background_image: {
            filename: string;
            alt?: string;
        };
        image: {
            filename: string;
            alt?: string;
        };

        _uid:string;
    };
}     
  export default function TextSection({ blok }: TextSectionProps) {
    // Map background colors
  const bgColorMap = {
    navy: 'bg-navy text-white',
    tan: 'bg-tan text-navy',
    white: 'bg-white text-navy',
};

return (
    <section {...storyblokEditable(blok)} 
    className={`py-20 `}
  >
    <div className={`container mx-auto px-6${bgColorMap[blok.backgrond_color]} bg-cover bg-center bg-no-repeat`}
    style={{
      backgroundImage: blok.background_image?.filename 
        ? `url(${blok.background_image.filename})` 
        : undefined,
    }}>
       <div className="max-w-4xl ">
        <h2 className="text-4xl font-bold mb-6  md:text-5xl leading-tight">{blok.headline}</h2>
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
            {blok.body}
        </p>
       </div>
    </div>

    {/* Dotted path decoration - positioned at bottom right */}
    <div className="relative mt-12">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-20 border-l-2 border-dashed opacity-30"></div>
        </div>
      </div>
    </section>
)
}
