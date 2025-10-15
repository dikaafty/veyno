"use client";

import { useAppSelector } from "@/app/store/redux/hooks";
import { TransactionCategories } from "@/app/lib/types";
import Image from "next/image";

const TopCategoryTransaction = () => {
  const transactionCategories = useAppSelector(state => state.transactions.transactionCategories);

  return (
    <section>
      
    </section>
  )
}

export default TopCategoryTransaction;