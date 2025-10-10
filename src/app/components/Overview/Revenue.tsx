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
      </div>
    </article>
  )
}

export default Revenue;