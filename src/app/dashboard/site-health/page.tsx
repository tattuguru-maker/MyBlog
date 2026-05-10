import { contentRefreshData, articles } from "@/data/mock";

export default function SiteHealthPage() {
  const outdatedCount = contentRefreshData.filter((d) => d.freshness < 50).length;
  const healthyCount = articles.length - outdatedCount;

  return (
    <div>
      <h1 className="text-display-sm font-bold text-text-primary mb-2">Site Health</h1>
      <p className="text-text-secondary mb-8">Content freshness and maintenance monitor</p>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="stat-card">
          <span className="text-sm text-text-muted">Content Health</span>
          <span className="text-2xl font-bold text-success">{healthyCount} Healthy</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Needs Update</span>
          <span className="text-2xl font-bold text-warning">{outdatedCount} Articles</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Total Articles</span>
          <span className="text-2xl font-bold text-text-primary">{articles.length}</span>
        </div>
      </div>

      {/* Freshness Indicator */}
      <div className="glass-card p-6 mb-8">
        <h3 className="text-sm font-semibold text-text-primary mb-4">Content Freshness Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.slice(0, 8).map((article) => {
            const daysSince = Math.floor((Date.now() - new Date(article.updatedAt).getTime()) / (1000 * 60 * 60 * 24));
            const freshness = Math.max(0, 100 - daysSince * 2);
            const color = freshness >= 70 ? "bg-success" : freshness >= 40 ? "bg-warning" : "bg-danger";

            return (
              <div key={article.id} className="p-3 rounded-xl bg-bg-tertiary/50 border border-glass-border">
                <p className="text-xs font-medium text-text-primary truncate mb-2">{article.title}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${freshness}%` }} />
                  </div>
                  <span className="text-[10px] text-text-muted">{freshness}%</span>
                </div>
                <p className="text-[10px] text-text-muted mt-1">{daysSince}d ago</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flagged Articles */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-semibold text-text-primary mb-4">Flagged for AI-Assisted Updates</h3>
        <div className="space-y-3">
          {contentRefreshData.map((item) => (
            <div key={item.articleId} className="flex items-start gap-4 p-4 rounded-xl bg-bg-tertiary/50 border border-glass-border">
              <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                item.priority === "high" ? "bg-danger" : item.priority === "medium" ? "bg-warning" : "bg-info"
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary">{item.title}</p>
                <p className="text-xs text-text-muted mt-1">
                  Last updated: {new Date(item.lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  <span className="mx-2">&middot;</span>
                  Freshness: {item.freshness}%
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.suggestedChanges.map((change, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-accent-primary/10 text-accent-secondary border border-accent-primary/20">
                      {change}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="btn-ghost text-xs py-1.5 px-3">Update with AI</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
