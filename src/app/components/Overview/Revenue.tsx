import { SFProDisplaySemiBold,  SFProDisplayRegular, SFProDisplayLight } from "@/app/lib/fonts";

const Revenue = () => {
  return (
    <article
      aria-labelledby="revenue"
      className="bg-tertiary-card-background card relative grid-revenue"
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
    </article>
  )
}

export default Revenue;