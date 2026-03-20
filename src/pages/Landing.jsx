import { Radius } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
    const [hover, setHover] = useState(false);

    return (
        <div style={{
            background: "linear-gradient(270deg, #152920, #0e1422)",
            color: "white",
            minHeight: "100vh",
            padding: "80px 30px",
            fontFamily: "Inter, Arial",
            borderRadius: "2vh",
            border: "solid 1px rgba(255,255,255,0.3) "
        }}>

            <div style={{ maxWidth: "1100px", margin: "auto" }}>

                {/* HERO */}
                <div style={{ marginBottom: "80px" }}>
                    <h1 style={{
                        fontSize: "54px",
                        marginBottom: "20px",
                        fontWeight: "700"
                    }}>
                        CYThreatLens
                    </h1>

                    <p style={{
                        fontSize: "20px",
                        maxWidth: "750px",
                        color: "#72d4cf",
                        lineHeight: "1.7"
                    }}>
                        An Integrated Cyber Threat Intelligence & SOC Monitoring Platform
                        built to analyze IP reputation, perform file hash intelligence,
                        monitor global geopolitical risks, visualize threat patterns,
                        and simulate real-world Security Operations workflows.
                    </p>

                    <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
                        <Link to="/Dashboard">
                            <button
                                style={{
                                    ...primaryBtn,
                                    background: hover
                                        ? "linear-gradient(310deg, rgb(58, 64, 237), rgba(168, 72, 166, 0.54))"
                                        : primaryBtn.background,
                                    boxShadow: hover
                                        ? "0 0 35px rgb(89, 214, 51)"
                                        : primaryBtn.boxShadow,
                                    transform: hover ? "translateY(-3px) scale(1.03)" : "none",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Enter Intelligence Console →
                            </button>
                        </Link>
                    </div>
                </div>

                {/* PLATFORM MODULES */}
                <section style={{ marginBottom: "80px" }}>
                    <h2 style={{ marginBottom: "25px" }}>Platform Modules</h2>

                    <div style={gridStyle}>
                        {modules.map((item, index) => (
                            <div key={index} style={cardStyle}>
                                <h4 style={{ marginBottom: "10px" }}>{item.title}</h4>
                                <p style={textStyle}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OBJECTIVE */}
                <section style={{ marginBottom: "60px" }}>
                    <h2 style={{ marginBottom: "15px" }}>Objective</h2>
                    <p style={textStyle}>
                        CYThreatLens is designed as a lightweight Security Operations
                        Center (SOC) simulation platform. It integrates open threat
                        intelligence sources including AbuseIPDB, VirusTotal, and
                        real-time news feeds to provide enrichment, scoring,
                        visualization, and monitoring of cyber risk indicators
                        across global regions.
                    </p>
                </section>

                {/* TECHNOLOGY STACK */}
                <section style={{ marginBottom: "60px" }}>
                    <h2 style={{ marginBottom: "15px" }}>Technology Stack</h2>
                    <p style={textStyle}>
                        FastAPI · PostgreSQL · React · Leaflet Maps · AbuseIPDB API ·
                        VirusTotal API · NewsAPI · Open Web Intelligence Feeds
                    </p>
                </section>

                {/* CREATOR */}
                <section>
                    <h2 style={{ marginBottom: "15px" }}>Developer</h2>
                    <p style={textStyle}>
                        Developed by Soumodeep Das as a full-stack cybersecurity
                        engineering project focused on threat intelligence enrichment,
                        data aggregation, visualization systems, and SOC dashboard design.
                    </p>
                </section>

            </div>
        </div>
    );
}

/* ===== DATA ===== */

const modules = [
    {
        title: "IP Threat Intelligence",
        desc: "IP reputation analysis using AbuseIPDB with geo enrichment, ASN detection, and dynamic risk scoring."
    },
    {
        title: "File Hash Intelligence",
        desc: "Manual hash analysis and drag-and-drop file scanning using VirusTotal API with detection ratio visualization."
    },
    {
        title: "Global Threat Map",
        desc: "Interactive map visualization of country-level threat aggregation and geopolitical risk patterns."
    },
    {
        title: "Live Intelligence Feed",
        desc: "Real-time monitoring of global conflicts, war reports, and geopolitical events."
    },
    {
        title: "Cyber & Tech Monitoring",
        desc: "Dedicated section for cybersecurity and technology news tracking."
    },
    {
        title: "Global Webcams",
        desc: "Live YouTube webcam feeds from high-interest geopolitical regions."
    }
];

/* ===== STYLES ===== */

const primaryBtn = {
    padding: "15px 30px",
    background: "linear-gradient(310deg, rgb(31, 35, 118), rgb(22, 7, 30))",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(142, 214, 237, 0.7)"
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
};

const cardStyle = {
    background: "linear-gradient(310deg, rgb(16, 44, 16),black, rgb(7, 5, 37))",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid #231a87",
    color: "lightgreen",
    boxShadow: "0 0 15px rgba(43, 233, 56, 0.74)"
};

const textStyle = {
    color: "#2cc6c9",
    lineHeight: "1.7"
};