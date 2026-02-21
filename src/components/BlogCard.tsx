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
            className="group relative block h-full overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
        >
            <div className="aspect-[1.15/1] overflow-hidden">
                <img
                    src={blok.image.filename}
                    alt={blok.image.alt || blok.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-xs font-bold uppercase leading-snug tracking-wide text-white transition-colors group-hover:text-orange-light">{blok.title}</h3>
                </div>
            </div>
        </Link>

    )
}