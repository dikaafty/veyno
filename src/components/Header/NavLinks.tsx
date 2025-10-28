import { navLinks } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
};

const NavLinks = ({ isOpen, setIsOpen, }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {
        navLinks.map(link => {
          const isActive = pathname === link.src 
          || (pathname.startsWith(link.src) && link.src !== "/");
          
          return (
            <li key={link.title}>
              <Link
                href={link.src}
                className={cn(
                  "text-sm hover:text-foreground transition-colors duration-300 ease-in-out",
                  isActive ? "text-foreground relative active-link" : "text-muted",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          );
        })
      }
    </>
  )
}

export default NavLinks