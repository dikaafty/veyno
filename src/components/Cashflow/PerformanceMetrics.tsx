import { SFProDisplayLight, SFProDisplaySemiBold } from "@/lib/fonts";
import { ArrowUp } from "lucide-react";

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
    </section>
  )
}

export default PerformanceMetrics;
