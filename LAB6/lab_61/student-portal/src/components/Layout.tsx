import { NavLink, Outlet } from "react-router-dom";

const navStyle: React.CSSProperties = {
  alignItems: "center",
  padding: "16px 32px",
  backgroundColor: "#1e1e2e",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
};

const linkStyle: React.CSSProperties = {
  color: "#a6adc8",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 500,
  padding: "6px 12px",
  borderRadius: "8px",
  transition: "all 0.2s",
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: "#cba6f7",
  backgroundColor: "#313244",
};

const mainStyle: React.CSSProperties = {
  minHeight: "calc(100vh - 120px)",
  padding: "40px 32px",
  backgroundColor: "#181825",
  color: "#cdd6f4",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "16px",
  backgroundColor: "#1e1e2e",
  color: "#585b70",
  fontSize: "14px",
};

function Layout() {
  return (
    <>
      <nav style={navStyle}>
        <span style={{ color: "#cba6f7", fontWeight: 700, marginRight: "auto" }}>
          Student Portal
        </span>
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          About
        </NavLink>
      </nav>

      <main style={mainStyle}>
        <Outlet />
      </main>

      <footer style={footerStyle}>
        <p>Student Portal 2026</p>
      </footer>
    </>
  );
}

export default Layout;