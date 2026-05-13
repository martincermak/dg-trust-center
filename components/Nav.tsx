"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Compliance", href: "#compliance" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-dg-dark/95 backdrop-blur-md shadow-lg" : "bg-dg-dark"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — matches deltagreen.energy wordmark: "delta" white / "green" lime, stacked */}
        <Link href="https://deltagreen.energy" className="flex items-center gap-2.5 group">
          <DGWordmark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/8 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="#documents" className="hidden sm:inline-flex btn-primary text-xs px-4 py-2">
            Request documents
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dg-dark border-t border-white/10 px-6 pb-6 pt-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-sm py-3 border-b border-white/5 last:border-0 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="#documents" className="btn-primary mt-5 text-xs justify-center w-full">
            Request documents
          </a>
        </div>
      )}
    </header>
  );
}

/**
 * Replicates the deltagreen.energy wordmark:
 * "delta" in white (semi-bold), "green" in lime below it.
 * Uses SVG text so it scales cleanly without a font load dependency.
 */
function DGWordmark() {
  return (
    <svg width="72" height="36" viewBox="0 0 72 36" fill="none" aria-label="Delta Green">
      {/* "delta" — white, uppercase, tight tracking */}
      <text
        x="0" y="15"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="white"
        letterSpacing="-0.3"
      >
        delta
      </text>
      {/* "green" — electric lime */}
      <text
        x="0" y="31"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#72EC41"
        letterSpacing="-0.3"
      >
        green
      </text>
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
