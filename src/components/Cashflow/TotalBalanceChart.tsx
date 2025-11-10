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

  return (
    <>

    </>
  );
};

export default TotalBalanceChart;