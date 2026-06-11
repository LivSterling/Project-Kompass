import { storyblokEditable } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";

interface CommunityGuidelinesProps {
  blok: {
    headline?: string;
    body?: string;
    /** Newline-separated list; each line becomes a bullet. */
    bullets?: string;
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

const DEFAULT_BULLETS = [
  "We are inclusive of all individuals, regardless of background or circumstance",
  "All client information and conversations are kept confidential",
  "All individuals must present as sober to enter and receive services",
  "Visitors must treat staff, partners, and others with respect",
  "The PKCC is a service-based space, not a hangout location",
  "PKCC staff may deny services if there are safety concerns for self or others",
  "The PKCC is privately operated, not a government agency",
];

export default function CommunityGuidelines({ blok }: CommunityGuidelinesProps) {
  const bullets = blok.bullets
    ? blok.bullets.split("\n").map((l) => l.trim()).filter(Boolean)
    : DEFAULT_BULLETS;

  return (
    <section {...storyblokEditable(blok)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector />
      <div className="section-shell px-4 pb-14 md:px-6 md:pb-20">
        <h2 className="font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] text-orange uppercase">
          {blok.headline || "PKCC Guidelines"}
        </h2>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_clamp(320px,34vw,508px)] md:items-start md:gap-14">
          <div className="text-[16px] font-medium leading-[26px] tracking-[0.01em] text-white">
            {blok.body ? (
              <p className="whitespace-pre-wrap">{blok.body}</p>
            ) : (
              <>
                <p className="whitespace-pre-wrap">
                  The PK Community Center was created to address growing gaps in access to food,
                  basic necessities, life-skills support, and community-based services. As needs
                  related to food insecurity, housing instability, and mental health continue to
                  rise, we recognized the importance of having a centralized, welcoming space where
                  individuals and families can access support with dignity and respect.
                </p>
                <p className="mt-6 whitespace-pre-wrap">
                  The PKCC exists to meet people <span className="font-bold">where they are</span>,
                  reduce barriers to care, and strengthen outcomes through collaboration with
                  trusted community partners. It is a place designed for support, connection, and
                  forward movement … not judgment.
                </p>
              </>
            )}

            <ul className="mt-6 list-disc space-y-1 pl-6">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {blok.image?.filename ? (
            <div className="relative aspect-[508/678] w-full overflow-hidden md:sticky md:top-28">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[508/678] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50">
              Add photo in Storyblok
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
