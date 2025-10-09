import { SFProDisplayLight, SFProDisplayThin } from "@/app/lib/fonts";

const TotalBalance = () => {
  return (
    <article 
      aria-labelledby="total-balance" 
      className="bg-primary-card-background card"
    >
      <div className="card-gradient rounded-2xl" />

      <h3 id="total-balance" className="text-sm">
        Total Balance
      </h3>

      <p className={`text-muted text-5xl ${SFProDisplayLight.className}`}>
        $ <span className="text-foreground">183,802</span>.12
      </p>

      <div>
        <p className="text-muted text-xs">
          Last updated on
        </p>
        
        <p className={`text-sm ${SFProDisplayThin.className} tracking-wider`}>
          Monday, Oct 2nd 2023 - 20.17
        </p>
      </div>
    </article>
  )
}

export default TotalBalance;