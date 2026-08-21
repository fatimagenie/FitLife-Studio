import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ClassSchedule from "@/components/ui/ClassSchedule";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { Calendar, CreditCard, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Calendar,
    title: "Browse Classes",
    description: "Explore our weekly timetable and find classes that match your interests and schedule.",
  },
  {
    icon: CreditCard,
    title: "Book Your Spot",
    description: "Reserve your spot online or through our app. Spots are limited, so book early.",
  },
  {
    icon: Users,
    title: "Show Up & Train",
    description: "Arrive 10 minutes before class, check in at the front desk, and enjoy your workout.",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Class Schedule"
        subtitle="Browse our weekly timetable and book your favorite classes at FITLIFE STUDIO. Limited spots available!"
        breadcrumbs={[{ label: "Schedule", href: "/schedule" }]}
      />

      {/* How Booking Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">
                Booking is <span className="text-teal-600">Simple</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these easy steps to secure your spot in any class at FITLIFE STUDIO.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollAnimation key={step.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                    <step.icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <ClassSchedule />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-teal-100 text-lg mb-8">Join FITLIFE STUDIO today and start booking your favorite classes.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/plans" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                View Plans
              </Link>
              <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/60 transition-all flex items-center gap-2">
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
