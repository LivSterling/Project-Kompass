import Link from "next/link";

export default function Footer() {
  const iconClass = "h-4 w-4 shrink-0 text-white/85";

  return (
    <footer className="bg-navy-dark py-12 text-white md:py-16">
      <div className="section-shell px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <div className="mb-4">
              <img src="/img/logo.png" alt="Project Kompass" className="h-10 w-auto md:h-12" />
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center text-white/85 transition hover:text-white"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="6" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center text-white/85 transition hover:text-white"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8A19 19 0 0 0 14.5 4c-2.5 0-4.1 1.5-4.1 4.3V11H7.8v3h2.6v8h3.1Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center text-white/85 transition hover:text-white"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5h3V21h-3V8.5ZM8 3.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM13 8.5h2.9v1.7h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.7V21h-3.1v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95V21H13V8.5Z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 space-y-3 text-[15px] font-semibold leading-[30px] tracking-wide text-white">
              <p className="flex items-start gap-2">
                <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                  <path d="M19 10.5C19 16 12 22 12 22S5 16 5 10.5a7 7 0 1 1 14 0Z" />
                </svg>
                <span>
                  Project Kompass
                  <br />
                  192 Appleton St
                  <br />
                  Lowell, MA, 01852
                </span>
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
                <a href="mailto:info@projectkompass.org" className="transition hover:text-white/90">
                  info@projectkompass.org
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-xl tracking-wide text-white md:text-2xl">About</h3>
            <ul className="space-y-2.5 text-[15px] font-semibold leading-normal tracking-wide text-white/90">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="transition hover:text-white">
                  Our team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition hover:text-white">
                  Get involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="transition hover:text-white">
                  News and Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-xl tracking-wide text-white md:text-2xl">Programs</h3>
            <ul className="space-y-2.5 text-[15px] font-semibold leading-normal tracking-wide text-white/90">
              <li>
                <Link href="/programs/transitional-housing" className="transition hover:text-white">
                  Transitional Housing
                </Link>
              </li>
              <li>
                <Link href="/programs/community-center" className="transition hover:text-white">
                  Community Center
                </Link>
              </li>
              <li>
                <Link href="/programs/project-farm" className="transition hover:text-white">
                  Project Farm
                </Link>
              </li>
              <li>
                <Link href="/programs/jump-start" className="transition hover:text-white">
                  Project Jump Start
                </Link>
              </li>
              <li>
                <Link href="/news" className="transition hover:text-white">
                  News and Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-xl tracking-wide text-white md:text-2xl">Services</h3>
            <ul className="space-y-2.5 text-[15px] font-semibold leading-normal tracking-wide text-white/90">
              <li>
                <Link href="/services/community-resources" className="transition hover:text-white">
                  Community Resources
                </Link>
              </li>
              <li>
                <Link href="/services/code-of-ethics" className="transition hover:text-white">
                  Code of Ethics and Business Conduct
                </Link>
              </li>
              <li>
                <Link href="/services/whistleblower" className="transition hover:text-white">
                  Whistleblower Policy
                </Link>
              </li>
              <li>
                <Link href="/services/diversity" className="transition hover:text-white">
                  Equal Employment Opportunity
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
