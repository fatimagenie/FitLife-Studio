import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MembershipPlans from "@/components/MembershipPlans";
import Trainers from "@/components/Trainers";
import WorkoutTips from "@/components/WorkoutTips";
import Testimonials from "@/components/Testimonials";
import Transformations from "@/components/Transformations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MembershipPlans />
        <Trainers />
        <WorkoutTips />

        {/* Transformations Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Transformations</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Real People, Real <span className="text-teal-600">Results</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See how our members have transformed their lives through dedicated training and our expert guidance.
                </p>
              </div>
            </ScrollAnimation>
            <Transformations />
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Life?</h2>
              <p className="text-teal-100 text-lg mb-8">Start your fitness journey today with a free trial. No commitment required.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/plans" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                  Start Free Trial
                </Link>
                <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/60 transition-all">
                  Contact Us
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
