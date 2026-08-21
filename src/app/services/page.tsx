"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { Dumbbell, Users, Heart, ArrowRight, Activity, Monitor, Building2, CheckCircle, ClipboardCheck, Rocket } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
  },
  {
    icon: Activity,
    title: "Recovery & Physiotherapy",
    description: "Professional recovery services to help you heal, prevent injuries, and get back to peak performance faster with expert physiotherapy.",
    features: [
      "Sports injury rehabilitation",
      "Deep tissue massage",
      "Stretching programs",
      "Posture correction",
    ],
    price: "From Rs4,000/session",
    color: "from-green-500 to-green-700",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop",
  },
  {
    icon: Monitor,
    title: "Online Training",
    description: "Train from anywhere with our virtual coaching programs. Get personalized workouts, live sessions, and real-time feedback from expert trainers.",
    features: [
      "Live virtual sessions",
      "On-demand workout library",
      "Video form analysis",
      "Weekly check-ins",
    ],
    price: "From Rs3,500/month",
    color: "from-blue-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=250&fit=crop",
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Boost employee productivity and well-being with our tailored corporate fitness programs. Healthy teams build successful businesses.",
    features: [
      "On-site fitness classes",
      "Wellness workshops",
      "Team building activities",
      "Health assessments",
    ],
    price: "Custom Packages",
    color: "from-orange-500 to-orange-700",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=250&fit=crop",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Consultation",
    description: "We assess your current fitness level, understand your goals, and design a personalized plan tailored just for you.",
  },
  {
    icon: Dumbbell,
    title: "Training",
    description: "Start your customized workouts with expert guidance. Our trainers ensure proper form and maximum results.",
  },
  {
    icon: Rocket,
    title: "Transformation",
    description: "Track your progress, celebrate milestones, and witness your body and mind transform over time.",
  },
];

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 500, suffix: "+", label: "Active Members" },
  { number: 15, suffix: "+", label: "Expert Trainers" },
  { number: 50, suffix: "+", label: "Weekly Classes" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive fitness and wellness services designed to help you achieve your goals at FITLIFE STUDIO."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollAnimation key={service.title} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-2">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.price}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0" />
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Your Fitness Journey in <span className="text-teal-600">3 Steps</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting started at FITLIFE STUDIO is simple. Follow these three steps and begin your transformation today.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollAnimation key={step.title} delay={i * 150}>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Counter Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                What Makes <span className="text-teal-600">FITLIFE</span> Different
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollAnimation key={stat.label} delay={i * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg overflow-hidden">
                  <span className="text-4xl font-bold text-teal-600">
                    <AnimatedCounter target={stat.number} />{stat.suffix}
                  </span>
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
            <p className="text-teal-100 text-lg mb-8">Join FITLIFE STUDIO today and experience the difference.</p>
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
