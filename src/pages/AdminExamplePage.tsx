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

interface SalesData {
  month: string;
  sales: number;
}

const salesMovieData: SalesData[] = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 150 },
  { month: "Mar", sales: 180 },
  { month: "Apr", sales: 130 },
  { month: "May", sales: 200 },
  { month: "Jun", sales: 170 },
  { month: "Jul", sales: 190 },
  { month: "Aug", sales: 160 },
  { month: "Sep", sales: 140 },
  { month: "Oct", sales: 210 },
  { month: "Nov", sales: 180 },
  { month: "Dec", sales: 220 },
];

const ExamplePage: React.FC = () => {
  const chartData = {
    labels: salesMovieData.map((data) => data.month),
    datasets: [
      {
        label: "Penjualan Bulanan",
        data: salesMovieData.map((data) => data.sales),
        backgroundColor: "rgb(245, 114, 28, 0.5)",
        borderColor: "rgb(245, 114, 28)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Penjualan Bulanan Tahun 2025",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Jumlah Penjualan",
        },
      },
      x: {
        title: {
          display: true,
          text: "Bulan",
        },
      },
    },
  };

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl  overflow-x-auto custom-scrollbar">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ExamplePage;