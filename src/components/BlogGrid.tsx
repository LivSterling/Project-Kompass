import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

interface BlogGridProps {
    blok: {
        headline: string;
        blog_posts: Array<Record<string, unknown> & { _uid: string }>;
        _uid: string;
    };
}

export default function BlogGrid({ blok }: BlogGridProps) {
    return (
        <section {...storyblokEditable(blok)} className="py-14 md:py-16">
            <div className="section-shell px-4 md:px-6">
                <h2 className="font-heading text-[54px] leading-none text-green">{blok.headline}</h2>
                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr] md:grid-rows-2">
                    {blok.blog_posts.map((nestedBlok, index) => (
                        <div
                            key={nestedBlok._uid}
                            className={
                                index === 0
                                    ? "md:row-span-2 md:min-h-[434px]"
                                    : "md:min-h-[209px]"
                            }
                        >
                            <StoryblokComponent blok={nestedBlok} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}