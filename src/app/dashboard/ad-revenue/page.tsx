import { adZonePerformance } from "@/data/mock";

export default function AdRevenuePage() {
  const totalRevenue = adZonePerformance.reduce((s, z) => s + z.revenue, 0);
  const totalImpressions = adZonePerformance.reduce((s, z) => s + z.impressions, 0);
  const totalClicks = adZonePerformance.reduce((s, z) => s + z.clicks, 0);
  const avgCTR = ((totalClicks / totalImpressions) * 100).toFixed(2);

  return (
    <div>
      <h1 className="text-display-sm font-bold text-text-primary mb-2">Ad Revenue</h1>
      <p className="text-text-secondary mb-8">Zone-level ad performance breakdown</p>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="stat-card">
          <span className="text-sm text-text-muted">Total Revenue</span>
          <span className="text-2xl font-bold gradient-text">${totalRevenue.toLocaleString()}</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Total Impressions</span>
          <span className="text-2xl font-bold text-text-primary">{(totalImpressions / 1_000_000).toFixed(1)}M</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Total Clicks</span>
          <span className="text-2xl font-bold text-text-primary">{(totalClicks / 1000).toFixed(1)}K</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Avg. CTR</span>
          <span className="text-2xl font-bold text-text-primary">{avgCTR}%</span>
        </div>
      </div>

      {/* Zone Breakdown */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-glass-border">
          <h3 className="text-sm font-semibold text-text-primary">Zone Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border bg-bg-tertiary/30">
                <th className="text-left text-text-muted font-medium py-3 px-4">Ad Zone</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Impressions</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Clicks</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">CTR</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Revenue</th>
                <th className="text-right text-text-muted font-medium py-3 px-4">Fill Rate</th>
                <th className="text-left text-text-muted font-medium py-3 px-4">Share</th>
              </tr>
            </thead>
            <tbody>
              {adZonePerformance.map((zone) => {
                const revenueShare = ((zone.revenue / totalRevenue) * 100).toFixed(1);
                return (
                  <tr key={zone.zone} className="border-b border-glass-border/50 hover:bg-glass-hover transition-colors">
                    <td className="py-3 px-4 text-text-primary font-medium">{zone.zone}</td>
                    <td className="py-3 px-4 text-right text-text-secondary">{(zone.impressions / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4 text-right text-text-secondary">{(zone.clicks / 1000).toFixed(1)}K</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`font-medium ${zone.ctr >= 3 ? "text-success" : zone.ctr >= 2 ? "text-warning" : "text-text-secondary"}`}>
                        {zone.ctr}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-accent-secondary">${zone.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right text-text-secondary">{zone.fillRate}%</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-bg-tertiary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                            style={{ width: `${revenueShare}%` }}
                          />
                        </div>
                        <span className="text-xs text-text-muted w-12 text-right">{revenueShare}%</span>
                      </div>
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
