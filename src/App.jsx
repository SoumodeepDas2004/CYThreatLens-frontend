import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveIntel from "./pages/LiveIntel";
import WorldUpdate from "./pages/WorldUpdate";
import LiveWebcams from "./pages/LiveWebcams";
import SOC from "./pages/Filecheck";
import Landing from "./pages/Landing";
import Header from "./components/Header";

function App() {
  return (
    <Router>
       {/* Global Header */}
      <div><Header /></div>

      <div className="mainapp-container" >

        {/* Top Navigation */}
        <nav style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          borderBottom: "1px solid #334155",
          paddingBottom: "10px"
        }}>
          <NavLink to="/" end className="nav-link">About</NavLink>
          <NavLink to="/Dashboard"  className="nav-link">IP Scan Dashboard</NavLink>
          <NavLink to="/filecheck" className="nav-link">File Inteligence</NavLink>
          <NavLink to="/live" className="nav-link">Live Intelligence</NavLink>
          <NavLink to="/world" className="nav-link">World Update</NavLink>
          <NavLink to="/webcams" className="nav-link">Webcams</NavLink>
          

        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/live" element={<LiveIntel />} />
          <Route path="/world" element={<WorldUpdate />} />
          <Route path="/webcams" element={<LiveWebcams />} />
          <Route path="/filecheck" element={<SOC />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;