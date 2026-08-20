import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import WorkoutTips from "@/components/home/WorkoutTips";
import Transformations from "@/components/home/Transformations";
import { Target, Shield, Award, TrendingUp, Leaf, Users, UserCheck } from "lucide-react";

const timeline = [
  { year: "2020", title: "Founded", description: "GOLD STANDARD GYM was born from a passion for fitness and community in Peshawar." },
  { year: "2021", title: "Expanded Facility", description: "Doubled our space with new equipment and dedicated training studios." },
  { year: "2023", title: "500+ Members", description: "Reached the milestone of 500 active members in our community." },
  { year: "2024", title: "Award Winning", description: "Recognized as one of the top gyms in Peshawar for quality training." },
  { year: "2025", title: "New Programs", description: "Launched CrossFit, Pilates Reformer, and Boxing programs." },
  { year: "2026", title: "Going Digital", description: "Online classes, fitness app, and virtual training now available." },
];

const philosophy = [
  { icon: Leaf, title: "Holistic Wellness", description: "We believe in nurturing both body and mind for complete well-being." },
  { icon: Users, title: "Community First", description: "Our supportive community helps every member feel motivated and connected." },
  { icon: UserCheck, title: "Personalized Journey", description: "Every fitness journey is unique, so we create individualized programs." },
];

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

      {/* Our Story - Professional Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                Since 2020, GOLD STANDARD GYM has been more than just a gym — we&apos;re a community
                dedicated to transforming lives through innovative fitness solutions and unwavering support.
              </p>
            </div>
          </ScrollAnimation>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-300 -translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <ScrollAnimation key={item.year} delay={i * 100}>
                  <div className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-purple-500 rounded-full -translate-x-1/2 z-10 ring-4 ring-white shadow-lg" />

                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                      <div className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        <span className="text-purple-500 font-bold text-lg">{item.year}</span>
                        <h3 className="font-bold text-gray-900 text-xl mt-1 mb-3">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What <span className="text-teal-600">Guides Us</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <ScrollAnimation key={item.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

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
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
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
