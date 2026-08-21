"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollAnimation from "../layout/ScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

function StatCounter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
        {count}{suffix}
      </div>
      <div className="text-teal-200 font-medium text-xs sm:text-sm">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Gym Interior"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/70 to-teal-900/90" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="hidden sm:block absolute bottom-32 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <ScrollAnimation>
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm relative overflow-hidden">
              <span className="relative z-10">#1 Gym in Gulbahar, Peshawar</span>
              <span className="absolute inset-0 animate-shimmer" />
            </span>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Build Your Strength,
              <br />
              <span className="text-teal-200">Transform Your Body</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-base sm:text-xl text-teal-100 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              Join FitLife Studio and discover a new you. Expert trainers,
              state-of-the-art equipment, and a community that supports your
              fitness journey.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/plans"
                className="group w-full sm:w-auto bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-teal-50 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/gallery"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                Visit Our Gym
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
              <StatCounter end={500} label="Happy Members" suffix="+" />
              <StatCounter end={15} label="Expert Trainers" suffix="+" />
              <StatCounter end={50} label="Weekly Classes" suffix="+" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
