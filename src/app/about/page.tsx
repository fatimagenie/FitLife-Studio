import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Dumbbell, Users, Heart, Clock, Target, Shield, Award, TrendingUp } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Modern Equipment", description: "State-of-the-art machines and free weights for every workout style." },
  { icon: Users, title: "Expert Trainers", description: "Certified professionals to guide you every step of the way." },
  { icon: Heart, title: "Wellness Programs", description: "Holistic health programs including yoga, meditation, and nutrition." },
  { icon: Clock, title: "Flexible Hours", description: "Open early morning to late night to fit your schedule." },
];

const timeline = [
  { year: "2020", title: "Founded", description: "GOLD STANDARD GYM was born from a passion for fitness and community in Peshawar." },
  { year: "2021", title: "Expanded Facility", description: "Doubled our space with new equipment and dedicated training studios." },
  { year: "2023", title: "500+ Members", description: "Reached the milestone of 500 active members in our community." },
  { year: "2024", title: "Award Winning", description: "Recognized as one of the top gyms in Peshawar for quality training." },
  { year: "2025", title: "New Programs", description: "Launched CrossFit, Pilates Reformer, and Boxing programs." },
  { year: "2026", title: "Going Digital", description: "Online classes, fitness app, and virtual training now available." },
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Your Fitness Journey <span className="text-teal-600">Starts Here</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At GOLD STANDARD GYM, we believe fitness is not just about working out — it&apos;s about transforming your entire lifestyle. Our state-of-the-art facility combines cutting-edge equipment with personalized training approaches.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in the heart of Gulbahar, Peshawar, we&apos;ve helped hundreds of members achieve their fitness goals, from weight loss to muscle gain, from stress relief to athletic performance. Our team of certified trainers creates customized programs tailored to your unique needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <f.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-gray-600">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80" alt="Gym Floor" className="rounded-2xl h-48 sm:h-64 w-full object-cover" />
                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white">
                      <span className="text-4xl font-bold">10K+</span>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white">
                      <span className="text-4xl font-bold">98%</span>
                    </div>
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Training Session" className="rounded-2xl h-48 sm:h-64 w-full object-cover" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Milestones <span className="text-teal-600">That Matter</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollAnimation key={item.year} delay={i * 100}>
                  <div className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-teal-600 rounded-full -translate-x-1/2 z-10 ring-4 ring-white" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-teal-600 font-bold text-lg">{item.year}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
