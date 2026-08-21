import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { Target, Shield, Award, TrendingUp, Eye, Heart, Users, Dumbbell, CheckCircle } from "lucide-react";

const values = [
  { icon: Target, title: "Goal-Oriented", description: "Every program is designed to help you achieve measurable results." },
  { icon: Shield, title: "Safety First", description: "Trained staff, sanitized equipment, and proper form guidance." },
  { icon: Award, title: "Excellence", description: "We never settle for less. Quality in everything we do." },
  { icon: TrendingUp, title: "Progress Tracking", description: "Regular assessments and body composition analysis." },
];

const stats = [
  { icon: Users, number: "500+", label: "Active Members" },
  { icon: Dumbbell, number: "50+", label: "Weekly Classes" },
  { icon: Award, number: "15+", label: "Expert Trainers" },
  { icon: Target, number: "10+", label: "Years Experience" },
];

const whyChooseUs = [
  "State-of-the-art equipment from leading global brands",
  "Certified trainers with international qualifications",
  "Personalized workout and nutrition plans for every member",
  "Flexible class schedules to fit your busy lifestyle",
  "Supportive community that keeps you motivated",
  "Clean, hygienic, and well-maintained facilities",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="About FITLIFE STUDIO"
        subtitle="Learn about our journey, our mission, and the team behind your fitness transformation."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-2xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
                  alt="FITLIFE STUDIO Facility"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div>
                <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Empowering Lives Through <span className="text-teal-600">Fitness</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At FITLIFE STUDIO, our mission is to make fitness accessible, enjoyable, and effective for everyone. 
                  We believe that a healthy body leads to a healthy mind, and we are committed to providing the tools, 
                  guidance, and environment you need to unlock your full potential.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <ScrollAnimation delay={100}>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals of all fitness levels to achieve their health and wellness goals through 
                  expert guidance, cutting-edge facilities, and a supportive community that celebrates every milestone.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading fitness destination in the region, recognized for transforming lives through 
                  innovative training programs, holistic wellness solutions, and an unwavering commitment to member success.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollAnimation key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <stat.icon className="h-8 w-8 text-teal-200 mx-auto mb-2" />
                  <span className="text-3xl sm:text-4xl font-bold text-white">{stat.number}</span>
                  <p className="text-teal-100 text-sm mt-1">{stat.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                The <span className="text-teal-600">FITLIFE</span> Difference
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                FITLIFE STUDIO is more than just a gym — it&apos;s a community dedicated to helping you become the best 
                version of yourself. With years of experience, certified professionals, and a passion for fitness, 
                we provide everything you need to start, sustain, and enjoy your fitness journey.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-2xl -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop"
                  alt="FITLIFE STUDIO Training"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-teal-100 text-lg mb-8">Join FITLIFE STUDIO today and become part of our growing fitness family.</p>
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
