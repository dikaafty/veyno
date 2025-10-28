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
        navLinks.map(link => (
          <li key={link.title}>
            <Link
              href={link.src}
              className={cn(
                "text-sm hover:text-foreground transition-colors duration-300 ease-in-out",
                activeLink === link.title ? "text-foreground relative active-link" : "text-muted",
              )}
              onClick={() => {
                setActiveLink(link.title);
                setIsOpen(false);
              }}
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