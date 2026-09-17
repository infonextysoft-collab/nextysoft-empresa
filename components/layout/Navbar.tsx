"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/links";
import { waLink } from "@/constants/contact";
import { WhatsAppIcon } from "@/components/ui/icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const esActivo = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold" onClick={() => setMenuOpen(false)}>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
          <span className="text-gray-800">Nexty</span>
          <span className="text-blue-500">Soft</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={esActivo(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  esActivo(link.href) ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href={waLink("Hola, quisiera más información 👋")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100 transition"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="menu-movil" className="md:hidden px-6 pb-5 flex flex-col gap-1 bg-white border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={esActivo(link.href) ? "page" : undefined}
              className={`py-2.5 text-sm font-medium transition-colors duration-200 ${
                esActivo(link.href) ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={waLink("Hola, quisiera más información 👋")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 w-full"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
