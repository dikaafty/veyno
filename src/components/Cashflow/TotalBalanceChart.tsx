import {
  Chart as ChartJS,
  registerables,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { fullCasflowMock } from "@/lib/constants";
import { Chart } from "react-chartjs-2";

ChartJS.register(...registerables);

type Data = {
  revenue: number;
  expenses: number;
};

type CombinedChart = "bar" | "line";

const TotalBalanceChart = () => {
  const lastWeekCashflow = fullCasflowMock.slice(2);
  const lastWeekRevenue = lastWeekCashflow.map((item) => item.revenue);
  const lastWeekExpenses = lastWeekCashflow.map((item) => item.expenses);

  const getWeeklyMovingAverage = (data: Data[]) => {
    const netBalances = data.map((item) => item.revenue - item.expenses);
    const windowSize = 3;

    return netBalances
      .map((_, i, arr) => {
        const start = Math.max(0, i - (windowSize - 1));
        const slice = arr.slice(start, i + 1);
        return Math.round(slice.reduce((a, b) => a + b, 0) / slice.length);
      })
      .slice(2);
  };

  const data: ChartData<CombinedChart> = {
    labels: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line" as const,
        label: "Moving Average",
        data: getWeeklyMovingAverage(fullCasflowMock),
        borderColor: "#FFFFFF",
        borderWidth: 2,
        tension: 0.4,
        borderDash: [7, 7],
      },
      {
        type: "bar" as const,
        label: "Revenue",
        data: lastWeekRevenue,
        backgroundColor: "#768BDE",
        borderRadius: 10,
      },
      {
        type: "bar" as const,
        label: "Expenses",
        data: lastWeekExpenses,
        backgroundColor: "#00CFFF",
        borderRadius: 10,
      },
    ],
  };

  const options: ChartOptions<CombinedChart> = {
    animation: {},
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#9CA3AF",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#9CA3AF",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <>

    </>
  );
};

export default TotalBalanceChart;