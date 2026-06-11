import type { Metadata } from "next";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Transitional Housing | Project Kompass",
  description:
    "Safe, stable transitional housing for young women and new moms during critical moments of transition.",
};

async function fetchTransitionalHousingPage() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/pages/transitional-housing", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return data.story;
  } catch {
    return null;
  }
}

export default async function TransitionalHousingPage() {
  const story = await fetchTransitionalHousingPage();

  if (!story) {
    return (
      <main className="section-shell px-4 py-28 text-center text-white md:py-36">
        <h1 className="font-heading text-3xl text-navy md:text-4xl">Transitional Housing</h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
          This page will load from Storyblok once you publish the story at slug{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-orange">
            pages/transitional-housing
          </code>
          . See{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">
            STORYBLOK_TRANSITIONAL_HOUSING_PAGE.md
          </code>{" "}
          for block setup.
        </p>
      </main>
    );
  }

  return <StoryblokStory story={story} />;
}
