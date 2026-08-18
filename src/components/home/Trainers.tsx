"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { trainers as defaultTrainers } from "@/data/trainers";
import { getTrainers } from "@/lib/services/storage";
import { Trainer } from "@/types";
import ScrollAnimation from "../layout/ScrollAnimation";

export default function Trainers() {
  const [trainersList, setTrainersList] = useState<Trainer[]>(defaultTrainers);

  useEffect(() => { setTrainersList(getTrainers(defaultTrainers)); }, []);

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Meet Our <span className="text-teal-600">Expert Trainers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified professionals are dedicated to helping you reach your
              fitness goals with personalized guidance and support.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersList.slice(0, 6).map((trainer, i) => (
            <ScrollAnimation key={trainer.name} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                <div className={`h-48 bg-gradient-to-br ${trainer.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-white text-4xl font-bold backdrop-blur-sm">
                    {trainer.name.charAt(0)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-2">{trainer.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{trainer.specialization}</p>
                  <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{trainer.experience}</span>
                    <div className="flex items-center gap-3">
                      <a href={trainer.social.instagram} className="text-gray-400 hover:text-teal-600 transition-colors"><Instagram className="h-4 w-4" /></a>
                      <a href={trainer.social.twitter} className="text-gray-400 hover:text-teal-600 transition-colors"><Twitter className="h-4 w-4" /></a>
                      <a href={trainer.social.linkedin} className="text-gray-400 hover:text-teal-600 transition-colors"><Linkedin className="h-4 w-4" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/trainers" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
            View All Trainers →
          </Link>
        </div>
      </div>
    </section>
  );
}
