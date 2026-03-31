import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import TextSection from "@/components/TextSection";
import CtaSection from "@/components/CtaSection";
import BlogCard from "@/components/BlogCard";
import BlogGrid from "@/components/BlogGrid";
import HeroSimple from "@/components/HeroSimple";
import StatsSection from "@/components/StatsSection";
import AboutHero from "@/components/about/AboutHero";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutImpactSection from "@/components/about/AboutImpactSection";
import AboutHistorySection from "@/components/about/AboutHistorySection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutRoadSection from "@/components/about/AboutRoadSection";
import ValueCard from "@/components/about/ValueCard";

// Custom fetch function to disable Next.js caching
const cachedFetch = (input: RequestInfo | URL, init?: RequestInit) => {
    return fetch(input, {
        ...init,
        cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    });
};

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    bridge: process.env.NODE_ENV === "development",
    components: {
        page: Page,
        hero: Hero,
        hero_simple: HeroSimple,
        text_section: TextSection,
        cta_section: CtaSection,
        blog_grid: BlogGrid,
        blog_card: BlogCard,
        stats_section: StatsSection,
        about_hero: AboutHero,
        about_mission: AboutMissionSection,
        about_impact: AboutImpactSection,
        about_history: AboutHistorySection,
        about_values: AboutValuesSection,
        about_road: AboutRoadSection,
        value_card: ValueCard,
    },
    apiOptions: {
        fetch: cachedFetch,
    }
});