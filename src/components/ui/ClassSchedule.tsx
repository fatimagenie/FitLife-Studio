"use client";

import { useState, useEffect } from "react";
import { Clock, Users, Filter } from "lucide-react";
import { classes as defaultClasses, days } from "@/data/classes";
import { getClasses } from "@/lib/services/storage";
import { ClassSchedule as ClassScheduleType } from "@/types";
import BookingModal from "./BookingModal";

export default function ClassSchedule() {
  const [classList, setClassList] = useState<ClassScheduleType[]>(defaultClasses);

  useEffect(() => { setClassList(getClasses(defaultClasses)); }, []);

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bookingModal, setBookingModal] = useState<{ open: boolean; className?: string; trainer?: string; time?: string; day?: string }>({ open: false });

  const categories = ["all", ...new Set(classList.map((c) => c.category))];

  const filtered = classList.filter(
    (c) => c.day === selectedDay && (selectedCategory === "all" || c.category === selectedCategory)
  );

  return (
    <div>
      {/* Day Selector */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedDay === day
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Filter className="h-4 w-4 text-gray-400" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-teal-100 text-teal-700"
                : "bg-gray-50 text-gray-500 hover:bg-gray-100"
            }`}
          >
            {cat === "all" ? "All Classes" : cat}
          </button>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No classes scheduled for this day.</p>
            <p className="text-sm mt-1">Try selecting a different day or category.</p>
          </div>
        ) : (
          filtered.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-lg transition-all"
            >
              {/* Color Bar */}
              <div className={`w-1.5 h-16 sm:h-12 rounded-full bg-gradient-to-b ${cls.color} flex-shrink-0 hidden sm:block`} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900">{cls.name}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${cls.color} text-white`}>
                    {cls.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500">with {cls.trainer}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {cls.time} ({cls.duration})
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {cls.spots}/{cls.maxSpots} spots
                </div>
              </div>

              <button
                onClick={() => setBookingModal({ open: true, className: cls.name, trainer: cls.trainer, time: cls.time, day: cls.day })}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cls.spots <= 2
                    ? "bg-red-100 text-red-600 hover:bg-red-200"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {cls.spots <= 2 ? "Almost Full" : "Book"}
              </button>
            </div>
          ))
        )}
      </div>

      <BookingModal
        isOpen={bookingModal.open}
        onClose={() => setBookingModal({ open: false })}
        className={bookingModal.className}
        trainer={bookingModal.trainer}
        time={bookingModal.time}
        day={bookingModal.day}
      />
    </div>
  );
}
