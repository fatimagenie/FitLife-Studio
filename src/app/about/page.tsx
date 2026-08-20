import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import WorkoutTips from "@/components/home/WorkoutTips";
import Transformations from "@/components/home/Transformations";
import { Target, Shield, Award, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Goal-Oriented", description: "Every program is designed to help you achieve measurable results." },
  { icon: Shield, title: "Safety First", description: "Trained staff, sanitized equipment, and proper form guidance." },
  { icon: Award, title: "Excellence", description: "We never settle for less. Quality in everything we do." },
  { icon: TrendingUp, title: "Progress Tracking", description: "Regular assessments and body composition analysis." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="About GOLD STANDARD GYM"
        subtitle="Learn about our journey, our mission, and the team behind your fitness transformation."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What <span className="text-teal-600">Drives Us</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollAnimation key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-20 bg-white">
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

      {/* Workout Tips */}
      <WorkoutTips />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-teal-100 text-lg mb-8">Join GOLD STANDARD GYM today and become part of our growing fitness family.</p>
            <a href="/plans" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
              View Membership Plans
            </a>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  );
}
