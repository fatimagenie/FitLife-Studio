"use client";

import Link from "next/link";
import {
  CreditCard,
  Users,
  Calendar,
  BookOpen,
  Mail,
  ArrowRight,
  TrendingUp,
  Clock,
} from "lucide-react";
import { plans as defaultPlans } from "@/data/plans";
import { trainers as defaultTrainers } from "@/data/trainers";
import { classes as defaultClasses } from "@/data/classes";
import { getPlans, getTrainers, getClasses, getBookings, getMessages } from "@/lib/services/storage";
import { useEffect, useState } from "react";

const stats = [
  {
    label: "Membership Plans",
    icon: CreditCard,
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    href: "/admin/plans",
  },
  {
    label: "Trainers",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    href: "/admin/trainers",
  },
  {
    label: "Weekly Classes",
    icon: Calendar,
    color: "from-orange-500 to-orange-600",
    bgLight: "bg-orange-50",
    textColor: "text-orange-600",
    href: "/admin/schedule",
  },
  {
    label: "Bookings",
    icon: BookOpen,
    color: "from-green-500 to-green-600",
    bgLight: "bg-green-50",
    textColor: "text-green-600",
    href: "/admin/bookings",
  },
  {
    label: "Messages",
    icon: Mail,
    color: "from-pink-500 to-pink-600",
    bgLight: "bg-pink-50",
    textColor: "text-pink-600",
    href: "/admin/messages",
  },
];

const quickActions = [
  { label: "Edit Plans", href: "/admin/plans", icon: CreditCard, color: "bg-blue-500" },
  { label: "Edit Trainers", href: "/admin/trainers", icon: Users, color: "bg-purple-500" },
  { label: "Edit Schedule", href: "/admin/schedule", icon: Calendar, color: "bg-orange-500" },
  { label: "View Website", href: "/", icon: ArrowRight, color: "bg-teal-500" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ plans: 0, trainers: 0, classes: 0, bookings: 0, messages: 0, unread: 0 });

  useEffect(() => {
    setCounts({
      plans: getPlans(defaultPlans).length,
      trainers: getTrainers(defaultTrainers).length,
      classes: getClasses(defaultClasses).length,
      bookings: getBookings().length,
      messages: getMessages().length,
      unread: getMessages().filter((m) => !m.read).length,
    });
  }, []);

  const countValues = [counts.plans, counts.trainers, counts.classes, counts.bookings, counts.messages];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Welcome back, Admin!</h2>
            <p className="text-teal-100 text-sm">Here&apos;s what&apos;s happening with your gym today.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
          >
            <div className={`w-10 h-10 ${stat.bgLight} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`h-5 w-5 ${stat.textColor}`} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{countValues[i]}</div>
            <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {action.label}
                </div>
                <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  Manage <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-400" />
          System Info
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Data Storage</span>
            <span className="font-medium text-gray-900">localStorage</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Unread Messages</span>
            <span className={`font-medium ${counts.unread > 0 ? "text-red-500" : "text-gray-900"}`}>
              {counts.unread}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Total Bookings</span>
            <span className="font-medium text-gray-900">{counts.bookings}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Active Classes</span>
            <span className="font-medium text-gray-900">{counts.classes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
