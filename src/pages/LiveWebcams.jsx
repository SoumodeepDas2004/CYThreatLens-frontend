import { useState } from "react";

export default function LiveWebcams() {

    const [region, setRegion] = useState("middleeast");

    const streams = {
        middleeast: [
            { title: "Tel Aviv", url: "https://www.youtube.com/embed/gmtlJ_m2r5A?autoplay=1&mute=1" },
            { title: "Jerusalem", url: "https://www.youtube.com/embed/LbnIZclv1Mg?autoplay=1&mute=1" },
            { title: "Tehran", url: "https://www.youtube.com/embed/-zGuR1qVKrU?autoplay=1&mute=1" },
            { title: "Middle East Overview", url: "https://www.youtube.com/embed/4E-iFtUM2kk?autoplay=1&mute=1" }
        ],
        europe: [
            { title: "Kyiv", url: "https://www.youtube.com/embed/-Q7FuPINDjA?autoplay=1&mute=1" },
            { title: "Paris", url: "https://www.youtube.com/embed/OzYp4NRZlwQ?autoplay=1&mute=1" }
        ],
        asia: [
            { title: "Tokyo", url: "https://www.youtube.com/embed/4pu9sF5Qssw?autoplay=1&mute=1" },
            { title: "Shanghai", url: "https://www.youtube.com/embed/76EwqI5XZIc?autoplay=1&mute=1" },
            { title: "Seoul", url: "https://www.youtube.com/embed/-JhoMGoAfFc?autoplay=1&mute=1" }
        ],
        america: [
            { title: "Miami", url: "https://www.youtube.com/embed/5YCajRjvWCg?autoplay=1&mute=1" },
            { title: "New York City", url: "https://www.youtube.com/embed/4qyZLflp-sI?autoplay=1&mute=1" }
        ]
    };

    return (
        <div className="app-container">
            <h1 style={{color:"#72d4cf",fontSize:"40px"}}> Global Live Webcams </h1>

            <div className="region-tabs">
                <button onClick={() => setRegion("middleeast")}>Middle East</button>
                <button onClick={() => setRegion("europe")}>Europe</button>
                <button onClick={() => setRegion("asia")}>Asia</button>
                <button onClick={() => setRegion("america")}>America</button>
            </div>

            <div className="yt-grid">
                {streams[region].map((stream, index) => (
                    <div key={index} className="yt-card">
                        <div className="live-badge">LIVE</div>
                        <h4>{stream.title}</h4>
                        <iframe
                            src={stream.url}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title={stream.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}