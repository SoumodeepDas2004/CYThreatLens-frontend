import { color } from "chart.js/helpers";
import { useState, useEffect } from "react";
// import './../index.css'
export default function Filecheck() {

    const [hashInput, setHashInput] = useState("");
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);
    const [dragActive, setDragActive] = useState(false);

    // ===== Calculate SHA256 (Browser Native) =====
    const calculateSHA256 = async (file) => {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    };

    // ===== Send hash to backend =====
    const analyzeHash = async (hash) => {
        const res = await fetch("http://127.0.0.1:8000/soc/file", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ hash })
        });

        const data = await res.json();
        setResult(data);
        loadHistory();
    };

    // ===== Manual Input Submit =====
    const handleManualSubmit = () => {
        if (!hashInput) return;
        analyzeHash(hashInput.trim());
    };

    // ===== Drag & Drop =====
    const handleDrop = async (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files[0];
        if (!file) return;

        const sha256 = await calculateSHA256(file);
        analyzeHash(sha256);
    };

    const loadHistory = async () => {
        const res = await fetch("http://127.0.0.1:8000/soc/history");
        const data = await res.json();
        setHistory(data);
    };

    useEffect(() => {
        loadHistory();
    }, []);

    const getRiskColor = (risk) => {
        if (risk === "High") return "#ef4444";
        if (risk === "Medium") return "#f59e0b";
        return "#22c55e";
    };

    return (
        <div style={{ maxWidth: "1200px", margin: "auto", background:"4987F2" }}>

            <h1> SOC File Intelligence</h1>

            {/* ===== Manual Hash Input ===== */}
            <div style={{
                background: "#172136",
                padding: "25px",
                borderRadius: "12px",
                marginBottom: "25px"
            }}>
                <h3 style={{ marginBottom: "15px" , fontSize:"20px"} }>
                    Analyze by Hash (MD5 / SHA1 / SHA256)
                </h3>

                <div style={{ display: "flex", gap: "15px" }}>
                    <input
                        type="text"
                        placeholder='Enter the file’s MD5 hash (generate it using: certutil -hashfile "C:\full\path\to\file" MD5)."in your CMD '
                        value={hashInput}
                        onChange={(e) => setHashInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleManualSubmit();
                        }}
                        style={{
                            flex: 1,
                            padding: "6px",
                            borderRadius: "8px",
                            border: "1px solid #f940f9",
                            background: "#182545",
                            color: "white"
                        }}
                    />
                    <span><button   onClick={handleManualSubmit} > Scan   </button></span>
                    
                </div>
                
            </div>

            {/* ===== Drag & Drop ===== */}
            <div
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                style={{
                    border: "2px dashed #7c3aed",
                    padding: "50px",
                    textAlign: "center",
                    borderRadius: "12px",
                    background: dragActive ? "#1e1b4b" : "#0f172a",
                    marginBottom: "40px"
                }}
            >
                <p style={{ fontSize: "18px" }}>
                    Or Drag & Drop File Here
                </p>
            </div>

            {/* ===== Result ===== */}
            {result && (
                <div style={{
                    background: "#25216b",
                    padding: "30px",
                    borderRadius: "12px",
                    marginBottom: "40px"
                }}>
                    <h2 style={{ marginBottom: "20px" }}>Analysis Result</h2>

                    {/* Detection Badge */}
                    <div style={{
                        marginBottom: "25px",
                        fontSize: "18px"
                    }}>
                        <span style={{
                            background:
                                result.total_detected > 10 ? "#ef4444" :
                                    result.total_detected > 0 ? "#f59e0b" :
                                        "#22c55e",
                            padding: "10px 20px",
                            borderRadius: "30px",
                            fontWeight: "bold"
                        }}>
                            {result.total_detected} / {result.total_engines} Engines Detected
                        </span>
                    </div>

                    {/* Detailed Stats */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "20px"
                    }}>
                        <div>
                            <h4>Malicious</h4>
                            <p style={{ fontSize: "24px", color: "#ef4444" }}>
                                {result.malicious}
                            </p>
                        </div>

                        <div>
                            <h4>Suspicious</h4>
                            <p style={{ fontSize: "24px", color: "#f59e0b" }}>
                                {result.suspicious}
                            </p>
                        </div>

                        <div>
                            <h4>Harmless</h4>
                            <p style={{ fontSize: "24px", color: "#15f266" }}>
                                {result.harmless}
                            </p>
                        </div>

                        <div>
                            <h4>Undetected</h4>
                            <p style={{ fontSize: "24px", color: "#94a3b8" }}>
                                {result.undetected}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* ===== History ===== */}
            <div>
                <h2>Recent File Scans</h2>
                {history.map((item) => (
                    <div key={item.id}>
                        {item.hash || item.md5} - {item.risk_level}
                    </div>
                ))}
            </div>

        </div>
    );
}