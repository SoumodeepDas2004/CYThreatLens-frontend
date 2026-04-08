// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function NewsMap({ articles }) {

    const countryCoords = {
        USA: [37, -95],
        India: [20, 78],
        China: [35, 103],
        Russia: [60, 100],
        France: [46, 2],
        Ukraine: [48, 31],
        Israel: [31, 35],
        Unk: [0, 0]
    };

    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: "564px", width: "100%" }} className="newsmap">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {articles.map((article, index) => {

                if (!article.latitude || !article.longitude) return null;

                return (
                    <Marker
                        key={index}
                        position={[article.latitude, article.longitude]}

                    >
                        <Popup className="popup-container">
                            {article.country}<br />
                            <strong>{article.title}</strong><br />
                            <span>{article.source} </span>|| 
                            <a href={article.url} target="_blank">View Source</a>  
                            <br />
                            
            
                        </Popup>
                    </Marker>
                );

            })}
        </MapContainer>
    );
}