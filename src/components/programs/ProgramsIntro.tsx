import { storyblokEditable } from "@storyblok/react/rsc";

interface ProgramsIntroProps {
  blok: {
    body?: string;
    button_label?: string;
    button_link?: { url?: string; cached_url?: string };
    image?: { filename: string; alt?: string };
    _uid: string;
  };
}

const DEFAULT_BODY =
  "Through safe transitional housing and the Project Kompass Community Center, we provide adaptable, person-centered support that responds to real-time needs. By walking alongside individuals and families, and in partnership with trusted community organizations, we address immediate challenges such as housing instability, food insecurity, and access to essential resources, while building pathways toward long-term stability, dignity, and independence.";

export default function ProgramsIntro({ blok }: ProgramsIntroProps) {
  const label = blok.button_label || "Contact us";
  const href =
    blok.button_link?.url || blok.button_link?.cached_url || "/contact";

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
            className="font-heading inline-flex h-[51px] w-[222px] items-center justify-center bg-blue px-5 py-[10px] text-center text-[20px] leading-[28px] tracking-[0.01em] text-black transition hover:brightness-105"
          >
            {label}
          </a>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[963px] md:mt-16">
          {blok.image?.filename ? (
            <div className="relative aspect-[963/450] w-full overflow-hidden">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[963/450] w-full items-center justify-center bg-white/10 text-sm font-medium text-white/50">
              Add intro photo in Storyblok
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
