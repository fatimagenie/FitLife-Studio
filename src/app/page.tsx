import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Trainers from "@/components/home/Trainers";
import MembershipPlans from "@/components/home/MembershipPlans";
import BookClass from "@/components/home/BookClass";
import Testimonials from "@/components/home/Testimonials";
import Transformations from "@/components/home/Transformations";
import WorkoutTips from "@/components/home/WorkoutTips";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Heart, TrendingUp, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "One-on-one sessions tailored to your goals.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "High-energy workouts with like-minded people.",
  },
  {
    icon: Heart,
    title: "Wellness Coaching",
    description: "Holistic approach to health and fitness.",
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Active Members" },
  { icon: Award, value: "50+", label: "Expert Trainers" },
  { icon: TrendingUp, value: "10000+", label: "Transformations" },
  { icon: Clock, value: "10+", label: "Years Experience" },
];

function CounterStat({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
        <Icon className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1">
        {value}
      </div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-10 sm:mb-12">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                  Our Services
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  What We <span className="text-teal-600">Offer</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  From personal training to group classes, we have everything you need to reach your fitness goals.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((service, i) => (
                <ScrollAnimation key={service.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={300}>
              <div className="text-center mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
                >
                  View All Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation delay={400}>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <CounterStat key={stat.label} {...stat} />
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Trainers />
        <MembershipPlans />
        <BookClass />
        <Testimonials />
        <Transformations />
        <WorkoutTips />

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollAnimation>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Limited Time Offer
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Life?
              </h2>
              <p className="text-teal-100 text-base sm:text-lg mb-4">
                Start your fitness journey today with a free trial. No commitment required.
              </p>
              <p className="text-white/80 text-sm mb-8">
                Join 5000+ members who already started their transformation. Offer ends soon!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                <Link
                  href="/plans"
                  className="w-full sm:w-auto bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-teal-50 transition-all shadow-xl text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all text-center"
                >
                  Talk to a Trainer
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
