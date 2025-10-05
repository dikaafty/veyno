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

  return (
    <nav>
      
    </nav>
  )
}

export default Navbar;