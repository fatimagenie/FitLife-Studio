"use client";

import { useState, useEffect } from "react";
import { Trash2, CheckCircle, Clock, XCircle, BookOpen } from "lucide-react";
import { getBookings, deleteBooking, updateBookingStatus, Booking } from "@/lib/services/storage";

type FilterStatus = "all" | "confirmed" | "pending" | "cancelled";

const statusConfig = {
  confirmed: { icon: CheckCircle, color: "bg-green-100 text-green-600", label: "Confirmed" },
  pending: { icon: Clock, color: "bg-orange-100 text-orange-600", label: "Pending" },
  cancelled: { icon: XCircle, color: "bg-red-100 text-red-600", label: "Cancelled" },
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings().then(setBookings).finally(() => setLoading(false));
  }, []);

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const handleStatus = async (id: string, status: Booking["status"]) => {
    try {
      await updateBookingStatus(id, status);
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to update booking status:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this booking? This cannot be undone.")) return;
    try {
      await deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error("Failed to delete booking:", err);
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const filters: { label: string; value: FilterStatus; count: number }[] = [
    { label: "All", value: "all", count: bookings.length },
    { label: "Confirmed", value: "confirmed", count: bookings.filter((b) => b.status === "confirmed").length },
    { label: "Pending", value: "pending", count: bookings.filter((b) => b.status === "pending").length },
    { label: "Cancelled", value: "cancelled", count: bookings.filter((b) => b.status === "cancelled").length },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <div className="h-7 bg-gray-200 rounded w-28 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-36 mt-2 animate-pulse" />
        </div>
        <div className="flex gap-2 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-9 bg-gray-200 rounded-full w-24" />
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded flex-1" />
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Bookings</h2>
          <p className="text-sm text-gray-500 mt-1">{bookings.length} total bookings</p>
        </div>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm animate-fade-in">
          <CheckCircle className="h-4 w-4" /> Updated successfully!
        </div>
      )}

      {/* Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
              filter === f.value
                ? "bg-teal-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-teal-300"
            }`}
          >
            {f.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${filter === f.value ? "bg-white/20" : "bg-gray-100"}`}>{f.count}</span>
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Member</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Class</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Day/Time</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-600">Date</th>
                <th className="text-right px-5 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((booking) => {
                const cfg = statusConfig[booking.status];
                return (
                  <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900">{booking.name}</div>
                      <div className="text-xs text-gray-500">{booking.email}</div>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{booking.className || "N/A"}</td>
                    <td className="px-5 py-4">
                      <div className="text-gray-600">{booking.day || "N/A"}</div>
                      <div className="text-xs text-gray-400">{booking.time || ""}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.color}`}>
                        <cfg.icon className="h-3 w-3" /> {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs">{formatDate(booking.date)}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {booking.status !== "confirmed" && (
                          <button onClick={() => handleStatus(booking.id, "confirmed")} className="p-2 rounded-lg hover:bg-green-50 text-green-600 transition-colors" title="Confirm">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                        )}
                        {booking.status !== "cancelled" && (
                          <button onClick={() => handleStatus(booking.id, "cancelled")} className="p-2 rounded-lg hover:bg-orange-50 text-orange-500 transition-colors" title="Cancel">
                            <XCircle className="h-4 w-4" />
                          </button>
                        )}
                        <button onClick={() => handleDelete(booking.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-3">
        {filtered.map((booking) => {
          const cfg = statusConfig[booking.status];
          return (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-bold text-gray-900">{booking.name}</div>
                  <div className="text-xs text-gray-500">{booking.email}</div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold ${cfg.color}`}>
                  <cfg.icon className="h-3 w-3" /> {cfg.label}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                <div>Class: {booking.className || "N/A"}</div>
                <div>Day: {booking.day || "N/A"}</div>
                <div>Time: {booking.time || "N/A"}</div>
                <div>{formatDate(booking.date)}</div>
              </div>
              <div className="flex items-center gap-2">
                {booking.status !== "confirmed" && (
                  <button onClick={() => handleStatus(booking.id, "confirmed")} className="flex-1 py-2 rounded-lg bg-green-50 text-green-600 text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" /> Confirm
                  </button>
                )}
                {booking.status !== "cancelled" && (
                  <button onClick={() => handleStatus(booking.id, "cancelled")} className="flex-1 py-2 rounded-lg bg-orange-50 text-orange-500 text-sm font-medium hover:bg-orange-100 transition-colors flex items-center justify-center gap-1">
                    <XCircle className="h-3.5 w-3.5" /> Cancel
                  </button>
                )}
                <button onClick={() => handleDelete(booking.id)} className="py-2 px-3 rounded-lg bg-red-50 text-red-500 text-sm font-medium hover:bg-red-100 transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">
            {filter === "all" ? "No bookings yet" : `No ${filter} bookings`}
          </p>
        </div>
      )}
    </div>
  );
}
