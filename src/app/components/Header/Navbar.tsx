"use client";

import { navLinks } from "@/app/lib/constants";
import { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [ activeLink, setActiveLink ] = useState<string>("Overview");
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      if(window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="md:ml-6 relative">
      <Hamburger isOpen={isMenuOpen} toggle={setIsMenuOpen} />

      <ul 
        id="desktop-menu"
        className={cn(
          "nav-content hidden sm:flex max-sm:flex-col gap-5 sm:gap-12"
        )}
      >
        <NavLinks 
          isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen} 
          activeLink={activeLink} 
          setActiveLink={setActiveLink} 
        />
      </ul>

      <ul 
        id="mobile-menu"
        className={cn(
          "nav-content absolute hidden flex-col",
          "gap-6 left-1/2 top-13 -translate-x-1/2",
          isMenuOpen && "flex",
        )}
      >
        <NavLinks 
          isOpen={isMenuOpen} 
          setIsOpen={setIsMenuOpen} 
          activeLink={activeLink} 
          setActiveLink={setActiveLink} 
        />
      </ul>
    </nav>
  )
}

export default Navbar;