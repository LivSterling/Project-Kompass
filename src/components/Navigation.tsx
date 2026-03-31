"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-700 ease-in-out ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-white">
          <img src="/img/logo.png" alt="Project Kompass" className="h-10 w-auto md:h-12" />
        </Link>

        <ul className="hidden items-center gap-5 text-[15px] font-semibold tracking-[0.01em] text-white xl:flex xl:gap-[22px]">
          <li>
            <Link href="/" className="transition hover:text-white/80">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-white/80">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/programs" className="transition hover:text-white/80">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/supporters" className="transition hover:text-white/80">
              Our supporters
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition hover:text-white/80">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/media-events" className="transition hover:text-white/80">
              News & Events
            </Link>
          </li>
        </ul>

        <Link
          href="/donate"
          className="font-heading inline-flex shrink-0 items-center gap-2 bg-orange px-5 py-3 text-lg leading-tight tracking-wide text-black transition hover:bg-orange-light md:px-7 md:py-4 md:text-[22px]"
        >
          Donate Now
          <span className="inline-block translate-y-px" aria-hidden>
            →
          </span>
        </Link>
      </nav>
    </header>
  );
}
