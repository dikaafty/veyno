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

  return (
    <section>
      
    </section>
  )
}

export default TopCategoryTransaction;