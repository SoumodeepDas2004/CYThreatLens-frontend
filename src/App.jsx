import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveIntel from "./pages/LiveIntel";
import WorldUpdate from "./pages/WorldUpdate";
import LiveWebcams from "./pages/LiveWebcams";
import SOC from "./pages/Filecheck";
import EmailChecker from "./pages/EmailChecker";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/footer";
import { useEffect } from "react";
// import { color } from "chart.js/helpers";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  useEffect(() => {
    fetch(`${API_URL}`)
      .then(() => console.log("Backend wake-up ping sent"))
      .catch(() => console.log("Backend waking up..."));
  }, []);
  return (
  <Router>

    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>

      <Header />

      {/* Background layers */}
      <div className="cyber-bg"></div>
      <div className="cyber-overlay"></div>

      {/* MAIN CONTENT */}
      <div className="mainapp-container" style={{ flex: 1 }}>

        {/* NAV */}
        <nav style={{
          display: "flex",
          gap: "50px",
          margin: "10px",
          borderBottom: "1px solid #334155",
          padding: "5px",
          background: "black",
          opacity: ".7",
          borderRadius: "2vh",
          fontSize: "18px"
        }}>
          <NavLink to="/" end className="nav-link">About Us</NavLink>
          <NavLink to="/Dashboard" className="nav-link">IP Scan & Dashboard</NavLink>
          <NavLink to="/filecheck" className="nav-link">File Inteligence</NavLink>
          <NavLink to="/email" className="nav-link">Email Checker</NavLink>
          <NavLink to="/live" className="nav-link">Live Intelligence</NavLink>
          <NavLink to="/world" className="nav-link">World Update</NavLink>
          <NavLink to="/webcams" className="nav-link">Live Webcams</NavLink>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/live" element={<LiveIntel />} />
          <Route path="/world" element={<WorldUpdate />} />
          <Route path="/webcams" element={<LiveWebcams />} />
          <Route path="/filecheck" element={<SOC />} />
          <Route path="/email" element={<EmailChecker />} />
        </Routes>

      </div>

      {/* ✅ FOOTER ALWAYS VISIBLE */}
      <Footer />

    </div>

  </Router>
);}

export default App;