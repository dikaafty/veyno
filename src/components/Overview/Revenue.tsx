import { SFProDisplaySemiBold,  SFProDisplayRegular, SFProDisplayLight } from "@/lib/fonts";

const Revenue = () => {
  return (
    <article
      aria-labelledby="revenue"
      className="bg-tertiary-card-background card relative grid-revenue max-xs:col-span-4 max-md:col-span-2 max-lg:col-span-1"
    >
      <div className="card-gradient rounded-3xl" />

      <div className="flex flex-col gap-1.5">
        <h3 id="expenses" className="text-sm">
          Revenue this month
        </h3>

        <p className={`text-xl text-gray-300 ${SFProDisplayLight.className}`}>
          <span className="mr-2">
            $
          </span>

          <span className={`text-4xl text-foreground ${SFProDisplayRegular.className}`}>
            4,200
          </span>

          ,10
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className={`text-xs ${SFProDisplayLight.className}`}>
          You are <span className={`${SFProDisplaySemiBold.className} underline`}>16,197,88</span> closer to your financial goals!
        </p>

        <div className="w-full h-[7px] bg-black/20 rounded-full">
          <div className="w-[91.90%] h-full bg-white rounded-full" />
        </div>
      </div>
    </article>
  )
}

export default Revenue;