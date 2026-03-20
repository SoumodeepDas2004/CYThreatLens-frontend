import { Link } from "react-router-dom";

export default function EmailChecker() {
    return (
        <div style={container}>
            
            <div style={card}>
                <h1 style={title}>Email Intelligence Module</h1>

                <p style={message}>
                    🚧 This Feature is Under Development 🚧
                </p>

                <p style={subText}>
                    We're currently building advanced email threat analysis capabilities,
                    including phishing detection, header analysis, and reputation scoring.
                </p>

                <Link to="/Dashboard">
                    <button style={button}>
                        ← Back to Dashboard
                    </button>
                </Link>
            </div>

        </div>
    );
}

/* ===== STYLES ===== */

const container = {
    minHeight: "100vh",
    background: "linear-gradient(270deg, #152920, #0e1422)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Inter, Arial",
};

const card = {
    background: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    maxWidth: "600px",
    border: "1px solid rgba(100,150,255,0.3)",
    boxShadow: "0 0 30px rgba(58, 64, 237, 0.4)",
    backdropFilter: "blur(8px)"
};

const title = {
    fontSize: "32px",
    marginBottom: "20px"
};

const message = {
    fontSize: "22px",
    color: "#72d4cf",
    marginBottom: "15px",
    fontWeight: "600"
};

const subText = {
    fontSize: "16px",
    color: "#aaa",
    lineHeight: "1.6",
    marginBottom: "30px"
};

const button = {
    padding: "12px 25px",
    background: "linear-gradient(310deg, rgb(31, 35, 118), rgb(22, 7, 30))",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 0 20px rgba(58, 64, 237, 0.5)"
};