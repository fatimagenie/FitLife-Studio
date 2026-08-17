"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollAnimation from "@/components/ScrollAnimation";
import BookingModal from "@/components/BookingModal";
import { trainers } from "@/data/trainers";
import { Instagram, Twitter, Linkedin, Award } from "lucide-react";

export default function TrainersPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [bookingModal, setBookingModal] = useState<{ open: boolean; trainer?: string }>({ open: false });

  const specializations = ["all", ...new Set(trainers.map((t) => t.specialization))];
  const filtered = selectedSpecialization === "all" ? trainers : trainers.filter((t) => t.specialization === selectedSpecialization);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Trainers"
        subtitle="Meet our certified professionals dedicated to helping you reach your fitness goals at GOLD STANDARD GYM."
        breadcrumbs={[{ label: "Trainers", href: "/trainers" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSpecialization === spec
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {spec === "all" ? "All Trainers" : spec}
              </button>
            ))}
          </div>

          {/* Trainer Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((trainer, i) => (
              <ScrollAnimation key={trainer.name} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <div className={`h-56 bg-gradient-to-br ${trainer.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-white text-5xl font-bold backdrop-blur-sm">
                      {trainer.name.charAt(0)}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                    <p className="text-teal-600 font-medium text-sm mb-2">{trainer.role}</p>
                    <p className="text-gray-500 text-sm mb-3">{trainer.specialization}</p>
                    <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                    {/* Certifications */}
                    {trainer.certifications && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {trainer.certifications.map((cert) => (
                          <span key={cert} className="flex items-center gap-1 text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full">
                            <Award className="h-3 w-3" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Available Slots */}
                    {trainer.availableSlots && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 mb-1">Available:</p>
                        <div className="flex flex-wrap gap-1">
                          {trainer.availableSlots.map((slot) => (
                            <span key={slot} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{slot}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{trainer.experience}</span>
                      <div className="flex items-center gap-3">
                        <a href={trainer.social.instagram} className="text-gray-400 hover:text-teal-600 transition-colors"><Instagram className="h-4 w-4" /></a>
                        <a href={trainer.social.twitter} className="text-gray-400 hover:text-teal-600 transition-colors"><Twitter className="h-4 w-4" /></a>
                        <a href={trainer.social.linkedin} className="text-gray-400 hover:text-teal-600 transition-colors"><Linkedin className="h-4 w-4" /></a>
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingModal({ open: true, trainer: trainer.name })}
                      className="w-full mt-4 bg-teal-600 text-white py-2.5 rounded-xl font-semibold hover:bg-teal-700 transition-colors text-sm"
                    >
                      Book Session with {trainer.name.split(" ")[0]}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingModal.open}
        onClose={() => setBookingModal({ open: false })}
        trainer={bookingModal.trainer}
      />
    </div>
  );
}
