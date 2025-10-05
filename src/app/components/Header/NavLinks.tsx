import { navLinks } from "@/app/lib/constants";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

type Props = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  activeLink: string,
  setActiveLink: Dispatch<SetStateAction<string>>
};

const NavLinks = ({ isOpen, activeLink, setActiveLink }: Props) => {
  return (
    <>
      {
        navLinks.map(link => (
          <li key={link.title}>
            <Link
              href={link.src}
              className={cn(
                "text-sm hover:text-foreground transition-colors duration-300 ease-in-out",
                activeLink === link.title ? "text-foreground relative active-link" : "text-muted",
              )}
              onClick={() => setActiveLink(link.title)}
            >
              {link.title}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default NavLinks