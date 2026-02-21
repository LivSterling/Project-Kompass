import { storyblokEditable } from "@storyblok/react/rsc";
import AnimatedDottedPath from "@/components/AnimatedDottedPath";

interface TextSectionProps {
  blok: {
    headline: string;
    body: string;
    backgrond_color: "navy" | "tan" | "white";
    background_image?: {
      filename: string;
      alt?: string;
    };
    image?: {
      filename: string;
      alt?: string;
    };
    button_text?: string;
    button_link?: string;
    _uid: string;
  };
}

export default function TextSection({ blok }: TextSectionProps) {
  const bgColorMap = {
    navy: "text-white",
    tan: "text-navy-dark",
    white: "text-navy-dark",
  } as const;
  const isNavy = blok.backgrond_color === "navy";

  // const headlineWithUnderline = blok.headline?.replace(
  //   /transitions./gi,
  //   '<span class="relative inline-block"><span class="relative z-10">transitions.</span><span class="absolute left-0 bottom-[0.1em] w-full h-full bg-green"></span></span>',  
  // );
  const highlightStyles: Record<string, string> = {
    transitions: "bg-orange",
    pathways: "bg-navy",
    navigating: "bg-green",
  };
  
  const pattern = /\b(transitions|pathways|navigating)\b/gi;
  
  const headlineWithUnderline = blok.headline?.replace(pattern, (match) => {
    const colorClass = highlightStyles[match.toLowerCase()] ?? "bg-green";
  
    return `<span class="relative inline-block">
      <span class="relative z-10">${match}</span>
      <span class="absolute left-0 bottom-[0.1em] w-full h-full ${colorClass}"></span>
    </span>`;
  });
  
  

  return (
    <section {...storyblokEditable(blok)} className="relative py-14 md:py-16">
      <div className="pr-4 md:pr-0" style={{ marginLeft: "max(1rem, calc((100vw - 1200px) / 2 + 1rem))" }}>
        <div
          className={`relative overflow-hidden px-6 py-10 md:px-12 md:py-14 ${bgColorMap[blok.backgrond_color]}`}
          style={{
            backgroundImage: blok.background_image?.filename
              ? `url(${blok.background_image.filename})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-[720px]">
            <h2
              className={`font-heading text-4xl leading-none md:text-[54px] ${isNavy ? "text-white" : "text-black"}`}
              dangerouslySetInnerHTML={{ __html: headlineWithUnderline || blok.headline }}
            />
            <p className={`mt-5 max-w-[620px] whitespace-pre-wrap text-[13px] leading-relaxed md:text-sm ${isNavy ? "text-white/90" : "text-black"}`}>{blok.body}</p>
            <a
              href={blok.button_link || "#"}
              className={`font-heading mt-7 inline-block px-4 py-2.5 text-[20px] font-bold uppercase tracking-wide transition-colors ${isNavy ? "bg-white textblack hover:bg-white/90" : "bg-blue text-black hover:bg-blue/90"}`}
            >
              {blok.button_text || "Submit a referral"}
            </a>
          </div>

          <AnimatedDottedPath
            direction="down-right"
            dotCount={14}
            color="#2d3554"
            showX={true}
            className="pointer-events-none absolute -right-6 top-6 h-40 w-40 opacity-70 md:right-10 md:top-8 md:h-48 md:w-48"
          />
        </div>
      </div>
    </section>
  );
}
