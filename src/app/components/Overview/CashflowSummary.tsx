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
    <section>
      
    </section>
  )
}

export default CashflowSummary;