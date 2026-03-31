import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

interface BlogCardProps {
  blok: {
    image: {
      filename: string;
      alt?: string;
    };
    title: string;
    link: string;
    _uid: string;
  };
  /** Layout slot to match Figma masonry (0 = large feature, 1–2 = stacked). */
  layoutIndex?: number;
}

const ACCENT_BORDER = ["border-orange", "border-blue", "border-green"] as const;

export default function BlogCard({ blok, layoutIndex = 0 }: BlogCardProps) {
  const accent = ACCENT_BORDER[layoutIndex % ACCENT_BORDER.length];
  const isFeature = layoutIndex === 0;

  return (
    <Link
      href={blok.link}
      {...storyblokEditable(blok)}
      className="group block h-full text-left transition-opacity hover:opacity-95 md:text-left"
    >
      <div
        className={
          isFeature
            ? "aspect-[489/326] w-full overflow-hidden"
            : "aspect-[406/271] w-full overflow-hidden"
        }
      >
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <div
          className={`w-0 shrink-0 self-stretch border-l-4 border-dashed ${accent} min-h-16`}
          aria-hidden
        />
        <h3
          className={`min-w-0 flex-1 text-left font-heading uppercase tracking-wide text-white ${
            isFeature
              ? "text-[clamp(1.1rem,2.2vw,1.84rem)] leading-snug"
              : "text-[clamp(0.85rem,1.4vw,1.15rem)] leading-snug"
          }`}
        >
          {blok.title}
        </h3>
      </div>
    </Link>
  );
}
