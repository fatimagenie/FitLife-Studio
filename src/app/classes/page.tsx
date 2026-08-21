import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { classes } from "@/data/classes";
import { ArrowRight, Clock, Flame, User } from "lucide-react";
import Link from "next/link";

const levelMap: Record<string, string> = {
  Yoga: "Beginner",
  HIIT: "Advanced",
  Strength: "Intermediate",
  Boxing: "Advanced",
  Pilates: "Beginner",
  Cardio: "Intermediate",
};

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const uniqueClasses = classes.reduce<typeof classes>((acc, current) => {
  if (!acc.find((c) => c.name === current.name)) acc.push(current);
  return acc;
}, []);

export default function ClassesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Classes"
        subtitle="Choose from our diverse range of classes designed to help you achieve your fitness goals at FITLIFE STUDIO."
        breadcrumbs={[{ label: "Classes", href: "/classes" }]}
      />

      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueClasses.map((cls, i) => {
              const level = levelMap[cls.category] || "Intermediate";
              return (
                <ScrollAnimation key={cls.id} delay={i * 80}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${cls.color} p-6 text-white relative`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[level]} text-gray-800`}>
                          {level}
                        </span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {cls.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{cls.name}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock className="h-4 w-4 text-teal-500" />
                          <span>{cls.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span>{cls.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                        <User className="h-4 w-4 text-teal-500" />
                        <span>Trainer: <span className="font-semibold text-gray-800">{cls.trainer}</span></span>
                      </div>

                      <div className="bg-teal-50 rounded-xl p-3 mb-4">
                        <p className="text-sm text-teal-700">
                          <span className="font-semibold">{cls.day}</span> at {cls.time}
                        </p>
                        <p className="text-xs text-teal-500 mt-1">
                          {cls.spots} of {cls.maxSpots} spots available
                        </p>
                      </div>

                      <Link
                        href="/schedule"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors w-full justify-center mt-auto"
                      >
                        Book Class <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Want to See the Full <span className="text-teal-600">Weekly Timetable</span>?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Browse our complete class schedule, check real-time availability, and book your favorite classes instantly.
            </p>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-colors shadow-xl"
            >
              View Full Schedule <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Join a Class?</h2>
            <p className="text-teal-100 text-lg mb-8">Start your fitness journey with FITLIFE STUDIO today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/plans" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                View Plans
              </Link>
              <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/60 transition-all">
                Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
