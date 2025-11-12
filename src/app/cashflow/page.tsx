import type { Metadata } from "next";
import TotalBalance from "@/components/Cashflow/TotalBalance";
import PerformanceMetrics from "@/components/Cashflow/PerformanceMetrics";

export const metadata: Metadata = {
  title: "Cashflow",
}

export default function Page() {
  return (
    <main>
      <TotalBalance />
      <PerformanceMetrics />
    </main>
  );
}