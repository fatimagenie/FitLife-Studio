"use client";

import { useState, useEffect } from "react";
import { getBookings, deleteBooking, updateBookingStatus, Booking } from "@/lib/storage";
import { Trash2, CheckCircle, Clock, XCircle, Filter } from "lucide-react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => { setBookings(getBookings()); }, []);

  const refresh = () => setBookings(getBookings());

  const handleDelete = (id: string) => {
    if (confirm("Delete this booking?")) {
      deleteBooking(id);
      refresh();
    }
  };

  const handleStatus = (id: string, status: Booking["status"]) => {
    updateBookingStatus(id, status);
    refresh();
  };

  const filtered = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const statusConfig = {
    confirmed: { icon: CheckCircle, color: "text-green-600 bg-green-50", label: "Confirmed" },
    pending: { icon: Clock, color: "text-orange-600 bg-orange-50", label: "Pending" },
    cancelled: { icon: XCircle, color: "text-red-600 bg-red-50", label: "Cancelled" },
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Bookings</h2>
          <p className="text-gray-500 text-sm">Class and session booking requests ({bookings.length} total)</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          {["all", "confirmed", "pending", "cancelled"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filter === f ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center text-gray-500">
          <Clock className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p>{filter === "all" ? "No bookings yet" : `No ${filter} bookings`}</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Member</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Class</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Day/Time</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map((booking) => {
                const sc = statusConfig[booking.status];
                return (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900 text-sm">{booking.name}</div>
                      <div className="text-xs text-gray-500">{booking.email}</div>
                      <div className="text-xs text-gray-500">{booking.phone}</div>
                    </td>
                    <td className="px-5 py-4 text-sm">{booking.className || "N/A"}</td>
                    <td className="px-5 py-4 text-sm">
                      <div>{booking.day || "N/A"}</div>
                      <div className="text-xs text-gray-500">{booking.time || ""}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${sc.color}`}>
                        <sc.icon className="h-3 w-3" /> {sc.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {booking.status !== "confirmed" && (
                          <button onClick={() => handleStatus(booking.id, "confirmed")} className="p-1.5 hover:bg-green-50 rounded text-green-600" title="Confirm"><CheckCircle className="h-4 w-4" /></button>
                        )}
                        {booking.status !== "cancelled" && (
                          <button onClick={() => handleStatus(booking.id, "cancelled")} className="p-1.5 hover:bg-red-50 rounded text-red-600" title="Cancel"><XCircle className="h-4 w-4" /></button>
                        )}
                        <button onClick={() => handleDelete(booking.id)} className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Delete"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
