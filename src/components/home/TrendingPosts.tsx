import { articles } from "@/data/mock";
import ArticleCard from "@/components/common/ArticleCard";
import AdZone from "@/components/common/AdZone";

export default function TrendingPosts() {
  const trending = articles.filter((a) => a.trending);

  return (
    <section className="py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-sm font-mono text-accent-tertiary uppercase tracking-wider">Trending</span>
            <h2 className="text-display-sm font-bold text-text-primary mt-2">What&apos;s Hot</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trending.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdZone size="300×250" label="Sidebar Rectangle" className="h-[250px]" />
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "AI", "Docker", "AWS", "Python", "GraphQL"].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
