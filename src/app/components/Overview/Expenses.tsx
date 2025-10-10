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

        <p className={`text-xl text-gray-200 ${SFProDisplayLight.className}`}>
          <span className="mr-2">
            $
          </span>

          <span className={`text-4xl text-foreground ${SFProDisplayRegular.className}`}>
            720
          </span>

          ,09
        </p>
      </div>
    </article>
  )
}

export default Expenses;