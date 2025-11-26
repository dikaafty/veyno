import { ArrowDown, TrendingUp, ShieldCheck } from "lucide-react";
import CashflowInsightsCard from "./CashflowInsightsCard";

const CashflowInsights = () => {
  return (
    <section
      aria-labelledby="cashflow-insights"
      className="bg-primary-card-background card relative z-10 flex flex-col gap-3"
    >
      <div className="card-gradient -z-10" />

      <h1 id="cashflow-insights" className="text-lg">
        Insights
      </h1>
    </section>
  );
};

export default CashflowInsights;
