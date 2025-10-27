import { SFProDisplaySemiBold, SFProDisplayRegular, SFProDisplayLight } from "@/lib/fonts";

const Expenses = () => {
  return (
    <article 
      aria-labelledby="expenses" 
      className="bg-secondary-card-background card max-xs:col-span-4 max-md:col-span-2 max-lg:col-span-1"
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

      <div className="flex flex-col gap-2">
        <p className={`text-xs ${SFProDisplayLight.className}`}>
          You have <span className={`${SFProDisplaySemiBold.className} underline`}>178,78</span> left from this month budget
        </p>

        <div className="w-full h-[7px] bg-black/20 rounded-full">
          <div className="w-1/4 h-full bg-white rounded-full" />
        </div>
      </div>
    </article>
  )
}

export default Expenses;