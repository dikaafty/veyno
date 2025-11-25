import { SFProDisplaySemiBold } from "@/lib/fonts";
import DonutStatsCardChart from "./DonutStatsCardChart";

type DonutStatsCardProps = {
  title: string;
  total: string;
  items: { title: string; value: number }[];
};

const DonutStatsCard = ({ title, total, items }: DonutStatsCardProps) => {
  const getChartColors = (): string[] => {
    return title.includes("Revenue")
      ? ["#0DF2F2", "#4ADE80", "#154C4E"]
      : ["#8A2BE2", "#EF4444", "#2E254B"];
  };

  const chartColors = getChartColors();

  return (
    <section
      aria-labelledby="card-label"
    >
      
    </section>
  );
};

export default DonutStatsCard;
