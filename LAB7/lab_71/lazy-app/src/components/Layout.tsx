import { Link, NavLink, Outlet } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',          label: 'Dashboard', end: true  },
  { to: '/settings',  label: 'Settings',  end: false },
  { to: '/profile',   label: 'Profile',   end: false },
]

export default function Layout() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="navbar__brand">◈ LazyApp</Link>
        <nav className="navbar__nav">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        react-router-dom v6 · vite · typescript · code splitting
      </footer>
    </div>
  )
}