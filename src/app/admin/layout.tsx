"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { isAuthenticated, logout } from "@/lib/services/auth";
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Calendar,
  Image,
  HelpCircle,
  MessageSquare,
  BookOpen,
  LogOut,
  Menu,
  X,
  Dumbbell,
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Membership Plans", href: "/admin/plans", icon: CreditCard },
  { name: "Trainers", href: "/admin/trainers", icon: Users },
  { name: "Class Schedule", href: "/admin/schedule", icon: Calendar },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Bookings", href: "/admin/bookings", icon: BookOpen },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

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

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-teal-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
          <Dumbbell className="h-8 w-8 text-teal-400" />
          <div>
            <div className="font-bold text-sm">GOLD STANDARD</div>
            <div className="text-xs text-gray-400">Admin Panel</div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-4 py-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {sidebarLinks.find((l) => l.href === pathname)?.name || "Admin"}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-teal-600 transition-colors">
                View Website
              </Link>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
