import Greeting from "../components/Overview/Greeting";
import CashflowSummary from "../components/Overview/CashflowSummary";
import TotalBalance from "../components/Overview/TotalBalance";
import Expenses from "../components/Overview/Expenses";
import Revenue from "../components/Overview/Revenue";
import TopCategoryTransaction from "../components/Overview/TopCategoryTransaction";

export default function Page() {
  return (
    <main>
      <Greeting />
      <CashflowSummary />
      <TotalBalance />
      <Expenses />
    </main>
  );
}