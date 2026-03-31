import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

interface AboutHistorySectionProps {
  blok: {
    headline?: string;
    body: string;
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

export default function AboutHistorySection({ blok }: AboutHistorySectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange capitalize">
          {blok.headline || "Our History"}
        </h2>

        {blok.image?.filename ? (
          <div className="relative mx-auto mt-10 aspect-[864/521] w-full max-w-[864px] overflow-hidden md:mt-14">
            <img
              src={blok.image.filename}
              alt={blok.image.alt || ""}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mx-auto mt-10 max-w-[870px] text-base font-medium leading-[26px] tracking-[0.01em] text-white whitespace-pre-wrap md:mt-12">
          {blok.body}
        </div>
      </div>
    </section>
  );
}
