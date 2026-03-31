import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

interface AboutMissionSectionProps {
  blok: {
    headline?: string;
    body: string;
    _uid: string;
  };
}

export default function AboutMissionSection({ blok }: AboutMissionSectionProps) {
  const title = blok.headline || "OUR MISSION";

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange uppercase">
          {title}
        </h2>
        <p className="mx-auto mt-10 max-w-[864px] text-center text-base font-medium leading-[26px] tracking-[0.01em] text-white md:mt-12">
          {blok.body}
        </p>
      </div>
    </section>
  );
}
