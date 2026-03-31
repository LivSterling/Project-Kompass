import { storyblokEditable } from "@storyblok/react/rsc";
import BlogCard from "@/components/BlogCard";
import { FIGMA_BLOG_LINE, FIGMA_MAP_X } from "@/lib/figmaAssets";

interface BlogGridProps {
  blok: {
    headline: string;
    blog_posts: Array<
      Record<string, unknown> & {
        _uid: string;
        image?: { filename: string; alt?: string };
        title?: string;
        link?: string;
      }
    >;
    _uid: string;
  };
}

export default function BlogGrid({ blok }: BlogGridProps) {
  const posts = blok.blog_posts ?? [];

  return (
    <section {...storyblokEditable(blok)} className="relative overflow-x-clip py-16 md:py-24">
      <div className="section-shell relative z-10 px-4 md:px-6">
        <h2 className="font-heading text-center text-[clamp(3rem,10vw,7rem)] uppercase leading-none tracking-wide text-green md:text-left">
          {blok.headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] md:grid-rows-[auto_auto] md:gap-x-10 md:gap-y-12">
          {posts[0] && posts[0].image?.filename && posts[0].title && posts[0].link && (
            <div className="md:row-span-2">
              <BlogCard
                blok={{
                  _uid: posts[0]._uid,
                  image: posts[0].image,
                  title: posts[0].title,
                  link: posts[0].link,
                }}
                layoutIndex={0}
              />
            </div>
          )}
          {posts[1] && posts[1].image?.filename && posts[1].title && posts[1].link && (
            <div className="md:self-start">
              <BlogCard
                blok={{
                  _uid: posts[1]._uid,
                  image: posts[1].image,
                  title: posts[1].title,
                  link: posts[1].link,
                }}
                layoutIndex={1}
              />
            </div>
          )}
          {posts[2] && posts[2].image?.filename && posts[2].title && posts[2].link && (
            <div className="md:self-start">
              <BlogCard
                blok={{
                  _uid: posts[2]._uid,
                  image: posts[2].image,
                  title: posts[2].title,
                  link: posts[2].link,
                }}
                layoutIndex={2}
              />
            </div>
          )}
        </div>

        <div
          className="pointer-events-none absolute top-16 right-[-10%] z-[1] hidden h-[min(85vh,846px)] w-[min(100vw,697px)] opacity-20 md:block"
          aria-hidden
        >
          <img
            src={FIGMA_BLOG_LINE}
            alt=""
            className="h-full w-full object-contain"
            style={{ transform: "rotate(107.3deg)" }}
          />
        </div>
        <img
          src={FIGMA_MAP_X}
          alt=""
          className="pointer-events-none absolute bottom-[18%] right-[12%] z-[1] hidden h-24 w-24 opacity-30 object-contain md:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-8 left-2 z-[1] h-40 w-48 opacity-50 md:bottom-12 md:left-8 md:h-48 md:w-56"
          aria-hidden
        >
          <img
            src={FIGMA_BLOG_LINE}
            alt=""
            className="h-full w-full object-contain object-left-bottom"
            style={{ transform: "scaleX(-1) rotate(75deg)" }}
          />
        </div>
      </div>
    </section>
  );
}
