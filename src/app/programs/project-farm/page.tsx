import type { Metadata } from "next";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Project Farm | Project Kompass",
  description:
    "Project Farm is a hands-on, nature-based program in Derry, NH — connecting people with animals, open space, and community through Hidden Pond Farm & Stables.",
};

async function fetchProjectFarmPage() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/pages/project-farm", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return data.story;
  } catch {
    return null;
  }
}

export default async function ProjectFarmPage() {
  const story = await fetchProjectFarmPage();

  if (!story) {
    return (
      <main className="section-shell px-4 py-28 text-center text-white md:py-36">
        <h1 className="font-heading text-3xl text-green md:text-4xl">Project Farm</h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
          This page will load from Storyblok once you publish the story at slug{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-green">
            pages/project-farm
          </code>
          . Set the story&apos;s <strong>Real path</strong> to{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">/programs/project-farm</code> for
          the Visual Editor. See{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">STORYBLOK_PROJECT_FARM_PAGE.md</code>{" "}
          for block setup.
        </p>
      </main>
    );
  }

  return <StoryblokStory story={story} />;
}
