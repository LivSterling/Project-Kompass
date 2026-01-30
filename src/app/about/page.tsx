import { getStoryblokApi} from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function fetchAboutPage() {
  const storyblokApi = getStoryblokApi();
  
  const { data } = await storyblokApi.get('cdn/stories/pages/about', {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });
  
  return data.story;
}

export default async function AboutPage() {
  const story = await fetchAboutPage();
  
  return <StoryblokStory story={story} />;
}