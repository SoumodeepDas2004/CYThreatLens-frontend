export default function Footer() {
    return (
        <footer style={footerStyle}>
            © {new Date().getFullYear()} CYThreatLens · All Rights Reserved
        </footer>
    );
}

const footerStyle = {
    padding: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#72d4cf",
    borderTop: "1px solid rgba(0,255,200,0.2)",
    position: "relative",
    zIndex: 10,   // 🔥 FORCE ABOVE BACKGROUND
    background: "rgba(0,0,0,0.6)"
};