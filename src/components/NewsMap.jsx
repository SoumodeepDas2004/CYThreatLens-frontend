import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function NewsMap({ articles }) {

    const countryCoords = {
        USA: [37, -95],
        India: [20, 78],
        China: [35, 103],
        Russia: [60, 100],
        France: [46, 2],
        Ukraine: [48, 31],
        Israel: [31, 35]
    };

    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {articles.map((article, index) => {
                const coords = countryCoords[article.country];
                if (!coords) return null;

                return (
                    <Marker key={index} position={coords}>
                        <Popup>
                            <strong>{article.title}</strong><br />
                            {article.source}
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}