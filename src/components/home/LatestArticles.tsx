import { articles } from "@/data/mock";
import ArticleCard from "@/components/common/ArticleCard";
import AdZone from "@/components/common/AdZone";

export default function LatestArticles() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-mono text-accent-secondary uppercase tracking-wider">Latest</span>
            <h2 className="text-display-sm font-bold text-text-primary mt-2">Recent Articles</h2>
          </div>
          <a href="/search" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors hidden sm:block">
            View All &rarr;
          </a>
        </div>

        {/* Ad Banner */}
        <AdZone size="728×90" label="Header Leaderboard" className="h-[90px] mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
