import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

interface BlogCardProps {
    blok: {
        image : {
            filename: string;
            alt?: string;
        };
        title: string;
        link: string;
        _uid: string;
    }
}

export default function BlogCard({ blok }: BlogCardProps) {
    return (
        <Link href={blok.link}
            {...storyblokEditable(blok)}
            className="group block overflow-hidden hover:shadow-xl transition-shadow"
            >
                <div className="aspect-video overflow-hidden">
                <img src={blok.image.filename}alt={blok.image.alt || blok.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange transition-colors">{blok.title}</h3>
                </div>
        </Link>

    )
}