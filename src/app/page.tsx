import { getStory } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const story = await getStory("pages/home");

  if (!story) {
    return null;
  }

  return <StoryblokStory story={story} />;
}