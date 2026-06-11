import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import HousingRequirement, {
  type HousingRequirementBlok,
} from "@/components/housing/HousingRequirement";

interface HousingExpectationsProps {
  blok: {
    headline?: string;
    items?: HousingRequirementBlok[];
    body?: HousingRequirementBlok[];
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

export default function HousingExpectations({ blok }: HousingExpectationsProps) {
  const items = blok.items?.length ? blok.items : blok.body ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant="navy" />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        <h2 className="font-heading mx-auto max-w-[900px] text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-navy uppercase">
          {blok.headline || "Expectations & Guidelines"}
        </h2>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_clamp(320px,34vw,511px)] md:items-start md:gap-12">
          {items.length === 0 ? (
            <p className="text-center text-base font-medium text-white/60">
              Add requirement blocks in Storyblok for this section.
            </p>
          ) : (
            <ol className="flex flex-col gap-7">
              {items.map((item, i) => (
                <HousingRequirement key={item._uid} blok={item} index={i} />
              ))}
            </ol>
          )}

          {blok.image?.filename ? (
            <div className="relative aspect-[511/681] w-full overflow-hidden md:sticky md:top-28">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[511/681] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50">
              Add photo in Storyblok
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
