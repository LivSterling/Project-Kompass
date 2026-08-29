import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import GrowingDottedConnector from "@/components/about/GrowingDottedConnector";
import ListItem, { type ListItemBlok } from "@/components/shared/ListItem";
import { listItemTitle } from "@/lib/listItemFields";

type Theme = "orange" | "navy" | "green" | "blue";
type ListStyle = "accordion" | "numbered" | "bullets";

const HEADING_COLOR: Record<Theme, string> = {
  orange: "text-orange",
  navy: "text-navy",
  green: "text-green",
  blue: "text-blue",
};

const HEADLINE_CASE: Record<string, string> = {
  uppercase: "uppercase",
  capitalize: "capitalize",
  normal: "",
};

interface ListSectionProps {
  blok: {
    headline?: string;
    theme?: Theme;
    headline_case?: "uppercase" | "capitalize" | "normal";
    list_style?: ListStyle;
    /** Optional lead paragraph shown above the list. */
    intro?: string;
    /** Bullets style: newline-separated fallback when no `items` are set. */
    bullets?: string;
    /** Optional side image → switches to a two-column layout. */
    image?: { filename: string; alt?: string };
    items?: ListItemBlok[];
    body?: ListItemBlok[];
    _uid: string;
  };
}

export default function ListSection({ blok }: ListSectionProps) {
  const theme: Theme = blok.theme && HEADING_COLOR[blok.theme] ? blok.theme : "green";
  const headlineCase = HEADLINE_CASE[blok.headline_case ?? "uppercase"] ?? "uppercase";
  const listStyle: ListStyle = blok.list_style ?? "accordion";
  const items = blok.items?.length ? blok.items : blok.body ?? [];
  const hasImage = Boolean(blok.image?.filename);

  const bulletLines = blok.bullets
    ? blok.bullets.split("\n").map((l) => l.trim()).filter(Boolean)
    : items.map((it) => listItemTitle(it)).filter(Boolean);

  const listEl =
    listStyle === "accordion" ? (
      <div className={`flex flex-col gap-[6px] ${hasImage ? "" : "mx-auto max-w-[1046px]"}`}>
        {items.map((item, i) => (
          <ListItem key={item._uid} blok={item} index={i} variant="accordion" />
        ))}
      </div>
    ) : listStyle === "numbered" ? (
      <ol className="flex flex-col gap-7">
        {items.map((item, i) => (
          <ListItem key={item._uid} blok={item} index={i} variant="numbered" />
        ))}
      </ol>
    ) : (
      <ul className="list-disc space-y-1 pl-6 text-base font-medium leading-[26px] tracking-[0.01em] text-white">
        {bulletLines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );

  const introEl = blok.intro ? (
    <p
      className={`text-base font-medium leading-[26px] tracking-[0.01em] whitespace-pre-wrap text-white ${
        hasImage ? "" : "mx-auto max-w-[864px] text-center"
      }`}
    >
      {blok.intro}
    </p>
  ) : null;

  return (
    <section {...storyblokEditable(blok as SbBlokData)} className="relative w-full overflow-x-clip">
      <GrowingDottedConnector variant={theme} />
      <div className="section-shell px-4 pb-16 md:px-6 md:pb-24">
        {blok.headline ? (
          <h2
            className={`font-heading text-center text-[clamp(2.75rem,6.2vw,6.2rem)] leading-[1.15] tracking-[0.01em] ${HEADING_COLOR[theme]} ${headlineCase}`}
          >
            {blok.headline}
          </h2>
        ) : null}

        {hasImage ? (
          <div className="mx-auto mt-12 grid max-w-[1100px] gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_clamp(320px,34vw,511px)] md:items-start md:gap-12">
            <div className="flex flex-col gap-6">
              {introEl}
              {listEl}
            </div>
            <div className="relative aspect-[511/681] w-full overflow-hidden md:sticky md:top-28">
              <img
                src={blok.image!.filename}
                alt={blok.image!.alt || ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="mt-12 flex flex-col gap-8 md:mt-16">
            {introEl}
            {listEl}
          </div>
        )}
      </div>
    </section>
  );
}
