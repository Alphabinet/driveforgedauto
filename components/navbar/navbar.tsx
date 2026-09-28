"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { Button } from "@/components/buttons/button";
import { Wordmark } from "./wordmark";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-40 bg-ink text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}><Wordmark /></Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
              className={`border-b-2 px-3 py-2 ${isActive(n.href) ? "border-brand-light" : "border-transparent hover:border-white/40"}`}>
              {n.label}
            </Link>
          ))}
          <Button href="/contact" className="ml-3 min-h-11">Book an Appointment</Button>
        </nav>

        <button type="button" className="grid size-12 place-items-center rounded border-2 border-white/40 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}>
          <span aria-hidden className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <nav id="mobile-nav" aria-label="Mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}>
        <div className="min-h-0">
          <ul className="px-5 pb-5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block border-b border-white/15 py-4 text-lg ${isActive(n.href) ? "text-brand-light" : ""}`}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4"><Button href="/contact" className="w-full" onClick={() => setOpen(false)}>Book an Appointment</Button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
