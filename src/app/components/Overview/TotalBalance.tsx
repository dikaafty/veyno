import { SFProDisplayLight, SFProDisplayThin } from "@/app/lib/fonts";

const TotalBalance = () => {
  return (
    <article 
      aria-labelledby="total-balance" 
      className="bg-primary-card-background card grid-balance"
    >
      <div className="card-gradient rounded-2xl" />

      <h3 id="total-balance" className="text-sm">
        Total Balance
      </h3>
    </article>
  )
}

export default TotalBalance;