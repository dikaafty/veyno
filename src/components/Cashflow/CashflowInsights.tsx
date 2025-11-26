import { ArrowDown, TrendingUp, ShieldCheck } from "lucide-react";
import CashflowInsightsCard from "./CashflowInsightsCard";

const insightsMock = [
  {
    title: "Expenses Dropped",
    icon: ArrowDown,
    description:
      "Expenses dropped by 12% vs last month. Keep up the great work!",
    score: null,
  },
  {
    title: "Largest Revenue Source",
    icon: TrendingUp,
    description:
      "Client Projects was your largest revenue source this month, contributing to 60% of total revenue.",
    score: null,
  },
  {
    title: "Cashflow Stability Score",
    icon: ShieldCheck,
    description: "Cashflow stability score:",
    score: 8.7,
  },
];

const CashflowInsights = () => {
  return (
    <section
      aria-labelledby="cashflow-insights"
      className="bg-primary-card-background card relative z-10 flex flex-col gap-3 col-span-2"
    >
      <div className="card-gradient -z-10" />

      <h1 id="cashflow-insights" className="text-lg">
        Insights
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {insightsMock.map(({ title, icon, description, score }) => (
          
        ))}
      </div>
    </section>
  );
};

export default CashflowInsights;
