import Greeting from "../components/Overview/Greeting";
import CashflowSummary from "../components/Overview/CashflowSummary";
import TotalBalance from "../components/Overview/TotalBalance";
import Expenses from "../components/Overview/Expenses";
import Revenue from "../components/Overview/Revenue";
import TopCategoryTransaction from "../components/Overview/TopCategoryTransaction";

export default function Page() {
  return (
    <main 
      className="px-6 py-9 grid grid-cols-4 grid-rows-[0.6fr_2fr_0.5fr_0.5fr_0.5fr_1fr] 
      xs:grid-rows-[0.6fr_3fr_0.8fr_0.8fr_1.5fr] md:grid-rows-[1.5fr_4fr_1.5fr_3fr] 
      lg:grid-cols-[3fr_1fr_1fr] lg:grid-rows-[1.5fr_1.5fr_3fr] gap-2"
    >
      <Greeting />
      <CashflowSummary />
      <TotalBalance />
      <Expenses />
      <Revenue />
      <TopCategoryTransaction />
    </main>
  );
}