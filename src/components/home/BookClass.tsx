"use client";

import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";
import { classes as defaultClasses } from "@/data/classes";
import { getClasses } from "@/lib/services/storage";
import { ClassSchedule as ClassScheduleType } from "@/types";
import BookingModal from "@/components/ui/BookingModal";
import ScrollAnimation from "../layout/ScrollAnimation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BookClass() {
  const [classList, setClassList] = useState<ClassScheduleType[]>(defaultClasses);
  const [bookingModal, setBookingModal] = useState<{ open: boolean; className?: string; trainer?: string; time?: string; day?: string }>({ open: false });

  useEffect(() => { setClassList(getClasses(defaultClasses)); }, []);

  const featuredClasses = classList.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Book a Class</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Popular <span className="text-teal-600">Classes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reserve your spot in our most popular classes. Limited seats available!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClasses.map((cls, i) => (
            <ScrollAnimation key={cls.id} delay={i * 100}>
              <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-all overflow-hidden h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-1.5 h-12 rounded-full bg-gradient-to-b ${cls.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{cls.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${cls.color} text-white`}>
                        {cls.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">with {cls.trainer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {cls.time} ({cls.duration})
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {cls.spots}/{cls.maxSpots} spots
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{cls.day}</span>
                  <button
                    onClick={() => setBookingModal({ open: true, className: cls.name, trainer: cls.trainer, time: cls.time, day: cls.day })}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      cls.spots <= 2
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    {cls.spots <= 2 ? "Almost Full" : "Book Now"}
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/schedule" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
            View Full Schedule <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModal.open}
        onClose={() => setBookingModal({ open: false })}
        className={bookingModal.className}
        trainer={bookingModal.trainer}
        time={bookingModal.time}
        day={bookingModal.day}
      />
    </section>
  );
}
