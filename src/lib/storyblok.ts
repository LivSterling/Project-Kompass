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
import AboutRoadSection from "@/components/about/AboutRoadSection";
import TeamHero from "@/components/team/TeamHero";
import TeamGridSection from "@/components/team/TeamGridSection";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import HousingHero from "@/components/housing/HousingHero";
import HousingIntro from "@/components/housing/HousingIntro";
import HousingEligibility from "@/components/housing/HousingEligibility";
import HousingExpectations from "@/components/housing/HousingExpectations";
import HousingRequirement from "@/components/housing/HousingRequirement";
import CommunityHero from "@/components/community-center/CommunityHero";
import CommunityIntro from "@/components/community-center/CommunityIntro";
import CommunityGuidelines from "@/components/community-center/CommunityGuidelines";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsIntro from "@/components/programs/ProgramsIntro";
import ProgramsList from "@/components/programs/ProgramsList";
import ProgramAccordion from "@/components/programs/ProgramAccordion";
import ProgramsNewsletter from "@/components/programs/ProgramsNewsletter";
import FaqSection from "@/components/shared/FaqSection";
import FaqItem from "@/components/shared/FaqItem";
import PinnedCardSection from "@/components/shared/PinnedCardSection";
import ScrollCard from "@/components/shared/ScrollCard";

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
        about_road: AboutRoadSection,
        team_hero: TeamHero,
        team_grid_section: TeamGridSection,
        team_member: TeamMemberCard,
        housing_hero: HousingHero,
        housing_intro: HousingIntro,
        housing_eligibility: HousingEligibility,
        housing_expectations: HousingExpectations,
        housing_requirement: HousingRequirement,
        community_hero: CommunityHero,
        community_intro: CommunityIntro,
        community_guidelines: CommunityGuidelines,
        programs_hero: ProgramsHero,
        programs_intro: ProgramsIntro,
        programs_list: ProgramsList,
        program_item: ProgramAccordion,
        programs_newsletter: ProgramsNewsletter,
        faq: FaqSection,
        faq_item: FaqItem,
        scroll_cards: PinnedCardSection,
        scroll_card: ScrollCard,
    },
    apiOptions: {
        fetch: cachedFetch,
    }
});