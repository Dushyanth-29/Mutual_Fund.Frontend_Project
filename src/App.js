import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FundsPage from "./components/FundsPage";
import AdminDashboard from "./Dashboards/AdminDashboard";
import InvestorDashboard from "./Dashboards/InvestorDashboard";
import DataAnalystDashboard from "./Dashboards/DataAnalystDashboard";
import FinancialAdvisorDashboard from "./Dashboards/FinancialAdvisorDashboard";


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
