import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import { FIGMA_MAP_X } from "@/lib/figmaAssets";

interface AboutRoadSectionProps {
  blok: {
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

export default function AboutRoadSection({ blok }: AboutRoadSectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip pb-16 md:pb-24">
      <GrowingDottedConnector />
      <div className="section-shell px-4 md:px-6">
        {blok.image?.filename ? (
          <div className="relative mx-auto w-full max-w-[1045px]">
            <img
              src={blok.image.filename}
              alt={blok.image.alt || "The road we've traveled"}
              className="h-auto w-full object-contain"
            />
          </div>
        ) : (
          <div className="mx-auto flex min-h-[200px] max-w-[1045px] items-center justify-center rounded border border-white/20 text-white/50">
            Add infographic image in Storyblok
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center md:mt-14">
        <img src={FIGMA_MAP_X} alt="" className="h-14 w-11 opacity-40" aria-hidden />
      </div>
    </section>
  );
}
