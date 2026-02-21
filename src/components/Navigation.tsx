"use client";

import Link from "next/link";
import { useState, useEffect } from "react";


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Trigger after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? "nav-scrolled " : "bg-transparent"
        }`}
      >
            <nav className="section-shell flex items-center justify-between px-4 py-3 md:px-6 md:py-3.5">
                <Link href="/" className="flex items-center gap-2 text-white">
                    <img src="/img/logo.png" alt="Project Kompass Logo" className="" />
                </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-white xl:flex">
          <li>
            <Link href="/" className="transition hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-300 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/programs" className="hover:text-blue-300 transition">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/supporters" className="hover:text-blue-300 transition">
              Our supporters
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-300 transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/media-events" className="hover:text-blue-300 transition">
              Media & Events
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <Link
          href="/donate"
          className= "font-heading bg-orange px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-orange-light md:px-4 md:py-2 md:text-[11px]"
        >
          Donate Now
        </Link>
      </nav>
    </header>
    )
}