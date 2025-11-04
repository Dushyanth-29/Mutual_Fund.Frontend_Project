import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Investor from "./pages/Investor";
import Advisor from "./pages/Advisor";
import Analyst from "./pages/Analyst";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/analyst" element={<Analyst />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
