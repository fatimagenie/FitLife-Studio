import { Dumbbell, Users, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art machines and free weights for every workout style.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals to guide you every step of the way.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Holistic health programs including yoga, meditation, and nutrition.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 24/7 to fit your schedule, early bird or night owl.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Your Fitness Journey{" "}
              <span className="text-teal-600">Starts Here</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At FitLife Studio, we believe fitness is not just about working out —
              it&apos;s about transforming your entire lifestyle. Our facility combines
              cutting-edge equipment with personalized training approaches.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, we&apos;ve helped hundreds of members achieve their
              fitness goals, from weight loss to muscle gain, from stress relief
              to athletic performance. Our team of certified trainers creates
              customized programs tailored to your unique needs.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl h-48 sm:h-64 flex items-center justify-center text-white">
                  <Dumbbell className="h-16 w-16 opacity-50" />
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white">
                  <span className="text-4xl font-bold">10K+</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl h-32 sm:h-40 flex items-center justify-center text-white">
                  <span className="text-4xl font-bold">98%</span>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl h-48 sm:h-64 flex items-center justify-center text-white">
                  <Heart className="h-16 w-16 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
