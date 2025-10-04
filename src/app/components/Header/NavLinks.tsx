import { navLinks } from "@/app/lib/constants";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

type Props = {
  isOpen: boolean,
  activeLink: string,
  setActiveLink: Dispatch<SetStateAction<string>>
};

const NavLinks = ({ isOpen, activeLink, setActiveLink }: Props) => {
  return (
    <>
      
    </>
  )
}

export default NavLinks