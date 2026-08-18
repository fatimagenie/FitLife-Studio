"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { plans } from "@/data/plans";
import { trainers } from "@/data/trainers";
import { classes } from "@/data/classes";
import { getBookings, getMessages } from "@/lib/services/storage";
import { CreditCard, Users, Calendar, MessageSquare, BookOpen, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ plans: 0, trainers: 0, classes: 0, bookings: 0, messages: 0 });

  useEffect(() => {
    setStats({
      plans: plans.length,
      trainers: trainers.length,
      classes: classes.length,
      bookings: getBookings().length,
      messages: getMessages().length,
    });
  }, []);

  const statCards = [
    { label: "Membership Plans", value: stats.plans, icon: CreditCard, href: "/admin/plans", color: "bg-blue-500" },
    { label: "Trainers", value: stats.trainers, icon: Users, href: "/admin/trainers", color: "bg-purple-500" },
    { label: "Weekly Classes", value: stats.classes, icon: Calendar, href: "/admin/schedule", color: "bg-orange-500" },
    { label: "Bookings", value: stats.bookings, icon: BookOpen, href: "/admin/bookings", color: "bg-green-500" },
    { label: "Messages", value: stats.messages, icon: MessageSquare, href: "/admin/messages", color: "bg-pink-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h2>
        <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your gym.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center`}>
                <card.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            <div className="text-sm text-gray-500">{card.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/admin/plans" className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
            <CreditCard className="h-4 w-4" /> Edit Plans
          </Link>
          <Link href="/admin/trainers" className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
            <Users className="h-4 w-4" /> Edit Trainers
          </Link>
          <Link href="/admin/schedule" className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
            <Calendar className="h-4 w-4" /> Edit Schedule
          </Link>
          <Link href="/" target="_blank" className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-colors text-sm font-medium">
            <TrendingUp className="h-4 w-4" /> View Website
          </Link>
        </div>
      </div>
    </div>
  );
}
