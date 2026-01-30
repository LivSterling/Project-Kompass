import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

interface PageProps {
  blok: {
    title: string;
    blocks: any[];
    _uid: string;
    component: string;
  };
}

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.blocks?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}