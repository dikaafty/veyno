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
      className="bg-primary-card-background card relative z-10 flex flex-col gap-4"
    >
      <div className="card-gradient -z-10" />

      <h1 id="card-label">{title}</h1>

      <div className="flex justify-between items-center">
        <figure className="w-50 h-40 mr-4.5">
          <DonutStatsCardChart
            title={title}
            total={total}
            items={items}
            chartColors={chartColors}
          />
        </figure>
      </div>
    </section>
  );
};

export default DonutStatsCard;
