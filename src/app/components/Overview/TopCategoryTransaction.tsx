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

      <h3 id="transaction-heading" className="text-sm">
        Most transaction by category
      </h3>

      <ul className="flex flex-col gap-2">
        {
          getTopCategoryTransaction().map(item => (
            <li 
              key={item.id} 
              className="w-full bg-background/50 p-1.5 pr-6 rounded-full flex justify-between 
              items-center relative"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white py-2 px-2 rounded-full">
                  <Image
                    src={item.image}
                    width={32}
                    height={32}
                    alt={`${item.category} Icon`}
                  />
                </div>

                <span className="text-sm">
                  {item.category}
                </span>
              </div>

              <span className="text-sm">
                {`${item.percentage}%`}
              </span>

              <div 
                role="progressbar"
                aria-valuenow={item.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                className={
                  `h-full bg-background/80 absolute top-0 left-0 rounded-full -z-10`
                }
                style={{ 
                  width: item.id === "1"
                  ? item.percentage + "%"
                  : (item.percentage / largestCategory.percentage) * 100 + "%"
                }}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default TopCategoryTransaction;