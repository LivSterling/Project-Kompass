import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import CommunityFaqItem, {
  type CommunityFaqItemBlok,
} from "@/components/community-center/CommunityFaqItem";

interface CommunityFaqProps {
  blok: {
    headline?: string;
    items?: CommunityFaqItemBlok[];
    body?: CommunityFaqItemBlok[];
    _uid: string;
  };
}

export default function CommunityFaq({ blok }: CommunityFaqProps) {
  const items = blok.items?.length ? blok.items : blok.body ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-10 md:px-6 md:pb-14">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange uppercase">
          {blok.headline || "FAQ"}
        </h2>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-base font-medium text-white/60">
            Add FAQ items (nested blocks) in Storyblok for this section.
          </p>
        ) : (
          <div className="mx-auto mt-12 flex max-w-[686px] flex-col gap-[5px]">
            {items.map((item) => (
              <CommunityFaqItem key={item._uid} blok={item} />
            ))}
          </div>
        )}
      </div>

      <GrowingDottedConnector />
    </section>
  );
}
