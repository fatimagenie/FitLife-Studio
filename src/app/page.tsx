import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import BookClass from "@/components/home/BookClass";
import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Heart } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", description: "One-on-one sessions tailored to your goals." },
  { icon: Users, title: "Group Classes", description: "High-energy workouts with like-minded people." },
  { icon: Heart, title: "Wellness Coaching", description: "Holistic approach to health and fitness." },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* Services Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  What We <span className="text-teal-600">Offer</span>
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <ScrollAnimation key={service.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Book a Class */}
        <BookClass />

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
