import { useState } from 'react'

const SETTINGS = [
  { label: 'Dark Mode',          desc: 'system.theme = dark',          def: true  },
  { label: 'Email Notifications', desc: 'notify.email = enabled',      def: false },
  { label: 'Two-Factor Auth',    desc: 'security.2fa = required',      def: true  },
  { label: 'Auto Updates',       desc: 'updates.auto = true',          def: false },
  { label: 'Analytics',          desc: 'telemetry.send = true',        def: true  },
]

export default function Settings() {
  const [toggles, setToggles] = useState(SETTINGS.map(s => s.def))

  const toggle = (i: number) =>
    setToggles(prev => prev.map((v, idx) => idx === i ? !v : v))

  return (
    <div className="page">
      <div className="settings-header">
        <h1>App <span>Settings</span></h1>
      </div>

      <div className="settings-group">
        {SETTINGS.map((s, i) => (
          <div key={s.label} className="settings-card">
            <div className="settings-card__info">
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </div>
            <button
              className={`toggle ${toggles[i] ? 'on' : ''}`}
              onClick={() => toggle(i)}
              aria-label={s.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}