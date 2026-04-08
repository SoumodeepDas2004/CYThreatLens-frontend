// import { Shield } from "lucide-react";

// import { color, fontString } from "chart.js/helpers";
// import { Italic } from "lucide-react";

import UTCClock from "./clock";
export default function Header() {
    return (
        <div style={headerStyle}>
            <div style={brandContainer}>
                <img
                    src="/logo.ico"
                    alt="logo"
                style={{ width: "90px", height: "90px" }} 
                /><span style={brandText}>CYThreatLens</span>
                </div>
                
            <span style={{}} ><UTCClock /></span>

        </div>
    );
}

const headerStyle = {
    position: "sticky",
    top: 0,
    right: 0,
    left: 0,
    height: "60px",
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "center",
    // padding: "0 5px",
    background:  "linear-gradient(270deg, #12246b, #290638)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #1e293b",
    zIndex: 1000,
    borderRadius:"1vh",
    //  display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px"
};

const brandContainer = {
    display: "flex",
    alignItems: "left",
    gap: "8px",
    fontWeight: "300",
    fontSize: "20px",
    letterSpacing: "0.5px"
};

const brandText = {
    color: "rgb(113, 192, 176)",
    fontSize: "40px",
    fontWeight:"bold",
    fontString:"Brush Script MT",
    padding:"15px 2px"
    // fontString:"Papyrus"
};