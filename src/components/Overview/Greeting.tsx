import { SFProDisplayThin, SFProDisplaySemiBold } from "@/app/lib/fonts";

const Greeting = () => {
  return (
    <p className={`text-2xl md:text-3xl ${SFProDisplayThin.className} row-start-1 row-end-2 col-start-1 
    col-span-4 lg:col-end-2`}>
      <span className="text-muted">Welcome back, </span>

      <span className={`text-secondary-card-background ${SFProDisplaySemiBold.className}`}> 
        Dellonzz.
      </span> {" "}

      <span>
        By earning an extra {" "}
        <span className={`text-secondary-card-background underline ${SFProDisplaySemiBold.className}`}>
          $4,200.10 revenue
        </span> {" "}
        last week, {" "}
      </span>

      <span>
        you're currently closer to your {" "}
        <span className={`text-tertiary-card-background underline ${SFProDisplaySemiBold.className}`}>
          Normaden-life
        </span> {" "}
        goals.
      </span>

      <span className="text-muted"> Keep going!</span>
    </p>
  )
}

export default Greeting;