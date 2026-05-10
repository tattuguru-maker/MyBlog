import { seoHealthData } from "@/data/mock";

function ScoreRing({ score, size = 48 }: { score: number; size?: number }) {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? "#00b894" : score >= 80 ? "#fdcb6e" : "#e17055";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth={3} fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke={color} strokeWidth={3} fill="none"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-text-primary">
        {score}
      </span>
    </div>
  );
}

export default function SEOHealthPage() {
  const avgScore = Math.round(seoHealthData.reduce((sum, d) => sum + d.score, 0) / seoHealthData.length);

  return (
    <div>
      <h1 className="text-display-sm font-bold text-text-primary mb-2">SEO Health</h1>
      <p className="text-text-secondary mb-8">Per-article SEO scores and improvement recommendations</p>

      {/* Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="stat-card items-center">
          <ScoreRing score={avgScore} size={64} />
          <span className="text-sm text-text-muted mt-2">Average SEO Score</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Schema Complete</span>
          <span className="text-2xl font-bold text-success">
            {seoHealthData.filter((d) => d.schemaStatus === "complete").length}/{seoHealthData.length}
          </span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Issues Found</span>
          <span className="text-2xl font-bold text-warning">
            {seoHealthData.reduce((sum, d) => sum + d.issues.length, 0)}
          </span>
        </div>
      </div>

      {/* Articles Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border bg-bg-tertiary/30">
                <th className="text-left text-text-muted font-medium py-3 px-4">Article</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Score</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Readability</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Keywords</th>
                <th className="text-center text-text-muted font-medium py-3 px-4">Schema</th>
                <th className="text-left text-text-muted font-medium py-3 px-4">Issues</th>
              </tr>
            </thead>
            <tbody>
              {seoHealthData.map((item) => (
                <tr key={item.articleId} className="border-b border-glass-border/50 hover:bg-glass-hover transition-colors">
                  <td className="py-3 px-4 text-text-primary font-medium">{item.title}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <ScoreRing score={item.score} />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`text-sm font-medium ${
                      item.readability >= 85 ? "text-success" : item.readability >= 75 ? "text-warning" : "text-danger"
                    }`}>
                      {item.readability}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-text-secondary">{item.keywordDensity}%</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      item.schemaStatus === "complete"
                        ? "bg-success/10 text-success"
                        : item.schemaStatus === "partial"
                        ? "bg-warning/10 text-warning"
                        : "bg-danger/10 text-danger"
                    }`}>
                      {item.schemaStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {item.issues.length === 0 ? (
                      <span className="text-success text-xs">All clear</span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {item.issues.map((issue, i) => (
                          <span key={i} className="text-xs text-warning bg-warning/5 px-2 py-0.5 rounded">
                            {issue}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
