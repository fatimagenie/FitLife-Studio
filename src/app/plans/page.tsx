import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import MembershipPlans from "@/components/home/MembershipPlans";
import FAQ from "@/components/ui/FAQ";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { CheckCircle, Star, Gift } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Member since 2022",
    content: "FITLIFE STUDIO changed my life. I lost 15kg in 6 months with the help of amazing trainers. The community here keeps me motivated every single day.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "Member since 2023",
    content: "The group classes are incredible! I've never been this consistent with my workouts. The trainers genuinely care about your progress.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Member since 2021",
    content: "Best investment I've ever made in myself. The personal training sessions are worth every rupee. Highly recommend FITLIFE STUDIO to everyone.",
    rating: 5,
  },
];

export default function PlansPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Membership Plans"
        subtitle="Choose the plan that fits your fitness goals. All plans include access to our world-class facility at FITLIFE STUDIO."
        breadcrumbs={[{ label: "Plans", href: "/plans" }]}
      />

      {/* Free Trial Highlight */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <Gift className="h-10 w-10 text-teal-600" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Free 3-Day Trial
                </h2>
                <p className="text-gray-600 mb-4">
                  Experience FITLIFE STUDIO before you commit. Get full access to our facility, classes, and equipment for 3 days — completely free. No strings attached.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
                >
                  Claim Your Free Trial
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <MembershipPlans />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What Our <span className="text-teal-600">Members</span> Say
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollAnimation key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 flex-1 mb-6">&quot;{t.content}&quot;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Frequently Asked <span className="text-teal-600">Questions</span>
              </h2>
            </div>
          </ScrollAnimation>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-teal-100 text-lg mb-8">Our team is here to help you find the perfect plan for your fitness goals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
                Contact Us
              </Link>
              <Link href="/about" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white/60 transition-all">
                Learn About Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
