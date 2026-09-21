import type { Metadata } from "next";
import { getStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Our Supporters | Project Kompass",
  description: "The individuals, corporations, and foundations who make Project Kompass possible.",
};

export default async function OurSupportersPage() {
  const story = await getStory("pages/supporters");

  if (!story) {
    return (
      <main className="section-shell px-4 py-28 text-center text-white md:py-36">
        <h1 className="font-heading text-3xl text-blue md:text-4xl">Our Supporters</h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
          This page will load from Storyblok once you publish the story at slug{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-orange">pages/supporters</code>. See{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">STORYBLOK_OUR_SUPPORTERS_PAGE.md</code> for
          block setup.
        </p>
      </main>
    );
  }

  return <StoryblokStory story={story} />;
}
