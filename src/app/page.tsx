import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* About Snippet - Simplified */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  Your Fitness Journey <span className="text-teal-600">Starts Here</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  At GOLD STANDARD GYM, we believe fitness is about transforming your entire lifestyle.
                  Our facility combines cutting-edge equipment with personalized training approaches.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
