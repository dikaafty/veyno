import { Chart as ChartJS, registerables, type ChartOptions, type ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import { CashflowMock } from "@/lib/types";

ChartJS.register(...registerables);

type CSChartProps = {
  activeNav: string;
  filteredCashflow: CashflowMock[]; 
};

const CashflowSummaryChart = ({ activeNav, filteredCashflow }: CSChartProps) => {
  const data: ChartData<"bar"> = {
    labels: filteredCashflow.map(() => ""),
    datasets: [
      ...(activeNav === "All" || activeNav === "Revenue" 
        ? [
            {
              label: "Revenue",
              data: filteredCashflow.map(data => data.revenue ?? null),
              backgroundColor: "#768BDE",
              borderRadius: 10,
            },
          ] 
        : []),
      ...(activeNav === "All" || activeNav === "Expenses"
        ? [
            {
              label: "Expenses",
              data: filteredCashflow.map(data => data.expenses ?? null),
              backgroundColor: "#00CFFF",
              borderRadius: 10,
            }
          ]
        : []),
    ],
  };

  const options: ChartOptions<"bar"> = {
    animation: {},
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
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
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}

export default CashflowSummaryChart;