import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StaticSlopeDiagram: React.FC = () => {
  // Function to visualize (e.g., f(x) = x^3 - x)
  const f = (x: number) => x ** 3 - x;

  // Static points to illustrate slope approaching
  const x1 = 1; // Fixed point
  const hValues = [0.5, 0.2, 0.1]; // Static steps for secant lines

  const xValues = Array.from({ length: 101 }, (_, i) => -2 + i * 0.04);

  // Curve points
  const curvePoints = xValues.map((x) => ({ x, y: f(x) }));

  // Generate secant lines
  const secantLines = hValues.map((h) => {
    const x2 = x1 + h;
    const y1 = f(x1);
    const y2 = f(x2);
    const slope = (y2 - y1) / (x2 - x1);

    return xValues.map((x) => ({
      x,
      y: slope * (x - x1) + y1,
    }));
  });

  // Chart data
  const chartData = {
    datasets: [
      {
        label: "Curve (f(x) = x³ - x)",
        data: curvePoints,
        borderColor: "blue",
        fill: false,
        tension: 0.2,
      },
      ...secantLines.map((line, index) => ({
        label: `Secant Line (h = ${hValues[index]})`,
        data: line,
        borderColor: `rgba(255, 0, 0, ${0.8 - index * 0.3})`,
        borderDash: [5, 5],
        fill: false,
        tension: 0.2,
      })),
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      x: { title: { display: true, text: "x" } },
      y: { title: { display: true, text: "f(x)" } },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[300px] h-[300px] bg-white border rounded shadow-lg"
        style={{
          aspectRatio: "1 / 1", // Maintain 1:1 ratio
        }}
      >
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default StaticSlopeDiagram;
