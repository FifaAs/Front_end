const stats = [
  { label: 'Active Users',  value: '12.4k', delta: '+8.2% this week',  cls: 'c1' },
  { label: 'Revenue',       value: '$94.1k', delta: '+12.5% this week', cls: 'c2' },
  { label: 'Uptime',        value: '99.9%', delta: 'all systems go',   cls: 'c3' },
]

const activity = [
  { color: '#00d9ff', text: 'New user registered',       time: '2 min ago' },
  { color: '#7fff6b', text: 'Deploy #48 succeeded',      time: '14 min ago' },
  { color: '#ff6b6b', text: 'High memory usage alert',   time: '1 hr ago' },
  { color: '#00d9ff', text: 'API rate limit reached',    time: '3 hr ago' },
]

export default function Dashboard() {
  return (
    <div className="page">
      <div className="dash-header">
        <h1>Good morning, <span>Alex</span></h1>
        <p>// last login: today at 09:41 · session active</p>
      </div>

      <div className="dash-stats">
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card__label">{s.label}</div>
            <div className={`stat-card__value ${s.cls}`}>{s.value}</div>
            <div className="stat-card__delta">↑ {s.delta}</div>
          </div>
        ))}
      </div>

      <div className="dash-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {activity.map((a, i) => (
            <div key={i} className="activity-item">
              <div className="activity-dot" style={{ background: a.color }} />
              <p>{a.text}</p>
              <span style={{ marginLeft: 'auto' }}>{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}