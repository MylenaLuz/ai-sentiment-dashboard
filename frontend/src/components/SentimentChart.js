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

const SentimentChart = ({ data }) => {
  const chartData = {
    labels: data.map((tweet) => tweet.text.slice(0, 20) + "..."),
    datasets: [
      {
        label: "Score de Sentimento",
        data: data.map((tweet) => tweet.score),
        backgroundColor: data.map((tweet) =>
          tweet.sentiment === "Positivo"
            ? "#4ade80"
            : tweet.sentiment === "Negativo"
            ? "#f87171"
            : "#facc15"
        ),
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Análise de Sentimento dos Tweets" },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full mb-6">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SentimentChart;
