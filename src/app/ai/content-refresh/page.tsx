import { contentRefreshData } from "@/data/mock";

const priorityStyles: Record<string, string> = {
  high: "bg-danger/10 text-danger border-danger/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-info/10 text-info border-info/20",
};

export default function ContentRefreshPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-display-sm font-bold text-text-primary">Content Refresh</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
              AI
            </span>
          </div>
          <p className="text-text-secondary">Articles flagged for updates with AI-suggested revisions</p>
        </div>
        <button className="btn-primary text-sm">Scan All Content</button>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {contentRefreshData.map((item) => (
          <div key={item.articleId} className="glass-card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-muted mt-1">
                  Last updated {new Date(item.lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full border capitalize ${priorityStyles[item.priority]}`}>
                {item.priority} priority
              </span>
            </div>

            {/* Freshness and Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                  <span>Content Freshness</span>
                  <span>{item.freshness}%</span>
                </div>
                <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.freshness >= 70 ? "bg-success" : item.freshness >= 40 ? "bg-warning" : "bg-danger"
                    }`}
                    style={{ width: `${item.freshness}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                  <span>Estimated Traffic Impact</span>
                  <span>+{item.estimatedImpact}%</span>
                </div>
                <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                    style={{ width: `${item.estimatedImpact}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Suggested Changes */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-text-primary mb-2">AI-Suggested Changes:</h4>
              <ul className="space-y-1.5">
                {item.suggestedChanges.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <button className="btn-primary text-sm">Apply AI Updates</button>
              <button className="btn-ghost text-sm">Manual Edit</button>
              <button className="btn-ghost text-sm">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
