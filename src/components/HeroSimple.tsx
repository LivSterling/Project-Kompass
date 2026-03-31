import { storyblokEditable } from "@storyblok/react/rsc"

interface HeroSimpleProps {
    blok: {
        icon?: {
            filename: string;
            alt?: string;
        };
        headline: string;
        subheadline: string;
        backgrond_color: 'navy' | 'tan' | 'white';
        background_image: {
            filename: string;
            alt?: string;
        };
        _uid: string;

    };
}

export default function HeroSimple({ blok }: HeroSimpleProps) {

    // Map background colors
    const bgColorMap = {
        navy: 'bg-navy text-white',
        tan: 'bg-tan text-navy',
        white: 'bg-white text-navy',
    };

    return (
        <section {...storyblokEditable(blok)} className="relative overflow-hidden py-20">

            {/* Background Image */}
            <div className="absolute inset-0">
                {blok.background_image?.filename ? (
                    <img src={blok.background_image.filename} alt="" className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full bg-navy-dark" aria-hidden />
                )}
                {/* Gradient overlay - radial gradient from transparent to navy-dark at 40% */}
                
            </div>

            {/* Dotted path decoration in background */}
            <div className="absolute top-0 right-0 w-96 h-full pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 300 400">
                    <path
                        d="M 250 50 Q 200 100 150 200 T 50 350"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="8,8"
                    />
                    {/* X mark at the end */}
                    <text x="40" y="360" fontSize="24" fontWeight="bold">✕</text>
                </svg>
            </div>

            <div className="section-shell relative z-10 px-4 md:px-6">
                <div className="max-w-3xl">
                    {blok.icon && (
                        <div className="mb-6">
                            <img
                                src={blok.icon.filename}
                                alt={blok.icon.alt || "Icon"}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        {blok.headline}
                    </h1>

                    {blok.subheadline && (
                        <p className="text-2xl md:text-3xl font-bold text-black">
                            {blok.subheadline}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}