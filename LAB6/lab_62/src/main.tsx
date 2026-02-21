import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Outlet,
} from "react-router-dom";
import "./index.css";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import { getCourseById } from "./Data";

function Layout() {
    return (
        <div>
            <nav style={{
                background: "linear-gradient(135deg, #1a1a3e, #2d2d6e)",
                padding: "1rem 2rem",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                boxShadow: "0 2px 20px rgba(0,0,0,0.5)"
            }}>
                <span style={{ color: "#a78bfa", fontWeight: "bold", fontSize: "1.2rem" }}>
                    🎓 Student Portal
                </span>
                <Link to="/" style={{ color: "#c4b5fd", textDecoration: "none" }}>Home</Link>
                <Link to="/courses" style={{ color: "#c4b5fd", textDecoration: "none" }}>Courses</Link>
            </nav>
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "80vh",
                        textAlign: "center",
                        padding: "2rem"
                    }}>
                        <h1 style={{
                            fontSize: "3rem",
                            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginBottom: "1rem"
                        }}>
                            Welcome to Student Portal
                        </h1>
                        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "2rem" }}>
                            Explore your courses and start learning today
                        </p>
                        <Link to="/courses" style={{
                            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                            color: "#fff",
                            padding: "0.75rem 2rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "1rem"
                        }}>
                            Browse Courses →
                        </Link>
                    </div>
                ),
            },
            {
                path: "courses",
                element: <Courses />,
            },
            {
                path: "courses/:id",
                element: <CourseDetail />,
                errorElement: (
                    <div style={{ padding: "2rem", textAlign: "center" }}>
                        <h2 style={{ color: "#f87171", fontSize: "2rem" }}>❌ Course not found</h2>
                        <Link to="/courses" style={{ color: "#a78bfa" }}>← Back to Courses</Link>
                    </div>
                ),
                loader: async ({ params }) => {
                    const course = getCourseById(Number(params.id));
                    if (!course) throw new Error("Course not found");
                    return { course };
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);