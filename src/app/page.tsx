import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import Link from "next/link";
import { plans as defaultPlans } from "@/data/plans";
import { trainers as defaultTrainers } from "@/data/trainers";
import { Check, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredPlans = defaultPlans.slice(0, 3);
  const featuredTrainers = defaultTrainers.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        {/* About Snippet */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  Your Fitness Journey <span className="text-teal-600">Starts Here</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  At GOLD STANDARD GYM, we believe fitness is not just about working out —
                  it&apos;s about transforming your entire lifestyle. Our facility combines
                  cutting-edge equipment with personalized training approaches.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Located in the heart of Gulbahar, Peshawar, we&apos;ve helped hundreds of members achieve their
                  fitness goals. Our certified trainers create customized programs tailored to your unique needs.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" alt="Gym Floor" className="rounded-2xl h-48 sm:h-64 w-full object-cover shadow-lg" />
                      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white shadow-lg">
                        <span className="text-4xl font-bold">10K+</span>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white shadow-lg">
                        <span className="text-4xl font-bold">98%</span>
                      </div>
                      <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Training" className="rounded-2xl h-48 sm:h-64 w-full object-cover shadow-lg" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Plans Teaser */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Membership Plans</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Choose Your <span className="text-teal-600">Perfect Plan</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Select the plan that fits your fitness goals. All plans include access
                  to our world-class facility and expert support.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPlans.map((plan, i) => (
                <ScrollAnimation key={plan.name} delay={i * 100}>
                  <div
                    className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full ${
                      plan.popular
                        ? "ring-2 ring-teal-600 scale-105"
                        : "border border-gray-100"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-sm text-gray-500">Rs</span>
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/plans"
                      className={`block w-full py-3 rounded-full font-semibold transition-colors text-center ${
                        plan.popular
                          ? "bg-teal-600 text-white hover:bg-teal-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/plans" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
                View All Plans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trainers Teaser */}
        <section className="py-20 bg-white">
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
              {featuredTrainers.map((trainer, i) => (
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

                      <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{trainer.experience}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/trainers" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
                View All Trainers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
