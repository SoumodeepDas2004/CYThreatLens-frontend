import { useEffect, useState } from "react";
import { getHistory } from "../services/api";

export default function LatestScans() {
    const [scans, setScans] = useState([]);

    const loadData = () => {
        getHistory().then(res => {
            setScans(res.data.slice(0, 10));
        });
    };

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 5000);
        return () => clearInterval(interval);
    }, []);

    const getRiskColor = (risk) => {
        if (risk === "High") return "#ef4444";
        if (risk === "Medium") return "#f97316";
        return "#22c55e";
    };

    return (
        <div style={{ marginTop: "30px", background: "#42186c", padding: "20px", borderRadius: "10px" }}>
            <h3>Latest Threat Scans</h3>

            <table width="100%" cellPadding="8">
                <thead>
                    <tr>
                        <th align="left">IP</th>
                        <th align="left">Country</th>
                        <th align="left">Threat Score</th>
                        <th align="left">Risk</th>
                    </tr>
                </thead>
                <tbody>
                    {scans.map((scan, index) => (
                        <tr key={index} style={{ borderBottom: "1px solid #334155" }}>
                            <td>{scan.ip}</td>
                            <td>{scan.country}</td>
                            <td>{scan.threat_score}</td>
                            <td>
                                <span
                                    style={{
                                        backgroundColor: getRiskColor(scan.risk_level),
                                        padding: "4px 10px",
                                        borderRadius: "12px",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {scan.risk_level}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}