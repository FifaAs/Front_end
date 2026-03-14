

interface ActivityFeedProps {
  count: number;
}

interface FeedItem {
  id: number;
  user: string;
  action: string;
  time: string;
}

export function ActivityFeed({ count }: ActivityFeedProps) {
  console.log("🔴 ActivityFeed re-rendered, count =", count);


  const feedItems: FeedItem[] = [
    { id: 1, user: "Alice",   action: "uploaded a file",      time: "2 min ago" },
    { id: 2, user: "Bob",     action: "commented on a post",  time: "5 min ago" },
    { id: 3, user: "Charlie", action: "liked your update",    time: "10 min ago" },
    { id: 4, user: "Diana",   action: "shared a document",    time: "15 min ago" },
    { id: 5, user: "Eve",     action: "mentioned you",        time: "20 min ago" },
  ];

  // ❌ UNOPTIMIZED: Inline filter runs on every render (no useMemo)
  const recentItems = feedItems.filter((_, i) => i < 5);

  return (
    <div className="activity-feed">
      <h2 className="activity-feed__title">
        Activity Feed{" "}
        <span className="activity-feed__badge">{count} updates</span>
      </h2>

      <ul className="activity-feed__list">
        {recentItems.map((item) => (
          <li key={item.id} className="activity-feed__item">
            {/* ❌ UNOPTIMIZED: Avatar initials recomputed inline per item per render */}
            <div className="activity-feed__avatar">
              {item.user[0]}
            </div>
            <div className="activity-feed__content">
              <span className="activity-feed__user">{item.user}</span>{" "}
              <span className="activity-feed__action">{item.action}</span>
            </div>
            <time className="activity-feed__time">{item.time}</time>
          </li>
        ))}
      </ul>

      <p className="activity-feed__footer">
        Render triggered {count} time{count !== 1 ? "s" : ""} by parent state.
      </p>
    </div>
  );
}