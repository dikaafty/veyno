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
      className="bg-primary-card-background card justify-start relative z-10 flex flex-col gap-2
      row-start-2 row-span-2 col-start-1 col-end-2"
    >
      <div className="card-gradient rounded-2xl -z-10" />

      <h3 id="cashflow-summary" className="text-sm">
        Cashflow Summary
      </h3>

      <div className="flex max-sm:flex-col justify-between items-center max-sm:gap-3">
        <nav aria-label="Cashflow Filters" className="flex gap-2">
          {
            navFilters.map(nav => (
              <button
                key={nav}
                className={cn(
                  "py-2.5 px-8 text-sm rounded-full cursor-pointer transition-colors duration-300", 
                  "ease-in-out max-sm:hidden",
                activeNav === nav ? "bg-background/70" : "bg-background/20"
                )}
                onClick={() => {
                  setActiveNav(nav);
                }}
              >
                {nav}
              </button>
            ))
          }

          <div className="flex sm:hidden relative">
            <select
              aria-label="Select Cashflow Filters"
              value={activeNav}
              onChange={(e) => setActiveNav(e.target.value)}
              className="w-28 pl-4 bg-background/70 rounded-xl py-2 appearance-none text-sm
              focus:outline-2 focus:outline-foreground peer"
            >
              {
                navFilters.map(nav => (
                  <option key={nav} value={nav}>
                    {nav}
                  </option>
                ))
              }
            </select>

            <span 
              className="absolute top-1/2 right-3 pointer-events-none border-[5.5px] rounded-none
              border-l-transparent border-r-transparent border-t-foreground border-b-transparent
              transition-all duration-500 ease-in-out peer-focus:rotate-180 peer-focus:-translate-y-1/2 
              peer-focus:duration-300"
            />
          </div>
        </nav>

        <ul className="flex gap-4" aria-label="Chart legend">
          <li className="flex-center gap-1.5">
            <span className="size-4 bg-tertiary-card-background rounded-full" aria-hidden="true" />
            <span className="text-sm">Revenue</span>
          </li>

          <li className="flex-center gap-1.5">
            <span className="size-4 bg-secondary-card-background rounded-full" aria-hidden="true" />
            <span className="text-sm">Expenses</span>
          </li>
        </ul>
      </div>

      <figure className="flex-1">
        <CashflowSummaryChart activeNav={activeNav} filteredCashflow={filteredCashflow} />
      </figure>
    </section>
  )
}

export default CashflowSummary;