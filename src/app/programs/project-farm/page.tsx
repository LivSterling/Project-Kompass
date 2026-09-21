import type { Metadata } from "next";
import { getStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Project Farm | Project Kompass",
  description:
    "Project Farm is a hands-on, nature-based program in Derry, NH — connecting people with animals, open space, and community through Hidden Pond Farm & Stables.",
};

export default async function ProjectFarmPage() {
  const story = await getStory("pages/project-farm");

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
