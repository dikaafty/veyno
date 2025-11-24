import { topRevenueMock, topExpenseMock } from "@/lib/constants";
import type { Metadata } from "next";
import TotalBalance from "@/components/Cashflow/TotalBalance";
import PerformanceMetrics from "@/components/Cashflow/PerformanceMetrics";

export const metadata: Metadata = {
  title: "Cashflow",
}

export default function Page() {
  return (
    <main className="px-6 py-9 grid grid-cols-[2fr_1fr] gap-2">
      <TotalBalance />
      <PerformanceMetrics />
    </main>
  );
}