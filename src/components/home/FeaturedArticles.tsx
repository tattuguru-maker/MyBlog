import { articles } from "@/data/mock";
import ArticleCard from "@/components/common/ArticleCard";

export default function FeaturedArticles() {
  const featured = articles.filter((a) => a.featured);

  return (
    <section id="featured" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-mono text-accent-primary uppercase tracking-wider">Featured</span>
            <h2 className="text-display-sm font-bold text-text-primary mt-2">Editor&apos;s Picks</h2>
          </div>
          <a href="/search" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors hidden sm:block">
            View All &rarr;
          </a>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} variant="featured" />
          ))}
        </div>

        {/* Secondary grid */}
        {featured.length > 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {featured.slice(2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
