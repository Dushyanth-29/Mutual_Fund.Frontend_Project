import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FundsPage from "./components/FundsPage";
import AdminDashboard from "./dashboards/AdminDashboard";
import InvestorDashboard from "./dashboards/InvestorDashboard";
import DataAnalystDashboard from "./dashboards/DataAnalystDashboard";
import FinancialAdvisorDashboard from "./dashboards/FinancialAdvisorDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FundsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/investor" element={<InvestorDashboard />} />
        <Route path="/analyst" element={<DataAnalystDashboard />} />
        <Route path="/advisor" element={<FinancialAdvisorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
