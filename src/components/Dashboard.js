import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["SBI", "HDFC", "Axis", "ICICI", "Kotak"],
    datasets: [
      {
        label: "Returns (%)",
        data: [10, 14, 8, 12, 9],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Mutual Fund IQ Dashboard" },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;