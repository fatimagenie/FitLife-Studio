"use client";

import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Plans", href: "#plans" },
  { name: "Trainers", href: "#trainers" },
  { name: "Workouts", href: "#workouts" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">
              FitLife <span className="text-teal-600">Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#plans"
              className="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-teal-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#plans"
              className="block mt-2 bg-teal-600 text-white px-5 py-2 rounded-full font-medium text-center hover:bg-teal-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
