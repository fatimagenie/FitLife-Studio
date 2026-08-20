"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials as defaultTestimonials } from "@/data/testimonials";
import ScrollAnimation from "../layout/ScrollAnimation";

export default function Testimonials() {
  const [list] = useState(defaultTestimonials);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What Our <span className="text-teal-600">Members Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who transformed their lives at GOLD STANDARD GYM.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((testimonial, i) => (
            <ScrollAnimation key={testimonial.name} delay={i * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors h-full overflow-hidden">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-teal-600 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
