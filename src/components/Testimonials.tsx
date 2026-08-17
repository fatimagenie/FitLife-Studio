import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priyanka M.",
    role: "Lost 15kg in 6 months",
    content:
      "FitLife Studio completely transformed my life. The trainers are incredibly supportive, and the community keeps me motivated. I never thought I could enjoy working out!",
    rating: 5,
    color: "bg-teal-500",
  },
  {
    name: "Rahul T.",
    role: "Gained 8kg muscle mass",
    content:
      "As a skinny guy, I struggled to gain weight. The personalized training program and nutrition plan helped me build lean muscle. Best investment I've made!",
    rating: 5,
    color: "bg-blue-500",
  },
  {
    name: "Anjali K.",
    role: "Yoga enthusiast",
    content:
      "The yoga classes here are phenomenal. Priya ma'am is an amazing instructor. I've improved my flexibility and reduced my stress levels significantly.",
    rating: 5,
    color: "bg-purple-500",
  },
  {
    name: "Vikram S.",
    role: "Marathon runner",
    content:
      "The strength training program helped me shave 15 minutes off my marathon time. The trainers understand athletic performance like no one else.",
    rating: 5,
    color: "bg-orange-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            What Our <span className="text-teal-600">Members Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who transformed their lives at FitLife Studio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-teal-600 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
