import { useState } from "react";

export default function LiveIntel() {
  const [activeChannel, setActiveChannel] = useState("Cnbc");

  const channels = {
    india: "https://www.youtube.com/embed/uoK1dFpMo98?si=f8ijbBebiADoBElQ&autoplay=1&mute=1",
    Cnbc: "https://www.youtube.com/embed/live_stream?channel=UCvJJ_dzjViJCoLf5uKUTwoA&autoplay=1&mute=1",
    aljazeera: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1&mute=1",
    skynews: "https://www.youtube.com/embed/YDvsBbKfLPA?si=eFi9DPif0_DBMao8&autoplay=1&mute=1",
    CGTNeuro: "https://www.youtube.com/embed/_6dRRfnYJws?si=27OcMmVuouUkR8nT&autoplay=1&mute=1",
    france24: "https://www.youtube.com/embed/l8PMl7tUDIE?autoplay=1&mute=1",
    UATV_eng:"https://www.youtube.com/embed/uK7u5Cu4xh0?si=9uXITb7JIEDx8S0y&autopay=1&mute=1"
  };

  return (
    <section className="app-container">
      <h1 style={{color:"#72d4cf",fontSize:"40px"}}> Live News Intelligence</h1>

      <div className="channel-buttons">
        
        <button onClick={() => setActiveChannel("skynews")}>Skynews</button>
        <button onClick={() => setActiveChannel("CGTNeuro")}>CGTN Europe</button>
        <button onClick={() => setActiveChannel("aljazeera")}>Al Jazeera</button>
        <button onClick={() => setActiveChannel("france24")}>France 24</button>
        <button onClick={() => setActiveChannel("Cnbc")}>CNBC</button>
        <button onClick={() => setActiveChannel("UATV_eng")}>UATV-English</button>
        <button onClick={() => setActiveChannel("india")}>India(NDTV)</button>
        

      </div>

      <div className="video-wrapper">
        <iframe
          width="100%"
          height="500"
          src={channels[activeChannel]}
          title="Live News"
          
          allowFullScreen
        />
      </div>
    </section>
  );
}