import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import HousingFaqItem, {
  type HousingFaqItemBlok,
} from "@/components/housing/HousingFaqItem";

interface HousingFaqProps {
  blok: {
    headline?: string;
    items?: HousingFaqItemBlok[];
    body?: HousingFaqItemBlok[];
    _uid: string;
  };
}

export default function HousingFaq({ blok }: HousingFaqProps) {
  const items = blok.items?.length ? blok.items : blok.body ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant="navy" />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-navy uppercase">
          {blok.headline || "FAQ"}
        </h2>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-base font-medium text-white/60">
            Add FAQ items (nested blocks) in Storyblok for this section.
          </p>
        ) : (
          <div className="mx-auto mt-12 flex max-w-[686px] flex-col gap-[5px]">
            {items.map((item) => (
              <HousingFaqItem key={item._uid} blok={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
