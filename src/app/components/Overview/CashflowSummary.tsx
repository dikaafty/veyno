"use client";

import { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import { cashflowMock } from "@/app/lib/constants";
import { CashflowMock } from "@/app/lib/types";
import CashflowSummaryChart from "./CashflowSummaryChart";

const navFilters = ["All", "Revenue", "Expenses"];

const CashflowSummary = () => {
  const [ activeNav, setActiveNav ] = useState<string>("All");
  const [ filteredCashflow, setFilteredCashflow ] = useState<CashflowMock[]>(cashflowMock);

  return (
    <section 
      aria-labelledby="cashflow-summary" 
      className="bg-primary-card-background card justify-start relative z-10 flex flex-col gap-2"
    >
      <div className="card-gradient rounded-2xl -z-10" />

      <h3 id="cashflow-summary" className="text-sm">
        Cashflow Summary
      </h3>

      <div className="flex justify-between items-center">
        
      </div>
    </section>
  )
}

export default CashflowSummary;