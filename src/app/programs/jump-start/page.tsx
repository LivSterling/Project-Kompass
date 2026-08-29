import type { Metadata } from "next";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const metadata: Metadata = {
  title: "Project Jump Start | Project Kompass",
  description:
    "The Jump Start Scholarship empowers brighter futures through vocational and higher education — funding for students pursuing training, certificate, or college programs.",
};

async function fetchJumpStartPage() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/pages/jump-start", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return data.story;
  } catch {
    return null;
  }
}

export default async function JumpStartPage() {
  const story = await fetchJumpStartPage();

  if (!story) {
    return (
      <main className="section-shell px-4 py-28 text-center text-white md:py-36">
        <h1 className="font-heading text-3xl text-blue md:text-4xl">
          Project Jump Start
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85">
          This page will load from Storyblok once you publish the story at slug{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-blue">
            pages/jump-start
          </code>
          . Set the story&apos;s <strong>Real path</strong> to{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">/programs/jump-start</code> for
          the Visual Editor. See{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5">STORYBLOK_PROJECT_JUMPSTART_PAGE.md</code>{" "}
          for block setup.
        </p>
      </main>
    );
  }

  return <StoryblokStory story={story} />;
}
