import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./Data";

const colors = ["#7c3aed", "#2563eb", "#059669", "#d97706", "#dc2626"];

function Courses() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sort") || "asc";

    const sorted = [...courses].sort((a, b) =>
        sortOrder === "desc"
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
    );

    const toggleSort = () => {
        setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "2rem", color: "#a78bfa" }}>All Courses</h2>
                <button onClick={toggleSort} style={{
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    color: "#fff",
                    border: "none",
                    padding: "0.6rem 1.5rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}>
                    Sort: {sortOrder.toUpperCase()} {sortOrder === "asc" ? "↑" : "↓"}
                </button>
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
                {sorted.map((c, i) => (
                    <Link
                        key={c.id}
                        to={`/courses/${c.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div style={{
                            background: "#1e1e3a",
                            border: `1px solid ${colors[i % colors.length]}44`,
                            borderLeft: `4px solid ${colors[i % colors.length]}`,
                            borderRadius: "10px",
                            padding: "1.25rem 1.5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            transition: "transform 0.2s",
                            cursor: "pointer"
                        }}
                            onMouseEnter={e => (e.currentTarget.style.transform = "translateX(6px)")}
                            onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}
                        >
                            <div>
                                <h3 style={{ color: "#e2e8f0", marginBottom: "0.25rem" }}>{c.title}</h3>
                                <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>👤 {c.instructor}</span>
                            </div>
                            <span style={{ color: colors[i % colors.length], fontSize: "1.5rem" }}>→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Courses;