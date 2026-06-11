import { storyblokEditable } from "@storyblok/react/rsc";

interface CommunityIntroProps {
  blok: {
    body?: string;
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

const DEFAULT_BODY =
  "The Project Kompass Community Center (PKCC) is a welcoming, inclusive space designed to support individuals and families during moments of need, transition, and growth. Serving men, women, children, young adults, and older adults, the PKCC provides access to food, basic necessities, life-skills education, and partner-led services—all in a respectful, judgment-free environment.";

export default function CommunityIntro({ blok }: CommunityIntroProps) {
  const label = blok.button_label || "Become a PKCC Client";
  const href = blok.button_link?.url || blok.button_link?.cached_url || "/contact";

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full overflow-x-clip pt-12 pb-8 md:pt-16 md:pb-12"
    >
      <div className="section-shell px-4 md:px-6">
        <p className="mx-auto max-w-[864px] text-center text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white">
          {blok.body || DEFAULT_BODY}
        </p>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href={href}
            className="font-heading inline-flex h-[51px] w-[264px] items-center justify-center bg-green px-5 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105"
          >
            {label}
          </a>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[967px] md:mt-16">
          {blok.image?.filename ? (
            <div className="relative aspect-[967/533] w-full overflow-hidden">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[967/533] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50">
              Add intro photo in Storyblok
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
