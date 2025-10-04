import { Dispatch, SetStateAction } from "react";
import { cn } from "@/app/lib/utils";

type Props = {
  isOpen: boolean,
  toggle: Dispatch<SetStateAction<boolean>>,
}

const Hamburger = ({ isOpen, toggle }: Props) => {
  return (
    <button
      className="flex flex-col gap-1 sm:hidden cursor-pointer"
      onClick={() => toggle(prev => !prev)}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className={cn("hamburger-stripe", isOpen && "rotate-45 translate-y-1.5")} />
      <div className={cn("hamburger-stripe", isOpen && "opacity-0")} />
      <div className={cn("hamburger-stripe", isOpen && "-rotate-45 -translate-y-1.5")} />
    </button>
  )
}

export default Hamburger;