import { SFProDisplaySemiBold, SFProDisplayRegular, SFProDisplayLight } from "@/app/lib/fonts";

const Expenses = () => {
  return (
    <article 
      aria-labelledby="expenses" 
      className="bg-secondary-card-background card relative"
    >
      <div className="card-gradient rounded-3xl" />

      <div className="flex flex-col gap-1.5">
        <h3 id="expenses" className="text-sm">
          Expenses this month
        </h3>
      </div>
    </article>
  )
}

export default Expenses;