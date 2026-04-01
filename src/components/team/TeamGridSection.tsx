import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import TeamMemberCard, { type TeamMemberBlok } from "@/components/team/TeamMemberCard";

interface TeamGridSectionProps {
  blok: {
    headline?: string;
    /** When true, heading uses uppercase styling (use for STAFF). Omit or false for Board of Directors. */
    uppercase?: boolean;
    members?: TeamMemberBlok[];
    body?: TeamMemberBlok[];
    _uid: string;
  };
}

export default function TeamGridSection({ blok }: TeamGridSectionProps) {
  const members = blok.members?.length ? blok.members : blok.body ?? [];
  const headline = blok.headline?.trim() || "STAFF";
  const uppercase = blok.uppercase === true;

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant="blue" />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        <h2
          className={`font-heading text-center text-[clamp(3rem,8vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-blue ${
            uppercase ? "uppercase" : ""
          }`}
        >
          {headline}
        </h2>

        {members.length === 0 ? (
          <p className="mt-10 text-center text-base font-medium leading-[26px] text-white/70">
            Add team members (nested blocks) in Storyblok for this section.
          </p>
        ) : (
          <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-stretch lg:gap-x-19.5">
            {members.map((m) => (
              <TeamMemberCard key={m._uid} blok={m} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
