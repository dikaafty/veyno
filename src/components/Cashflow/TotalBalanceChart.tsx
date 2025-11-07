import {
  Chart as ChartJS,
  registerables,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { fullCasflowMock } from "@/lib/constants";

const TotalBalanceChart = () => {
  const lastWeekRevenue = fullCasflowMock.slice(2).map(item => item.revenue);
  const lastWeekExpenses = fullCasflowMock.slice(2).map(item => item.revenue);

  return (
    <>

    </>
  );
};

export default TotalBalanceChart;