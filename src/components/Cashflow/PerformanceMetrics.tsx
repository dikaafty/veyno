import { SFProDisplayLight, SFProDisplaySemiBold } from "@/lib/fonts";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

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
        {performanceMetricsArticles.map((article) => (
          <article
            key={article.title}
            aria-labelledby={article.label}
            className="bg-background/50 rounded-2xl py-2.5 px-3 flex flex-col justify-between"
          >
            <h3 id={article.label} className="text-sm">
              {article.title}
            </h3>

            <p className="text-xl">{article.value}</p>

            <div className="flex items-center gap-0.5">
              {Number(article.growthRate) > 0 ? (
                <ArrowUp size={16} className="icon-secondary-shadow" />
              ) : Number(article.growthRate) < 0 ? (
                <ArrowDown size={16} className="icon-tertiary-shadow" />
              ) : (
                <Minus size={20} />
              )}

              <span
                className={cn(
                  "text-xs",
                  Number(article.growthRate) > 0
                    ? "text-secondary-shadow"
                    : Number(article.growthRate) < 0
                    ? "text-tertiary-shadow"
                    : ""
                )}
              >
                {Number(article.growthRate) > 0
                  ? "+" + article.growthRate + "%"
                  : Number(article.growthRate) < 0
                  ? article.growthRate + "%"
                  : ""}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PerformanceMetrics;
