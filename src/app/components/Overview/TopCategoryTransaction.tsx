"use client";

import { useAppSelector } from "@/app/store/redux/hooks";
import { TransactionCategories } from "@/app/lib/types";
import Image from "next/image";

const TopCategoryTransaction = () => {
  const transactionCategories = useAppSelector(state => state.transactions.transactionCategories);

  const getTopCategoryTransaction = (): TransactionCategories[] => {
    return [...transactionCategories]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 4);
  }

  const largestCategory = getTopCategoryTransaction()[0];

  return (
    <section 
      aria-labelledby="transaction-heading" 
      className="bg-primary-card-background card relative z-10 col-span-2 gap-5"
    >
      <div className="card-gradient rounded-2xl -z-10" />
    </section>
  )
}

export default TopCategoryTransaction;