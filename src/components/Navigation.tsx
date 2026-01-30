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
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="fex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center">
                       {/* Compass icon - we'll use a simple + for now */}
                       <span className="text-white text-xl font-bold">+</span>
                    </div>
                    <span className="text-xl font-semibold">Project Kompass</span>
                </Link>

                {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li>
            <Link href="/" className="hover:text-blue-300 transition">
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
          className="bg-orange hover:bg-orange-dark text-white px-6 py-2  font-semibold transition"
        >
          Donate Now
        </Link>
      </nav>
    </header>
    )
}