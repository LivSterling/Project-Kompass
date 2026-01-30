import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

interface BlogGridProps {
    blok: {
        headline: string;
        blog_posts: any[];
        _uid: string;
    };
}

export default function BlogGrid({ blok }: BlogGridProps) {
    return (
        <section {...storyblokEditable(blok)} className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold mb-12" style={{ color: '#86B049' }}>{blok.headline}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blok.blog_posts.map((nestedBlok: any) => (
                        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
                </div>

                {/* Dotted path decoration */}
                <div className="relative mt-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-20 border-l-2 border-dashed border-gray-600"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}