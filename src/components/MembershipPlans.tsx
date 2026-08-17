import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "999",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "2 group classes/week",
      "Basic fitness assessment",
      "Fitness app access",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "1,999",
    period: "/month",
    description: "Most popular for serious fitness enthusiasts",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 PT session/week",
      "Nutrition guidance",
      "Sauna access",
      "Workshop access",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "3,999",
    period: "/month",
    description: "Ultimate experience for transformation results",
    features: [
      "Everything in Standard",
      "3 PT sessions/week",
      "Custom diet plan",
      "Recovery sessions",
      "Priority booking",
      "VIP lounge access",
      "Monthly body analysis",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "19,999",
    period: "/year",
    description: "Best value - save 2 months free!",
    features: [
      "Everything in Premium",
      "All Premium benefits",
      "2 months FREE",
      "Guest passes (2/month)",
      "Exclusive merch",
      "Personal locker",
      "Priority support",
    ],
    popular: false,
  },
];

export default function MembershipPlans() {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Membership Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Choose Your <span className="text-teal-600">Perfect Plan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that fits your fitness goals. All plans include access
            to our world-class facility and expert support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-gray-500">₹</span>
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
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

              <button
                className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
