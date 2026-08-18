"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs = [] }: Props) {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-teal-200 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href={crumb.href} className="hover:text-white transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white font-medium">{title}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-teal-100 text-lg max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
