// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FundsPage from "./components/FundsPage";
import { FundProvider } from "./context/FundContext";
import AdminDashboard from "./Dashboards/AdminDashboard";
import InvestorDashboard from "./Dashboards/InvestorDashboard";
import DataAnalystDashboard from "./Dashboards/DataAnalystDashboard";
import FinancialAdvisorDashboard from "./Dashboards/FinancialAdvisorDashboard";

// Import the AI Chatbox
import AIChatBox from "./components/AIChatBox";

function App() {
  return (
    <FundProvider>
      <Router>
        <>
          {/* Navigation Bar */}
          <Navbar />

          {/* All Routes */}
          <Routes>
            <Route path="/funds" element={<FundsPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/investor" element={<InvestorDashboard />} />
            <Route path="/analyst" element={<DataAnalystDashboard />} />
            <Route path="/advisor" element={<FinancialAdvisorDashboard />} />
          </Routes>

          {/* AI Chatbox — Floating assistant */}
          <AIChatBox />
        </>
      </Router>
    </FundProvider>
  );
}

export default App;
