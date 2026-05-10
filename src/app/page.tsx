import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import TrendingPosts from "@/components/home/TrendingPosts";
import CategoryNav from "@/components/home/CategoryNav";
import LatestArticles from "@/components/home/LatestArticles";
import NewsletterSection from "@/components/home/NewsletterSection";
import AdZone from "@/components/common/AdZone";
import RecommendationCarousel from "@/components/ai/RecommendationCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <AdZone size="728×90" label="In-Feed Leaderboard" className="h-[90px] max-w-4xl mx-auto" />
      <TrendingPosts />
      <CategoryNav />
      <LatestArticles />
      <RecommendationCarousel />
      <NewsletterSection />
      {/* Sticky Footer Ad */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <AdZone size="320×50" label="Sticky Footer Banner" className="h-[50px] max-w-lg mx-auto mb-2 opacity-90" />
      </div>
    </>
  );
}
