"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">
              GOLD <span className="text-teal-600">STANDARD</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/plans"
              className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors"
            >
              Join Now
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-3 font-medium ${
                  pathname === link.href ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/plans"
              className="block mt-2 bg-teal-600 text-white px-5 py-3 rounded-full font-medium text-center hover:bg-teal-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
