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

function DashboardPage() {
  return (
    <>
      <SalesChart />
      <TicketSales />
    </>
  );
}

function SalesChart() {
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
        text: "Penjualan Tiket Bulanan Tahun 2025",
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
    <section className="bg-white rounded-3xl mx-auto mt-10 px-14 py-10 w-5xl">
        <h1 className="text-2xl font-bold mb-5">Sales Chart</h1>
        <div className="flex gap-5 flex-wrap">
          <div className="flex rounded-lg bg-gray-200 px-5 py-3">
            <input className="focus:outline-none" type="text" name="movieName" id="movieName" placeholder="Movie Name" />
          </div>
          <div className="bg-gray-200 rounded-lg px-5 py-3">
            <select  className="bg-gray-200 rounded-lg pr-5 focus:outline-none" name="period" id="period">
              <option value="Choose Period">Choose period</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <button className="bg-primary text-white font-bold rounded-lg px-8 py-2" type="button">
            Filter
          </button>
        </div>
        {/* <p className="text-xl font-semibold text-center my-20">Avengers: Infinity Wars</p> */}
        <div className="p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl min-w-4xl">
            <Bar data={chartData} options={options} />
          </div>
        </div>
      </section>
  )
}



const TicketSales: React.FC = () => {
  

  return (
   <>
     
   </> 
  )
};


export default DashboardPage;
