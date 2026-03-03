import { useEffect, useState } from "react";
import { getCountryStats, scanIP } from "../services/api";
import WorldMap from "../components/WorldMap";
import LatestScans from "../components/LatestScans";
export default function Dashboard() {
    const [stats, setStats] = useState([]);
    const [ip, setIp] = useState("");
    const [scanResult, setScanResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadData = () => {
        getCountryStats().then(res => {
            setStats(res.data);
        });
    };

    const handleScan = async () => {
        if (!ip) return;

        setLoading(true);
        try {
            const res = await scanIP(ip);
            setScanResult(res.data);
            loadData(); // refresh dashboard stats after scan
        } catch (err) {
            alert("Scan failed");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();

        const interval = setInterval(() => {
            loadData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const getRiskBadge = (level) => {
        let color = "#22c55e"; // default green

        if (level === "High") color = "#ef4444";       // red
        if (level === "Medium") color = "#f97316";     // orange

        return (
            <span
                style={{
                    backgroundColor: color,
                    padding: "4px 10px",
                    borderRadius: "12px",
                    color: "white",
                    fontWeight: "bold"
                }}
            >
                {level}
            </span>
        );
    };
    return (
        <div className="app-container">
            <h1>CYThreatLens IP Dashboard</h1>

            {/*  Scan Section */}
            <div style={{ marginBottom: "30px", background: "#1e293b", padding: "20px", borderRadius: "8px" }}>
                <h3>Scan IP Address</h3>

                <input
                    type="text"
                    placeholder="Enter IP address..."
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    style={{ padding: "8px", width: "250px", marginRight: "10px" }}
                />

                <button onClick={handleScan} disabled={loading}>
                    {loading ? "Scanning..." : "Scan"}
                </button>

                {scanResult && (
                    <div style={{ marginTop: "20px" }}>
                        <h4>Scan Result:</h4>
                        <p><strong>IP:</strong> {scanResult.ip}</p>
                        <p><strong>Country:</strong> {scanResult.country}</p>
                        <p><strong>Abuse Score:</strong> {scanResult.abuse_score}</p>
                        <p><strong>Threat Score:</strong> {scanResult.threat_score}</p>
                        <p>
                            <strong>Risk Level:</strong> {getRiskBadge(scanResult.risk_level)}
                        </p>
                    </div>
                )}
                <LatestScans />
            </div>
            {/*  Country Stats */}
            <h3>Country Threat Overview </h3>

            <table border="1" cellPadding="8" style={{ marginTop: "20px", background: "#1e293b" }}>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Scans</th>
                        <th>Avg Threat Score</th>
                        <th>High Risk Count</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((c, index) => (
                        <tr key={index}>
                            <td>{c.country}</td>
                            <td>{c.total_scans}</td>
                            <td>{c.avg_threat_score}</td>
                            <td>{c.high_risk_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <WorldMap />
        </div>
    );
}