"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Calendar,
  Image,
  HelpCircle,
  Mail,
  BookOpen,
  LogOut,
  Menu,
  X,
  Dumbbell,
  ExternalLink,
} from "lucide-react";
import { isAuthenticated, logout } from "@/lib/services/auth";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Membership Plans", href: "/admin/plans", icon: CreditCard },
  { name: "Trainers", href: "/admin/trainers", icon: Users },
  { name: "Class Schedule", href: "/admin/schedule", icon: Calendar },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Messages", href: "/admin/messages", icon: Mail },
  { name: "Bookings", href: "/admin/bookings", icon: BookOpen },
];

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/plans": "Membership Plans",
  "/admin/trainers": "Trainers",
  "/admin/schedule": "Class Schedule",
  "/admin/gallery": "Gallery",
  "/admin/faqs": "FAQs",
  "/admin/messages": "Messages",
  "/admin/bookings": "Bookings",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
    document.body.classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setAuthChecked(true);
      return;
    }
    if (!isAuthenticated()) {
      router.push("/admin/login");
    } else {
      setAuthChecked(true);
    }
  }, [pathname, router]);

  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sidebarOpen) closeSidebar();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [sidebarOpen, closeSidebar]);

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const currentPage = pageTitles[pathname] || "Admin";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-gray-900 text-white flex flex-col transition-transform duration-300 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-2.5" onClick={closeSidebar}>
            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">GOLD STANDARD</div>
              <div className="text-[11px] text-gray-400">Admin Panel</div>
            </div>
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto hide-scrollbar">
          <div className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeSidebar}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <link.icon className="h-5 w-5 flex-shrink-0" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-3 py-4 border-t border-gray-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            onClick={closeSidebar}
          >
            <ExternalLink className="h-5 w-5 flex-shrink-0" />
            View Website
          </Link>
          <button
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 safe-top">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSidebarOpen(true);
                  document.body.classList.add("no-scroll");
                }}
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                {currentPage}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Site
              </Link>
              <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
