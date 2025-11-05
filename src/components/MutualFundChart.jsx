import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const MutualFundChart = ({ funds }) => {
  const types = {};
  funds.forEach((f) => (types[f.type] = (types[f.type] || 0) + 1));

  const data = {
    labels: Object.keys(types),
    datasets: [
      {
        label: "Fund Type Distribution",
        data: Object.values(types),
        backgroundColor: ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default MutualFundChart;
