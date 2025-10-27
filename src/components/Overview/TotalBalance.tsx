import { SFProDisplayLight, SFProDisplayThin } from "@/app/lib/fonts";

const TotalBalance = () => {
  return (
    <article 
      aria-labelledby="total-balance" 
      className="bg-primary-card-background card row-start-3 row-end-4 lg:row-start-1 
      lg:row-end-2 col-start-1 lg:col-start-2 col-span-4 md:col-span-2"
    >
      <div className="card-gradient rounded-2xl" />

      <h3 id="total-balance" className="text-sm">
        Total Balance
      </h3>

      <p className={`text-muted text-5xl ${SFProDisplayLight.className}`}>
        <span className="max-xs:text-4xl max-lg:text-5xl max-[1200px]:text-xl">$</span>{" "}
        <span className="text-foreground">183,802</span>
        <span className="max-xs:text-4xl max-lg:text-5xl max-[1200px]:text-xl">.12</span>
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