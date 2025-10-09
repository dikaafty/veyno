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

      <p className={`text-muted text-5xl ${SFProDisplayLight.className}`}>
        $ <span className="text-foreground">183,802</span>.12
      </p>
    </article>
  )
}

export default TotalBalance;