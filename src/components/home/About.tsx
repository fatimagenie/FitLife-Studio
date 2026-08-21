import Link from "next/link";
import { Dumbbell, Users, Heart, Clock } from "lucide-react";
import ScrollAnimation from "../layout/ScrollAnimation";

const features = [
  { icon: Dumbbell, title: "Modern Equipment", description: "State-of-the-art machines and free weights for every workout style." },
  { icon: Users, title: "Expert Trainers", description: "Certified professionals to guide you every step of the way." },
  { icon: Heart, title: "Wellness Programs", description: "Holistic health programs including yoga, meditation, and nutrition." },
  { icon: Clock, title: "Flexible Hours", description: "Open early to late to fit your schedule, early bird or night owl." },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Your Fitness Journey <span className="text-teal-600">Starts Here</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At FitLife Studio, we believe fitness is not just about working out —
              it&apos;s about transforming your entire lifestyle. Our facility combines
              cutting-edge equipment with personalized training approaches.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Gulbahar, Peshawar, we&apos;ve helped hundreds of members achieve their
              fitness goals, from weight loss to muscle gain, from stress relief
              to athletic performance. Our team of certified trainers creates
              customized programs tailored to your unique needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, i) => (
                <ScrollAnimation key={feature.title} delay={i * 100}>
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
              Read More About Us 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80" 
                      alt="Gym Floor" 
                      className="h-48 sm:h-64 w-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white shadow-lg border-t-4 border-teal-400">
                    <span className="text-4xl font-bold">10K+</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white shadow-lg border-t-4 border-teal-500">
                    <span className="text-4xl font-bold">98%</span>
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" 
                      alt="Training" 
                      className="h-48 sm:h-64 w-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
