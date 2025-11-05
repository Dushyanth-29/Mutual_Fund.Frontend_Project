import React, { useContext } from "react";
import { FundContext } from "../context/FundContext";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const DataAnalystDashboard = () => {
  const { funds } = useContext(FundContext);

  const data = {
    labels: funds.map((f) => f.name),
    datasets: [
      {
        label: "Annual Growth (%)",
        data: funds.map((f) => f.growth),
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Analyst Dashboard</h2>
      <p>Analyze fund growth performance over time.</p>
      <div style={{ maxWidth: "600px" }}>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default DataAnalystDashboard;
