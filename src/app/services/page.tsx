import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { Dumbbell, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals, fitness level, and schedule. Our certified trainers create customized workout plans just for you.",
    features: [
      "Customized workout plans",
      "Nutrition guidance",
      "Progress tracking",
      "Flexible scheduling",
    ],
    price: "From Rs5,000/month",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "High-energy group workouts that combine fun with effectiveness. Join our community and stay motivated with like-minded fitness enthusiasts.",
    features: [
      "HIIT & Circuit Training",
      "Yoga & Pilates",
      "Zumba & Dance",
      "Boxing & MMA",
    ],
    price: "From Rs2,500/month",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Heart,
    title: "Wellness Coaching",
    description: "Holistic approach to health combining physical training with mental wellness, nutrition planning, and lifestyle coaching.",
    features: [
      "Mental wellness support",
      "Meal planning",
      "Sleep optimization",
      "Stress management",
    ],
    price: "From Rs8,000/month",
    color: "from-pink-500 to-pink-700",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive fitness and wellness services designed to help you achieve your goals at GOLD STANDARD GYM."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollAnimation key={service.title} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.price}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What Makes <span className="text-teal-600">GOLD STANDARD</span> Different
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Active Members" },
              { number: "15+", label: "Expert Trainers" },
              { number: "50+", label: "Weekly Classes" },
            ].map((stat, i) => (
              <ScrollAnimation key={stat.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg overflow-hidden">
                  <span className="text-4xl font-bold text-teal-600">{stat.number}</span>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-teal-100 text-lg mb-8">Join GOLD STANDARD GYM today and experience the difference.</p>
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
