import { contentCalendar } from "@/data/mock";

const statusColors: Record<string, string> = {
  draft: "bg-text-muted/20 text-text-muted",
  review: "bg-warning/10 text-warning",
  scheduled: "bg-info/10 text-info",
  published: "bg-success/10 text-success",
};

export default function ContentCalendarPage() {
  const grouped = contentCalendar.reduce((acc, item) => {
    const date = new Date(item.scheduledDate).toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {} as Record<string, typeof contentCalendar>);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-display-sm font-bold text-text-primary">Content Calendar</h1>
          <p className="text-text-secondary mt-1">Scheduled and queued content pipeline</p>
        </div>
        <button className="btn-primary text-sm">+ New Article</button>
      </div>

      {/* Status Legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(statusColors).map(([status, cls]) => (
          <div key={status} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${cls.split(" ")[0]}`} />
            <span className="text-xs text-text-secondary capitalize">{status}</span>
          </div>
        ))}
      </div>

      {/* Calendar List */}
      <div className="space-y-8">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <h3 className="text-sm font-semibold text-text-primary mb-4">{date}</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="glass-card p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`w-2 h-10 rounded-full ${statusColors[item.status]?.split(" ")[0] || "bg-glass-border"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
                        <span>{item.author}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted" />
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-text-muted">
                      {new Date(item.scheduledDate).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                    </span>
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full capitalize ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
