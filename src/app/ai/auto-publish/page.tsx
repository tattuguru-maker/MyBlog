import { autoPublishQueue } from "@/data/mock";

const statusStyles: Record<string, string> = {
  pending: "bg-warning/10 text-warning border-warning/20",
  approved: "bg-success/10 text-success border-success/20",
  rejected: "bg-danger/10 text-danger border-danger/20",
  published: "bg-info/10 text-info border-info/20",
};

export default function AutoPublishPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-display-sm font-bold text-text-primary">Auto-Publish Pipeline</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
              AI
            </span>
          </div>
          <p className="text-text-secondary">Queue of AI-drafted articles pending review or scheduled for publishing</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Pending Review", value: autoPublishQueue.filter((i) => i.status === "pending").length, color: "text-warning" },
          { label: "Approved", value: autoPublishQueue.filter((i) => i.status === "approved").length, color: "text-success" },
          { label: "Published", value: autoPublishQueue.filter((i) => i.status === "published").length, color: "text-info" },
          { label: "Rejected", value: autoPublishQueue.filter((i) => i.status === "rejected").length, color: "text-danger" },
        ].map((stat) => (
          <div key={stat.label} className="stat-card text-center">
            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            <span className="text-xs text-text-muted">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Queue */}
      <div className="space-y-4">
        {autoPublishQueue.map((item) => (
          <div key={item.id} className="glass-card p-5">
            <div className="flex items-start gap-4">
              {/* Status indicator */}
              <div className="flex-shrink-0 mt-1">
                <span className={`inline-block w-3 h-3 rounded-full ${
                  item.status === "pending" ? "bg-warning" :
                  item.status === "approved" ? "bg-success" :
                  item.status === "published" ? "bg-info" : "bg-danger"
                }`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                      <span>{item.category}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>Generated {new Date(item.generatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>Scheduled for {new Date(item.scheduledFor).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full border capitalize flex-shrink-0 ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                {/* Metrics bar */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">AI Confidence:</span>
                    <div className="w-20 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.confidence >= 90 ? "bg-success" : item.confidence >= 80 ? "bg-warning" : "bg-danger"
                        }`}
                        style={{ width: `${item.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary">{item.confidence}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">Est. Performance:</span>
                    <span className="text-xs font-medium text-accent-secondary">{item.estimatedPerformance}/100</span>
                  </div>
                </div>

                {/* Actions */}
                {item.status === "pending" && (
                  <div className="flex gap-2 mt-4">
                    <button className="btn-primary text-xs py-1.5 px-4">Approve</button>
                    <button className="btn-ghost text-xs py-1.5 px-4">Edit</button>
                    <button className="text-xs text-danger hover:text-danger/80 transition-colors px-2">Reject</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
