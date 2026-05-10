import { aiSuggestions } from "@/data/mock";

export default function AISuggestionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-display-sm font-bold text-text-primary">AI Article Suggestions</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
              AI Powered
            </span>
          </div>
          <p className="text-text-secondary">AI-generated topic ideas based on keyword research, trends, and revenue potential</p>
        </div>
        <button className="btn-primary text-sm">Refresh Suggestions</button>
      </div>

      {/* Suggestion Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {aiSuggestions.map((s) => (
          <div key={s.id} className="glass-card-hover p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 mr-4">
                <h3 className="text-base font-semibold text-text-primary mb-1">{s.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted font-mono">{s.keyword}</span>
                  {s.trending && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent-tertiary/20 text-accent-tertiary rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-bold gradient-text">{s.confidence}%</span>
                <p className="text-[10px] text-text-muted">confidence</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="text-center p-2 rounded-lg bg-bg-tertiary/50">
                <p className="text-xs font-bold text-text-primary">{(s.searchVolume / 1000).toFixed(1)}K</p>
                <p className="text-[10px] text-text-muted">Searches/mo</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-bg-tertiary/50">
                <p className="text-xs font-bold text-text-primary">{s.difficulty}</p>
                <p className="text-[10px] text-text-muted">Difficulty</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-bg-tertiary/50">
                <p className="text-xs font-bold text-text-primary">{(s.estimatedTraffic / 1000).toFixed(1)}K</p>
                <p className="text-[10px] text-text-muted">Est. Traffic</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-bg-tertiary/50">
                <p className="text-xs font-bold text-accent-secondary">${s.estimatedRevenue}</p>
                <p className="text-[10px] text-text-muted">Est. Revenue</p>
              </div>
            </div>

            {/* Difficulty Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                <span>Keyword Difficulty</span>
                <span>{s.difficulty}/100</span>
              </div>
              <div className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    s.difficulty <= 40 ? "bg-success" : s.difficulty <= 60 ? "bg-warning" : "bg-danger"
                  }`}
                  style={{ width: `${s.difficulty}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <span className="tag-pill !text-[10px]">{s.category}</span>
              <div className="ml-auto flex gap-2">
                <button className="btn-ghost text-xs py-1.5 px-3">Dismiss</button>
                <button className="btn-primary text-xs py-1.5 px-3">Write Article</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
