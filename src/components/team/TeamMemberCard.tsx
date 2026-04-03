import { storyblokEditable } from "@storyblok/react/rsc";

export type TeamMemberBlok = {
  _uid: string;
  component?: string;
  name: string;
  role?: string;
  photo?: { filename: string; alt?: string };
};

const PLACEHOLDER = "https://placehold.co/202x202/2a304f/94a3b8?text=Photo";

export default function TeamMemberCard({ blok }: { blok: TeamMemberBlok }) {
  const src = blok.photo?.filename?.trim() ? blok.photo.filename : PLACEHOLDER;
  const alt = blok.photo?.alt || blok.name || "";

  return (
    <article
      {...storyblokEditable(blok)}
      className="mx-auto flex w-full max-w-[202px] flex-col items-center text-center"
    >
      <img
        src={src}
        alt={alt}
        width={202}
        height={202}
        className="h-[202px] w-[202px] max-w-full shrink-0 object-cover"
      />
      <h3 className="font-heading mt-2.5 text-[21.5px] leading-[30px] tracking-[0.01em] text-orange">
        {blok.name}
      </h3>
      {blok.role ? (
        <p className="mt-1 max-w-[220px] text-base font-medium leading-[26px] tracking-[0.01em] text-white">
          {blok.role}
        </p>
      ) : null}
    </article>
  );
}
