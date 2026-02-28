const About = () => {
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", paddingTop: "4rem" }}>
            <div style={{ fontSize: "4rem" }}>📖</div>
            <h1 style={{ fontSize: "2rem", color: "#6366f1", marginBottom: "1rem" }}>About Page</h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>
                This is the About page, lazy-loaded with React.lazy() and Suspense.
            </p>
        </div>
    );
};

export default About;