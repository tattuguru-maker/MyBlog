import { dashboardMetrics, articles, aiSuggestions } from "@/data/mock";
import Link from "next/link";

function MetricCard({ metric }: { metric: typeof dashboardMetrics[0] }) {
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-muted">{metric.label}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            metric.changeType === "increase"
              ? "bg-success/10 text-success"
              : metric.changeType === "decrease"
              ? "bg-danger/10 text-danger"
              : "bg-glass-bg text-text-muted"
          }`}
        >
          {metric.change > 0 ? "+" : ""}
          {metric.change}%
        </span>
      </div>
      <p className="text-2xl font-bold text-text-primary">{metric.value}</p>
    </div>
  );
}

function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-accent-primary to-accent-secondary opacity-60 hover:opacity-100 transition-opacity"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export default function DashboardOverview() {
  const recentArticles = articles.slice(0, 5);
  const topSuggestions = aiSuggestions.slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display-sm font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Overview of your blog performance</p>
        </div>
        <select className="input-field w-auto text-sm">
          <option value="30d">Last 30 days</option>
          <option value="7d">Last 7 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Traffic Overview</h3>
          <MiniChart />
          <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Revenue Trend</h3>
          <MiniChart />
          <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-text-primary">Recent Articles</h3>
            <Link href="/search" className="text-xs text-accent-secondary hover:text-accent-primary transition-colors">
              View All &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {recentArticles.map((article) => (
              <div key={article.id} className="flex items-center justify-between py-2 border-b border-glass-border last:border-0">
                <div className="flex-1 min-w-0 mr-4">
                  <p className="text-sm font-medium text-text-primary truncate">{article.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{article.author.name} &middot; {article.readTime}m read</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-muted flex-shrink-0">
                  <span>{(article.views / 1000).toFixed(1)}K</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    article.seoScore >= 90
                      ? "bg-success/10 text-success"
                      : article.seoScore >= 80
                      ? "bg-warning/10 text-warning"
                      : "bg-danger/10 text-danger"
                  }`}>
                    SEO {article.seoScore}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions Preview */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-text-primary">AI Topic Suggestions</h3>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
                AI
              </span>
            </div>
            <Link href="/ai/suggestions" className="text-xs text-accent-secondary hover:text-accent-primary transition-colors">
              View All &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {topSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="p-3 rounded-xl bg-bg-tertiary/50 border border-glass-border">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-text-primary flex-1 mr-2">{suggestion.title}</p>
                  {suggestion.trending && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-tertiary/20 text-accent-tertiary rounded-full flex-shrink-0">
                      HOT
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span>{(suggestion.searchVolume / 1000).toFixed(1)}K searches</span>
                  <span>${suggestion.estimatedRevenue} est. rev</span>
                  <span className="ml-auto text-accent-secondary">{suggestion.confidence}% match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
