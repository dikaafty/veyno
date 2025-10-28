import { navLinks } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  activeLink: string,
  setActiveLink: Dispatch<SetStateAction<string>>
};

const NavLinks = ({ isOpen, setIsOpen, activeLink, setActiveLink }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {
        navLinks.map(link => {
          const isActive = pathname === link.src 
          || (pathname.startsWith(link.src) && link.src !== "/");
          
          return (
            
          );
        })
      }
    </>
  )
}

export default NavLinks