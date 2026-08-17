import { Instagram, Twitter, Linkedin } from "lucide-react";

const trainers = [
  {
    name: "Rajesh Kumar",
    role: "Head Trainer & Founder",
    specialization: "Strength & Conditioning",
    experience: "12+ years",
    bio: "Former national level athlete with certifications from ACE and NASM.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    specialization: "Hatha & Vinyasa Yoga",
    experience: "8+ years",
    bio: "Certified yoga therapist specializing in stress relief and flexibility.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Amit Patel",
    role: "CrossFit Coach",
    specialization: "HIIT & Functional Training",
    experience: "6+ years",
    bio: "CrossFit Level 2 trainer with expertise in high-intensity workouts.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Sneha Reddy",
    role: "Nutrition Expert",
    specialization: "Weight Management",
    experience: "10+ years",
    bio: "Certified nutritionist helping members achieve sustainable results.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Vikram Singh",
    role: "Boxing Trainer",
    specialization: "Boxing & Kickboxing",
    experience: "9+ years",
    bio: "Former state boxing champion turned fitness coach.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-red-500 to-red-700",
  },
  {
    name: "Ananya Das",
    role: "Pilates Instructor",
    specialization: "Reformer Pilates",
    experience: "5+ years",
    bio: "Ballet-trained Pilates expert focused on core strength and posture.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
    color: "from-cyan-500 to-cyan-700",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Meet Our <span className="text-teal-600">Expert Trainers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified professionals are dedicated to helping you reach your
            fitness goals with personalized guidance and support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Avatar */}
              <div
                className={`h-48 bg-gradient-to-br ${trainer.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-white text-4xl font-bold backdrop-blur-sm">
                  {trainer.name.charAt(0)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-teal-600 font-medium text-sm mb-2">
                  {trainer.role}
                </p>
                <p className="text-gray-500 text-sm mb-3">{trainer.specialization}</p>
                <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {trainer.experience}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={trainer.social.instagram}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={trainer.social.twitter}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={trainer.social.linkedin}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
