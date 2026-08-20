import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import { Flame, Zap, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const classes = [
  {
    icon: Flame,
    name: "HIIT Revolution",
    description: "High-intensity interval training designed to maximize calorie burn and improve cardiovascular endurance. Perfect for those who want fast results.",
    duration: "45 min",
    intensity: "High",
    calories: "400-600",
    schedule: "Mon, Wed, Fri - 6:00 AM & 6:00 PM",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Zap,
    name: "Power Yoga",
    description: "Find your balance with our invigorating yoga sessions that combine strength, flexibility, and mindfulness for complete well-being.",
    duration: "60 min",
    intensity: "Medium",
    calories: "200-350",
    schedule: "Tue, Thu, Sat - 7:00 AM & 5:00 PM",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Users,
    name: "Group Training",
    description: "Join our energetic group sessions that combine fun with effectiveness. Build camaraderie while achieving your fitness goals together.",
    duration: "50 min",
    intensity: "Medium-High",
    calories: "350-500",
    schedule: "Mon-Fri - 8:00 AM & 7:00 PM",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Heart,
    name: "Cardio Core",
    description: "Build strength and endurance with our specialized core workouts. Focus on abs, obliques, and lower back for a stronger foundation.",
    duration: "40 min",
    intensity: "Medium",
    calories: "300-450",
    schedule: "Wed, Fri, Sun - 9:00 AM & 6:00 PM",
    color: "from-pink-500 to-rose-600",
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Classes"
        subtitle="Choose from our diverse range of classes designed to help you achieve your fitness goals at GOLD STANDARD GYM."
        breadcrumbs={[{ label: "Classes", href: "/classes" }]}
      />

      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((cls, i) => (
              <ScrollAnimation key={cls.name} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${cls.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <cls.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cls.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-white/80">
                          <span>{cls.duration}</span>
                          <span>•</span>
                          <span>{cls.intensity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{cls.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <span className="text-sm text-gray-500">Calories</span>
                        <p className="font-bold text-gray-900">{cls.calories}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <span className="text-sm text-gray-500">Duration</span>
                        <p className="font-bold text-gray-900">{cls.duration}</p>
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-teal-700 font-medium">
                        <span className="font-semibold">Schedule:</span> {cls.schedule}
                      </p>
                    </div>

                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors w-full justify-center"
                    >
                      Book Class <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Class Schedule</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Weekly <span className="text-teal-600">Timetable</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book your next class and start your fitness journey today.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Time</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Mon</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Tue</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Wed</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Thu</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Fri</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">6:00 AM</td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Yoga</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Yoga</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Yoga</span></td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">8:00 AM</td>
                    <td className="py-4 px-4 text-center"><span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Group</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Group</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Group</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Group</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Group</span></td>
                    <td className="py-4 px-4 text-center">—</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">6:00 PM</td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Yoga</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Yoga</span></td>
                    <td className="py-4 px-4 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">HIIT</span></td>
                    <td className="py-4 px-4 text-center">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollAnimation>

          <div className="text-center mt-8">
            <Link href="/schedule" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
              View Full Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Join a Class?</h2>
            <p className="text-teal-100 text-lg mb-8">Start your fitness journey with GOLD STANDARD GYM today.</p>
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
