// import { Shield } from "lucide-react";

import { color } from "chart.js/helpers";
import { Italic } from "lucide-react";

export default function Header() {
    return (
        <div style={headerStyle}>
            <div style={brandContainer}>
                <img
                    src="/logo.ico"
                    alt="logo"
                style={{ width: "90px", height: "90px" }} 
                />
                </div>
                <span style={brandText}>CYThreatLens</span>
            
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
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 20px",
    background:  "linear-gradient(270deg, #051556, #290638)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #1e293b",
    zIndex: 1000,
    borderRadius:"1vh"
};

const brandContainer = {
    display: "flex",
    alignItems: "left",
    gap: "8px",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "0.5px"
};

const brandText = {
    color: "lightgreen",
    fontSize: "40px",
    fontWeight:"bolder"
};