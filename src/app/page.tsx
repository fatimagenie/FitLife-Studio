import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Heart, Flame, Zap } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", description: "One-on-one sessions tailored to your goals." },
  { icon: Users, title: "Group Classes", description: "High-energy workouts with like-minded people." },
  { icon: Heart, title: "Wellness Coaching", description: "Holistic approach to health and fitness." },
];

const classes = [
  { icon: Flame, name: "HIIT Revolution", time: "45 min • High Intensity" },
  { icon: Zap, name: "Power Yoga", time: "60 min • Medium Intensity" },
];

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

        {/* Classes Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Classes</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Popular <span className="text-teal-600">Classes</span>
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {classes.map((cls, i) => (
                <ScrollAnimation key={cls.name} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <cls.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{cls.name}</h3>
                        <p className="text-gray-500 text-sm">{cls.time}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/classes" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                View All Classes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
