import Link from "next/link";
import { Dumbbell, Instagram, Twitter, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Plans", href: "/plans" },
    { name: "Trainers", href: "/trainers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
  ],
  Services: [
    { name: "Personal Training", href: "/trainers" },
    { name: "Group Classes", href: "/schedule" },
    { name: "Yoga Sessions", href: "/schedule" },
    { name: "Nutrition Plans", href: "/plans" },
    { name: "Recovery", href: "/about" },
  ],
  Support: [
    { name: "FAQs", href: "/plans" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">FitLife <span className="text-teal-400">Studio</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
              Transform your body, elevate your mind. Join the fitness revolution
              at FitLife Studio.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-teal-400" />
                123 Fitness Avenue, Sector 15, Gurugram
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-teal-400" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-teal-400" />
                info@fitlifestudio.com
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Youtube className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-teal-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">&copy; 2026 FitLife Studio. All rights reserved.</p>
            <p className="text-gray-500 text-xs">Made with passion for fitness in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
