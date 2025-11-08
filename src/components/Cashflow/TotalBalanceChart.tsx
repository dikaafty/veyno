import {
  Chart as ChartJS,
  registerables,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { fullCasflowMock } from "@/lib/constants";

type Data = {
  revenue: number;
  expenses: number;
};

const TotalBalanceChart = () => {
  const lastWeekCashflow = fullCasflowMock.slice(2);
  const lastWeekRevenue = lastWeekCashflow.map((item) => item.revenue);
  const lastWeekExpenses = lastWeekCashflow.map((item) => item.expenses);

  return (
    <>

    </>
  );
};

export default TotalBalanceChart;