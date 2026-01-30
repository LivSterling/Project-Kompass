import { getStoryblokApi} from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function fetchHomepage() {
  const storyblokApi = getStoryblokApi();

  const {data} = await storyblokApi.get('cdn/stories/pages/home', {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published'
  });

  return data.story;
}

export default async function Home() {
  const story = await fetchHomepage();

  return <StoryblokStory story={story} />;
}