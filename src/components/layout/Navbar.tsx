"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Classes", href: "/classes" },
  { name: "Plans", href: "/plans" },
  { name: "Trainers", href: "/trainers" },
  { name: "Schedule", href: "/schedule" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.classList.remove("no-scroll");
  }, []);

  const openMenu = useCallback(() => {
    setMobileMenuOpen(true);
    document.body.classList.add("no-scroll");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen, closeMenu]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">
                FITLIFE <span className="text-teal-600">STUDIO</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all group ${
                    pathname === link.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-teal-600 transition-all duration-300 ${
                      pathname === link.href
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              ))}
              <a
                href="tel:+923169689595"
                className="ml-2 flex items-center gap-2 bg-teal-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span>+92 316 9689595</span>
              </a>
            </div>

            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={mobileMenuOpen ? closeMenu : openMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <Dumbbell className="h-7 w-7 text-teal-600" />
              <span className="text-lg font-bold text-gray-900">
                FITLIFE <span className="text-teal-600">STUDIO</span>
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4 px-3 hide-scrollbar">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all mb-1 ${
                  pathname === link.href
                    ? "text-teal-600 bg-teal-50 border-l-4 border-teal-600"
                    : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                }`}
                onClick={closeMenu}
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-5 py-5 border-t border-gray-100 safe-bottom">
            <a
              href="tel:+923169689595"
              className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3.5 rounded-xl font-semibold text-center hover:bg-teal-700 transition-all shadow-md mb-3"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <p className="text-center text-xs text-gray-400">
              #1 Gym in Gulbahar, Peshawar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
