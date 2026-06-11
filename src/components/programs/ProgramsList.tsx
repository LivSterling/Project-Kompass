import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import ProgramAccordion, {
  type ProgramItemBlok,
} from "@/components/programs/ProgramAccordion";

interface ProgramsListProps {
  blok: {
    headline?: string;
    items?: ProgramItemBlok[];
    body?: ProgramItemBlok[];
    _uid: string;
  };
}

export default function ProgramsList({ blok }: ProgramsListProps) {
  const items = blok.items?.length ? blok.items : blok.body ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant="green" />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        <h2 className="font-heading text-center text-[clamp(2.75rem,8vw,6.2rem)] leading-[1.1] tracking-[0.01em] text-green uppercase">
          {blok.headline || "Our Programs"}
        </h2>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-base font-medium text-white/60">
            Add program blocks (nested) in Storyblok for this section.
          </p>
        ) : (
          <div className="mx-auto mt-12 flex max-w-[1046px] flex-col gap-[6px] md:mt-16">
            {items.map((item, i) => (
              <ProgramAccordion key={item._uid} blok={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
