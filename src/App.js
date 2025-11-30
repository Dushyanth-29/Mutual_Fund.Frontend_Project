// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FundsPage from "./components/FundsPage";

import { FundProvider } from "./context/FundContext";

import AdminDashboard from "./Dashboards/AdminDashboard";
import InvestorDashboard from "./Dashboards/InvestorDashboard";
import DataAnalystDashboard from "./Dashboards/DataAnalystDashboard";
import FinancialAdvisorDashboard from "./Dashboards/FinancialAdvisorDashboard";

import AIChatBox from "./components/AIChatBox";

function App() {
  return (
    <FundProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funds" element={<FundsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/analyst" element={<DataAnalystDashboard />} />
          <Route path="/advisor" element={<FinancialAdvisorDashboard />} />
        </Routes>

        <AIChatBox />
      </Router>
    </FundProvider>
  );
}

export default App;
