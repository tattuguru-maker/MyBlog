import { rankTrackerData } from "@/data/mock";

export default function RankTrackerPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-display-sm font-bold text-text-primary">SEO/AEO Rank Tracker</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
              AI
            </span>
          </div>
          <p className="text-text-secondary">Keyword rankings, featured snippets, and voice search readiness</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="stat-card text-center">
          <span className="text-2xl font-bold gradient-text">
            {rankTrackerData.filter((d) => d.position <= 3).length}
          </span>
          <span className="text-xs text-text-muted">Top 3 Keywords</span>
        </div>
        <div className="stat-card text-center">
          <span className="text-2xl font-bold text-accent-secondary">
            {rankTrackerData.filter((d) => d.featuredSnippet).length}
          </span>
          <span className="text-xs text-text-muted">Featured Snippets</span>
        </div>
        <div className="stat-card text-center">
          <span className="text-2xl font-bold text-success">
            {rankTrackerData.filter((d) => d.voiceSearchReady).length}
          </span>
          <span className="text-xs text-text-muted">Voice Search Ready</span>
        </div>
        <div className="stat-card text-center">
          <span className="text-2xl font-bold text-text-primary">
            {rankTrackerData.length}
          </span>
          <span className="text-xs text-text-muted">Tracked Keywords</span>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border bg-bg-tertiary/30">
                <th className="text-left text-text-muted font-medium py-3 px-4">Keyword</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Position</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Change</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Volume</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Snippet</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Voice</th>
                <th className="text-left text-text-muted font-medium py-3 px-4">URL</th>
              </tr>
            </thead>
            <tbody>
              {rankTrackerData.map((item) => {
                const change = item.previousPosition - item.position;
                return (
                  <tr key={item.keyword} className="border-b border-glass-border/50 hover:bg-glass-hover transition-colors">
                    <td className="py-3 px-4">
                      <span className="text-text-primary font-medium">{item.keyword}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm ${
                        item.position <= 3
                          ? "bg-success/10 text-success"
                          : item.position <= 10
                          ? "bg-warning/10 text-warning"
                          : "bg-glass-bg text-text-muted"
                      }`}>
                        {item.position}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {change !== 0 && (
                        <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                          change > 0 ? "text-success" : "text-danger"
                        }`}>
                          <svg className={`w-3 h-3 ${change < 0 ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                          </svg>
                          {Math.abs(change)}
                        </span>
                      )}
                      {change === 0 && <span className="text-xs text-text-muted">&mdash;</span>}
                    </td>
                    <td className="py-3 px-4 text-center text-text-secondary">
                      {(item.searchVolume / 1000).toFixed(1)}K
                    </td>
                    <td className="py-3 px-4 text-center">
                      {item.featuredSnippet ? (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-primary/10 text-accent-secondary rounded-full">
                          SNIPPET
                        </span>
                      ) : (
                        <span className="text-xs text-text-muted">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {item.voiceSearchReady ? (
                        <span className="text-success text-xs">Ready</span>
                      ) : (
                        <span className="text-text-muted text-xs">No</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-text-muted font-mono text-xs truncate max-w-[200px]">
                      {item.url}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
