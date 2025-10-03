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
    >
      
    </button>
  )
}

export default Hamburger;