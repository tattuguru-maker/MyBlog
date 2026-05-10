import { dashboardMetrics } from "@/data/mock";

function LargeChart({ title, color }: { title: string; color: string }) {
  const points = [20, 35, 25, 45, 30, 55, 40, 65, 50, 70, 60, 80];
  const max = Math.max(...points);
  const svgPoints = points.map((p, i) => `${(i / (points.length - 1)) * 100},${100 - (p / max) * 80}`).join(" ");

  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-text-primary mb-4">{title}</h3>
      <svg viewBox="0 0 100 100" className="w-full h-48" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,100 ${svgPoints} 100,100`} fill={`url(#grad-${color})`} />
        <polyline points={svgPoints} fill="none" stroke={color} strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-display-sm font-bold text-text-primary mb-2">Analytics</h1>
      <p className="text-text-secondary mb-8">Detailed traffic and engagement metrics</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {dashboardMetrics.map((m) => (
          <div key={m.label} className="stat-card">
            <span className="text-sm text-text-muted">{m.label}</span>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-text-primary">{m.value}</span>
              <span className={`text-xs font-medium ${m.changeType === "increase" ? "text-success" : "text-danger"}`}>
                {m.change > 0 ? "+" : ""}{m.change}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LargeChart title="Page Views" color="#6c5ce7" />
        <LargeChart title="Unique Visitors" color="#fd79a8" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LargeChart title="Session Duration" color="#00b894" />
        <LargeChart title="Bounce Rate" color="#e17055" />
      </div>

      {/* Top Pages */}
      <div className="glass-card p-6 mt-8">
        <h3 className="text-sm font-semibold text-text-primary mb-4">Top Pages</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="text-left text-text-muted font-medium py-3 pr-4">Page</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Views</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Avg. Time</th>
                <th className="text-right text-text-muted font-medium py-3 pl-4">Bounce</th>
              </tr>
            </thead>
            <tbody>
              {[
                { page: "/article/future-of-ai-agents", views: "45.2K", time: "5m 12s", bounce: "32%" },
                { page: "/article/nextjs-14-app-router", views: "38.4K", time: "6m 45s", bounce: "28%" },
                { page: "/", views: "34.1K", time: "2m 30s", bounce: "45%" },
                { page: "/article/typescript-advanced", views: "31.5K", time: "4m 58s", bounce: "35%" },
                { page: "/category/web-dev", views: "22.8K", time: "1m 48s", bounce: "52%" },
              ].map((row) => (
                <tr key={row.page} className="border-b border-glass-border/50 hover:bg-glass-hover transition-colors">
                  <td className="py-3 pr-4 text-text-primary font-mono text-xs">{row.page}</td>
                  <td className="py-3 px-4 text-right text-text-secondary">{row.views}</td>
                  <td className="py-3 px-4 text-right text-text-secondary">{row.time}</td>
                  <td className="py-3 pl-4 text-right text-text-secondary">{row.bounce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
