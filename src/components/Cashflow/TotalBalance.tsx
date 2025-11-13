import { SFProDisplayLight, SFProDisplayRegular } from "@/lib/fonts";
import { TrendingUp } from "lucide-react";
import TotalBalanceChart from "./TotalBalanceChart";

const TotalBalance = () => {
  return (
    <section
      aria-labelledby="total-balance"
      className="bg-primary-card-background card relative z-10 flex flex-col gap-5"
    >
      <div className="card-gradient -z-10" />

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <h3 id="total-balance" className="text-sm">
            Total Balance
          </h3>
          <span
            className={`text-muted text-2xl ${SFProDisplayLight.className}`}
          >
            <span className="mr-2">$</span>
            <span className="text-foreground text-3xl">183,802</span>
            <span>.12</span>
          </span>
        </div>

        <span className="text-sm text-secondary-shadow flex gap-2">
          +2.5% vs last month
          <TrendingUp size={18} className="icon-secondary-shadow" />
        </span>
      </div>

      <figure className="flex-1">
        <TotalBalanceChart />
      </figure>
    </section>
  );
};

export default TotalBalance;
