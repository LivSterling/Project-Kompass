import { getStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function AboutPage() {
  const story = await getStory("pages/about");

  if (!story) {
    return null;
  }

  return <StoryblokStory story={story} />;
}