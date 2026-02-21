import Link from "next/link";

export default function Footer() {
  const iconClass = "h-3.5 w-3.5 text-white/80";

  return (
    <footer className="bg-navy-deep py-10 text-white">
      <div className="section-shell px-4 md:px-6">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
             
          <div>
            <div className="mb-3 flex items-center gap-.5">
              <img src="/img/logo.png" alt="Project Kompass logo" className="h-6 w-auto" />
            </div>
            <div className="space-y-1.5 text-[11px] text-white/75">
              <p className="flex items-start gap-2">
                <span className="mt-0.5">
                  <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                    <path d="M19 10.5C19 16 12 22 12 22S5 16 5 10.5a7 7 0 1 1 14 0Z" />
                  </svg>
                </span>
                <span>Project Kompass<br />192 Appleton St<br />Lowell, MA, 01852</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.99a16 16 0 0 0 6 6l1.54-1.28a2 2 0 0 1 2.11-.45c.84.3 1.72.5 2.62.63A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span>978-703-2264</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <span>info@projectkompass.org</span>
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/25 p-1.5 text-white/80 transition hover:text-white">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="6" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/25 p-1.5 text-white/80 transition hover:text-white">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8A19 19 0 0 0 14.5 4c-2.5 0-4.1 1.5-4.1 4.3V11H7.8v3h2.6v8h3.1Z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="rounded-full border border-white/25 p-1.5 text-white/80 transition hover:text-white">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C19 5 12 5 12 5s-7 0-8.6.3a2.9 2.9 0 0 0-2 2C1 8.8 1 12 1 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C5 19 12 19 12 19s7 0 8.6-.3a2.9 2.9 0 0 0 2-2c.4-1.5.4-4.7.4-4.7ZM9.7 15.5V8.5l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-sm text-white">About</h3>
            <ul className="space-y-1.5 text-[13 px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-white transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">
                  News and Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-sm text-white">Programs</h3>
            <ul className="space-y-1.5 text-[11px] text-white/70">
              <li>
                <Link href="/programs/transitional-housing" className="hover:text-white transition">
                  Transitional Housing
                </Link>
              </li>
              <li>
                <Link href="/programs/community-center" className="hover:text-white transition">
                  Community Center
                </Link>
              </li>
              <li>
                <Link href="/programs/project-farm" className="hover:text-white transition">
                  Project Farm
                </Link>
              </li>
              <li>
                <Link href="/programs/jump-start" className="hover:text-white transition">
                  Project Jump Start
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">
                  News and Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-3 text-sm text-white">Services</h3>
            <ul className="space-y-1.5 text-[11px] text-white/70">
              <li>
                <Link href="/services/community-resources" className="hover:text-white transition">
                  Community Resources
                </Link>
              </li>
              <li>
                <Link href="/services/code-of-ethics" className="hover:text-white transition">
                  Code of Ethics and Business Conduct
                </Link>
              </li>
              <li>
                <Link href="/services/whistleblower" className="hover:text-white transition">
                  Whistleblower Policy
                </Link>
              </li>
              <li>
                <Link href="/services/diversity" className="hover:text-white transition">
                  Diversity and Opportunity
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}