import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const BrokenPage = lazy(() => import("./pages/BrokenPage"));

function LoadingSpinner() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            flexDirection: "column",
            gap: "1rem"
        }}>
            <div style={{
                width: "48px",
                height: "48px",
                border: "5px solid #e2e8f0",
                borderTop: "5px solid #6366f1",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
            }} />
            <p style={{ color: "#6366f1", fontWeight: 500 }}>Loading...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

function ErrorFallback() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: "1rem",
            textAlign: "center"
        }}>
            <div style={{ fontSize: "4rem" }}>💥</div>
            <h2 style={{ color: "#ef4444", fontSize: "1.5rem", margin: 0 }}>
                Something went wrong
            </h2>
            <p style={{ color: "#94a3b8", margin: 0 }}>
                The component failed to load.
            </p>
            <button
                onClick={() => window.location.reload()}
                style={{
                    padding: "0.6rem 1.5rem",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "1rem"
                }}
            >
                Reload Page
            </button>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f1f5f9", fontFamily: "sans-serif" }}>

                {/* Navbar */}
                <nav style={{
                    backgroundColor: "#1e293b",
                    padding: "1rem 2rem",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
                }}>
                    <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "#6366f1" }}>
                        ⚛ Lab 07-2
                    </span>
                    {["/ Home", "/about About", "/broken Broken Page"].map((item) => {
                        const [path, label] = item.split(" ");
                        return (
                            <Link
                                key={path}
                                to={path}
                                style={{
                                    color: "#94a3b8",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    padding: "0.4rem 0.8rem",
                                    borderRadius: "6px",
                                    transition: "all 0.2s"
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = "#6366f1")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Content */}
                <main style={{ padding: "2rem" }}>
                    <ErrorBoundary fallback={<ErrorFallback />}>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/broken" element={<BrokenPage />} />
                            </Routes>
                        </Suspense>
                    </ErrorBoundary>
                </main>

            </div>
        </BrowserRouter>
    );
}

export default App;