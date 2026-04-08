import { Italic } from "lucide-react";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export default function EmailAnalyzer() {
    const [result, setResult] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [loading, setLoading] = useState(false);

    const analyzeFile = async (file) => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setResult(null);

        try {
            const res = await fetch(`${API_URL}`+"/email/analyze-eml", {
                method: "POST",
                body: formData
            });

            const data = await res.json();
            setResult(data);
        } catch (err) {
            alert("Analysis failed");
        }

        setLoading(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        analyzeFile(e.dataTransfer.files[0]);
    };

    const handleFileSelect = (e) => {
        analyzeFile(e.target.files[0]);
    };

    const getRiskColor = (risk) => {
        if (risk === "High") return "#ef4444";
        if (risk === "Medium") return "#f97316";
        return "#22c55e";
    };

    return (
        <section style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",   
            alignItems: "center",
            gap: "20px"
        }}>


            <div style={{
                width: "90%",
                height:"50%",
                background: "linear-gradient(270deg, #22184a, #040e24)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px",
                padding: "25px",
            }}>
                <h2 style={{
                    color: "#72d4cf",
                    fontSize: "36px",
                    margin: 0,
                    padding:"10px"
                }}>
                    Email Threat Analyzer
                </h2>
            
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                style={{
                    width: "93%",
                    height:"20%",
                    minHeight: "380px",
                    border: dragging ? "2px solid #a78bfa" : "2px dashed #7c3aed",
                    borderRadius: "15px",
                    padding: "40px",
                    textAlign: "center",
                    backdropFilter: "blur(10px)",
                    background: "rgba(15, 23, 42, 0.75)",
                    color: "white",
                    transition: "0.3s"
                }}
            >


                <p style={{ color: "#cbd5e1" }}>
                    Drag & drop a <strong>.eml</strong> file or Upload .eml file manually
                </p>
                <p style={{ color: "#4a9270" }}>
                    <i style={{fontSize:"13px"}}>None of your email is stored to ensure confedentiality</i>
                </p>

                {/* Upload Button */}
                <div style={{ marginTop: "15px" }}>
                    <input
                        type="file"
                        accept=".eml"
                        onChange={handleFileSelect}
                        style={{ color: "white" }}
                    />
                </div>

                {dragging && (
                    <p style={{ color: "#a78bfa", marginTop: "10px" }}>
                        Drop file to analyze...
                    </p>

                )}

                {/* Loading State */}
                {loading && (
                    <p style={{ marginTop: "20px", color: "#38bdf8" }}>
                        Analyzing email...
                    </p>
                )}

                {/* RESULT */}
                {result && !loading && (
                    <div style={{
                        marginTop: "30px",
                        textAlign: "left",
                        background: "#020617",
                        padding: "20px",
                        borderRadius: "10px"
                    }}>
                        <h3>Analysis Result</h3>

                        <p><strong>From:</strong> {result.headers.from}</p>
                        <p><strong>Return-Path:</strong> {result.headers.return_path}</p>

                        <p>
                            <strong>Spoof Detection:</strong>{" "}
                            <span style={{
                                color: result.headers.spoof_possible ? "#ef4444" : "#22c55e",
                                fontWeight: "bold"
                            }}>
                                {result.headers.spoof_possible ? "Possible Spoofing" : "Clean"}
                            </span>
                        </p>

                        {/* LINKS */}
                        <div style={{ marginTop: "15px" }}>
                            <strong>Extracted Links:</strong>
                            {result.body.links.length > 0 ? (
                                result.body.links.map((l, i) => {
                                    const suspicious =
                                        l.includes("login") ||
                                        l.includes("verify") ||
                                        l.includes("secure");

                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                color: suspicious ? "#ef4444" : "#60a5fa",
                                                marginTop: "5px",
                                                fontSize: "14px"
                                            }}
                                        >
                                            🔗 {l}
                                        </div>
                                    );
                                })
                            ) : (
                                <p style={{ color: "#94a3b8" }}>No links found</p>
                            )}
                        </div>

                        {/* WHY RISKY */}
                        {result.reasons && result.reasons.length > 0 && (
                            <div style={{ marginTop: "15px" }}>
                                <strong>Why Risky:</strong>
                                <ul style={{ marginTop: "5px" }}>
                                    {result.reasons.map((r, i) => (
                                        <li key={i} style={{ color: "#facc15" }}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* RISK BADGE */}
                        <div style={{
                            marginTop: "20px",
                            padding: "12px",
                            borderRadius: "8px",
                            background: getRiskColor(result.risk_level),
                            textAlign: "center",
                            fontWeight: "bold"
                        }}>
                            Risk Level: {result.risk_level}
                        </div>
                    </div>
                )}
            </div>
        </div>
        </section>
    );
}