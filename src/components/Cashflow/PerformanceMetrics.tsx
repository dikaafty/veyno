import { SFProDisplayLight, SFProDisplaySemiBold } from "@/lib/fonts";
import { ArrowUp } from "lucide-react";

const performanceMetricsArticles = [
  {
    title: "Net Margins",
    label: "net-margins",
    value: "45.2%",
    growthRate: 1.5,
  },
  {
    title: "Avg Daily Inflow",
    label: "avg-daily-inflow",
    value: "$1.230",
    growthRate: 5,
  },
  {
    title: "Expense Ratio",
    label: "expense-ratio",
    value: "22.8%",
    growthRate: -0.8,
  },
  {
    title: "Transactions",
    label: "transactions",
    value: 1.402,
    growthRate: null,
  },
];

const PerformanceMetrics = () => {
  return (
    <section
      aria-labelledby="performance-metrics"
      className="bg-primary-card-background card relative z-10 flex flex-col"
    >
      <div className="card-gradient -z-10" />

      <h2 id="performance-metrics" className="text-lg">
        Performance Metrics
      </h2>

      <div className="size-full grid grid-cols-2 grid-rows-2 gap-2">
        
      </div>
    </section>
  )
}

export default PerformanceMetrics;
