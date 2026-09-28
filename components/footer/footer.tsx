import Link from "next/link";
import { links, nav, site } from "@/data/site";
import { Wordmark } from "@/components/navbar/wordmark";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div>
            <Wordmark className="text-white" />
            <p className="mt-5 text-sm leading-relaxed">
              Greater Noida's premium automotive detailing studio. Specializing in high-end Paint Protection Film (PPF), 9H Ceramic Coatings, and surgical paint correction.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">Explore</h2>
            <ul className="grid gap-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link className="transition-colors hover:text-white hover:underline" href={n.href}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">Services</h2>
            <ul className="grid gap-3 text-sm">
              <li>
                <Link href="/services" className="transition-colors hover:text-white hover:underline">
                  Paint Protection Film (PPF)
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white hover:underline">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white hover:underline">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white hover:underline">
                  Deep Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-white">Visit Studio</h2>
            <address className="not-italic text-sm leading-relaxed">
              <p>{site.address.street}</p>
              <p>{site.address.locality}</p>
              <p className="mt-1 text-white/50">{site.address.landmark}</p>
            </address>

            <div className="mt-5 grid gap-3 text-sm">
              <a className="inline-flex items-center gap-2 transition-colors hover:text-white" href={links.call}>
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {site.phones[0]}
              </a>
              <a className="inline-flex items-center gap-2 text-brand transition-colors hover:text-brand-light" href={links.directions} target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Tag */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-white/50 font-xs">
            Designed & Developed by
            <a
              href="https://www.instagram.com/chaudhary_khatri/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-small text-gray-400 transition-colors hover:text-brand"
            >
              Chaudhary_khatri
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}