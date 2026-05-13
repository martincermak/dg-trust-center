"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Certifications", href: "#certifications" },
  { label: "Security", href: "#security" },
  { label: "Documents", href: "#documents" },
  { label: "Privacy", href: "#privacy" },
  { label: "Subprocessors", href: "#subprocessors" },
  { label: "Disclosure", href: "#disclosure" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-dg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-dg-dark"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="https://deltagreen.energy" className="flex items-center gap-2.5">
          <DGLogo />
          <span className="text-white font-semibold text-sm hidden sm:inline">
            Delta Green
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#documents"
            className="hidden sm:inline-flex btn-primary text-xs px-4 py-2"
          >
            Request documents
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dg-dark border-t border-white/10 px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-sm py-2.5 border-b border-white/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a href="#documents" className="btn-primary mt-4 text-xs">
            Request documents
          </a>
        </div>
      )}
    </header>
  );
}

function DGLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect width="28" height="28" rx="6" fill="#16A34A" />
      <path
        d="M7 14C7 10.134 10.134 7 14 7h4v2.5h-4A4.5 4.5 0 0 0 9.5 14a4.5 4.5 0 0 0 4.5 4.5h4V21h-4C10.134 21 7 17.866 7 14Z"
        fill="white"
      />
      <path d="M16 11.5h5V14h-5v-2.5Z" fill="white" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      {open ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        />
      )}
    </svg>
  );
}
