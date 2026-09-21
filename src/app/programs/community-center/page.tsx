import type { Metadata } from "next";
import { getStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Community Center | Project Kompass",
  description:
    "The Project Kompass Community Center (PKCC) is a welcoming, inclusive space offering food, basic necessities, life-skills education, and partner-led services.",
};

export default async function CommunityCenterPage() {
  const story = await getStory("pages/community-center");

  if (!story) {
    return (
      <main className="section-shell px-4 py-28 text-center text-white md:py-36">
        <h1 className="font-heading text-3xl text-orange md:text-4xl">Community Center</h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
          This page will load from Storyblok once you publish the story at slug{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-orange">
            pages/community-center
          </code>
          . See{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">
            STORYBLOK_COMMUNITY_CENTER_PAGE.md
          </code>{" "}
          for block setup.
        </p>
      </main>
    );
  }

  return <StoryblokStory story={story} />;
}
