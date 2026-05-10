const suggestions = [
  {
    type: "Ad Layout",
    title: "Move sidebar ad above fold on article pages",
    impact: "high",
    estimatedRevenue: "+$420/mo",
    description: "Analytics show 65% of sidebar ad impressions occur below the fold. Repositioning the 300×250 unit higher could increase viewability by 30%.",
  },
  {
    type: "Affiliate",
    title: "Add affiliate links to developer tool mentions",
    impact: "medium",
    estimatedRevenue: "+$280/mo",
    description: "Articles mentioning VS Code extensions, hosting providers, and SaaS tools could include contextual affiliate links without disrupting reader experience.",
  },
  {
    type: "Sponsored",
    title: "Create sponsored content category for developer tools",
    impact: "high",
    estimatedRevenue: "+$1,200/mo",
    description: "Based on audience demographics and engagement patterns, sponsored tutorials and reviews from developer tool companies could generate significant revenue.",
  },
  {
    type: "Ad Layout",
    title: "Implement lazy-loaded interstitial between articles",
    impact: "medium",
    estimatedRevenue: "+$350/mo",
    description: "A non-intrusive interstitial triggered on article navigation could capture additional impressions with minimal impact on user experience.",
  },
  {
    type: "Affiliate",
    title: "Add course recommendation widgets to tutorial articles",
    impact: "low",
    estimatedRevenue: "+$150/mo",
    description: "Tutorial-style articles have high intent. Embedding relevant online course recommendations could drive affiliate commissions.",
  },
];

const impactColors: Record<string, string> = {
  high: "bg-success/10 text-success border-success/20",
  medium: "bg-warning/10 text-warning border-warning/20",
  low: "bg-info/10 text-info border-info/20",
};

const typeColors: Record<string, string> = {
  "Ad Layout": "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  Affiliate: "bg-accent-tertiary/10 text-accent-tertiary border-accent-tertiary/20",
  Sponsored: "bg-success/10 text-success border-success/20",
};

export default function MonetisationPage() {
  const totalPotential = suggestions.reduce((sum, s) => {
    const match = s.estimatedRevenue.match(/\d+/);
    return sum + (match ? parseInt(match[0]) : 0);
  }, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-display-sm font-bold text-text-primary">Monetisation Optimiser</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-primary/20">
              AI
            </span>
          </div>
          <p className="text-text-secondary">AI-suggested ad layout changes, affiliate placements, and sponsored content opportunities</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="stat-card">
          <span className="text-sm text-text-muted">Current Monthly Revenue</span>
          <span className="text-2xl font-bold text-text-primary">$18,420</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Potential Additional Revenue</span>
          <span className="text-2xl font-bold gradient-text">+${totalPotential.toLocaleString()}/mo</span>
        </div>
        <div className="stat-card">
          <span className="text-sm text-text-muted">Optimisation Suggestions</span>
          <span className="text-2xl font-bold text-accent-secondary">{suggestions.length}</span>
        </div>
      </div>

      {/* Suggestions */}
      <div className="space-y-4">
        {suggestions.map((s, i) => (
          <div key={i} className="glass-card-hover p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${typeColors[s.type]}`}>
                  {s.type}
                </span>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full border capitalize ${impactColors[s.impact]}`}>
                  {s.impact} impact
                </span>
              </div>
              <span className="text-lg font-bold gradient-text flex-shrink-0">{s.estimatedRevenue}</span>
            </div>

            <h3 className="text-base font-semibold text-text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.description}</p>

            <div className="flex gap-2">
              <button className="btn-primary text-xs py-1.5 px-4">Implement</button>
              <button className="btn-ghost text-xs py-1.5 px-4">Learn More</button>
              <button className="btn-ghost text-xs py-1.5 px-4">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
