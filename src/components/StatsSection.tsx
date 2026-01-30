import { storyblokEditable } from "@storyblok/react/rsc";

interface StatsSectionProps {
  blok: {
    headline: string;
    chart_image_1?: {
      filename: string;
      alt?: string;
    };
    chart_image_2?: {
      filename: string;
      alt?: string;
    };
    _uid: string;
  };
}

export default function StatsSection({ blok }: StatsSectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-orange mb-12">
          {blok.headline}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {blok.chart_image_1 && (
            <div className="p-6">
              <img 
                src={blok.chart_image_1.filename}
                alt={blok.chart_image_1.alt || "Chart"}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {blok.chart_image_2 && (
            <div className=" p-6 rounded-lg flex items-center justify-center">
              <img 
                src={blok.chart_image_2.filename}
                alt={blok.chart_image_2.alt || "Chart"}
                className="w-full max-w-xs h-auto"
              />
            </div>
          )}
        </div>

        {/* Dotted divider */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-20 border-l-2 border-dashed border-orange opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}