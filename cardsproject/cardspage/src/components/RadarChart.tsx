import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const RadarChart: React.FC = () => {
  const data = {
    labels: ["React", "CSS", "JavaScript", "TypeScript", "HTML", "Redux"],
    datasets: [
      {
        label: "Proficiency (%)",
        data: [90, 85, 88, 75, 95, 80],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        fill: true,
      },
      {
        label: "Interest Level (%)",
        data: [95, 80, 90, 85, 90, 70],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Frontend Skill Visualization",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
