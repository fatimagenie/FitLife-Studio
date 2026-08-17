"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { plans as defaultPlans } from "@/data/plans";
import { getPlans } from "@/lib/storage";
import { Plan } from "@/types";
import ScrollAnimation from "./ScrollAnimation";

export default function MembershipPlans() {
  const [plansList, setPlansList] = useState<Plan[]>(defaultPlans);

  useEffect(() => { setPlansList(getPlans(defaultPlans)); }, []);

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Membership Plans</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Choose Your <span className="text-teal-600">Perfect Plan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the plan that fits your fitness goals. All plans include access
              to our world-class facility and expert support.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plansList.map((plan, i) => (
            <ScrollAnimation key={plan.name} delay={i * 100}>
              <div
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full ${
                  plan.popular
                    ? "ring-2 ring-teal-600 scale-105"
                    : "border border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-500">Rs</span>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full font-semibold transition-colors text-center ${
                    plan.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
