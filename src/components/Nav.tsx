"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work",     href: "#work" },
  { label: "Studio",   href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-14 md:py-8 transition-all duration-700 ${
        scrolled ? "bg-paper/70 backdrop-blur-sm border-b border-line/70" : ""
      }`}
    >
      <Link
        href="#"
        className={`font-display text-[1.02rem] tracking-[0.22em] transition-colors duration-500 ${
          scrolled ? "text-ink-soft" : "text-paper"
        }`}
      >
        ARFIRM
      </Link>

      <ul className="m-0 hidden list-none gap-9 p-0 md:flex">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className={`text-[0.72rem] tracking-[0.18em] uppercase no-underline transition-colors duration-500 ${
                scrolled
                  ? "text-stone hover:text-ink-soft"
                  : "text-paper/70 hover:text-paper"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
