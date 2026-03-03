import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveIntel from "./pages/LiveIntel";
import WorldUpdate from "./pages/WorldUpdate";
import LiveWebcams from "./pages/LiveWebcams";
function App() {
  return (
    <Router>
      <div className="app-container">

        {/* Top Navigation */}
        <nav style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          borderBottom: "1px solid #334155",
          paddingBottom: "10px"
        }}>
          <NavLink to="/" end className="nav-link">IP Scan Dashboard</NavLink>
          <NavLink to="/live" className="nav-link">Live Intelligence</NavLink>
          <NavLink to="/world" className="nav-link">World Update</NavLink>
          <NavLink to="/webcams" className="nav-link">Webcams</NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/live" element={<LiveIntel />} />
          <Route path="/world" element={<WorldUpdate />} />
          <Route path="/webcams" element={<LiveWebcams />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;