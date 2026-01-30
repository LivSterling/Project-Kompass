import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">+</span>
              </div>
              <span className="text-xl font-semibold">Project Kompass</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>Project Kompass<br />192 Appleton St<br />Lowell, MA, 01852</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>978-703-2264</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@projectkompass.org</span>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                YouTube
              </a>
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
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

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
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

          {/* Column 4: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
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