import { useParams, useLoaderData, Link } from "react-router-dom";
import { Course } from "./Data";

function CourseDetail() {
    const { id } = useParams();
    const { course } = useLoaderData() as { course: Course };

    return (
        <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
            <Link to="/courses" style={{
                color: "#a78bfa",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1.5rem"
            }}>
                ← Back to Courses
            </Link>

            <div style={{
                background: "#1e1e3a",
                border: "1px solid #7c3aed44",
                borderRadius: "12px",
                padding: "2rem"
            }}>
                <h2 style={{
                    fontSize: "2rem",
                    background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "1rem"
                }}>
                    {course.title}
                </h2>

                <div style={{
                    background: "#2d2d6e",
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    marginBottom: "1rem",
                    display: "inline-block"
                }}>
                    👤 <strong style={{ color: "#c4b5fd" }}>{course.instructor}</strong>
                </div>

                <p style={{ color: "#94a3b8", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                    {course.description}
                </p>

                <div style={{
                    borderTop: "1px solid #2d2d6e",
                    paddingTop: "1rem",
                    color: "#64748b",
                    fontSize: "0.85rem"
                }}>
                    Route ID parameter: <code style={{ color: "#a78bfa" }}>{id}</code>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;