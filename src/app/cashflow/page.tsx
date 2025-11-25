import { topRevenueMock, topExpenseMock } from "@/lib/constants";
import type { Metadata } from "next";
import TotalBalance from "@/components/Cashflow/TotalBalance";
import PerformanceMetrics from "@/components/Cashflow/PerformanceMetrics";
import DonutStatsCard from "@/components/Cashflow/DonutStatsCard";
import CashflowInsights from "@/components/Cashflow/CashflowInsights";

export const metadata: Metadata = {
  title: "Cashflow",
};

export default function Page() {
  return (
    <main className="px-6 py-9 grid grid-cols-[2fr_1fr] gap-2">
      <TotalBalance />
      <PerformanceMetrics />
      <DonutStatsCard
        title="Top Revenue Sources"
        total="$8,450"
        items={topRevenueMock}
      />
      <DonutStatsCard 
        title="Top Expense Sources"
        total="$3,820"
        items={topExpenseMock}
      />
    </main>
  );
}
