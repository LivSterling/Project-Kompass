import type { Metadata } from "next";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Community Center | Project Kompass",
  description:
    "The Project Kompass Community Center (PKCC) is a welcoming, inclusive space offering food, basic necessities, life-skills education, and partner-led services.",
};

async function fetchCommunityCenterPage() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/pages/community-center", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return data.story;
  } catch {
    return null;
  }
}

export default async function CommunityCenterPage() {
  const story = await fetchCommunityCenterPage();

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
