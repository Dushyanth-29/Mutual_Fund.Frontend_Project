import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MutualFundChart = () => {
  const data = {
    labels: ["SBI", "HDFC", "Axis", "ICICI", "Kotak"],
    datasets: [
      {
        label: "Returns (%)",
        data: [10, 14, 8, 12, 9],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Mutual Fund Performance" },
    },
  };

  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MutualFundChart;
