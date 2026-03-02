import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { getMapData } from "../services/api";

export default function WorldMap() {
    const [data, setData] = useState([]);

    const loadMapData = () => {
        getMapData().then(res => {
            setData(res.data);
        });
    };

    useEffect(() => {
        loadMapData();
        const interval = setInterval(loadMapData, 10000);
        return () => clearInterval(interval);
    }, []);

    const getColor = (risk) => {
        if (risk === "High") return "#ef4444";     // red
        if (risk === "Medium") return "#f97316";   // orange
        return "#22c55e";                          // green
    };

    return (
        <div style={{ marginTop: "30px" }}>
            <h3>Global Threat Map</h3>

            <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "500px", width: "100%", borderRadius: "10px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data.map((item, index) => (
                    <CircleMarker
                        key={index}
                        center={[item.lat, item.lon]}
                        radius={item.risk_level === "High" ? 12 : 8}
                        pathOptions={{
                            color: getColor(item.risk_level),
                            fillColor: getColor(item.risk_level),
                            fillOpacity: 0.7
                        }}
                        className={item.risk_level === "High" ? "pulse-marker" : ""}
                    >
                        <Popup>
                            <strong>IP:</strong> {item.ip} <br />
                            <strong>Country:</strong> {item.country} <br />
                            <strong>Threat Score:</strong> {item.threat_score} <br />
                            <strong>Risk:</strong> {item.risk_level}
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
}