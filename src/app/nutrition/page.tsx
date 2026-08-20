"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ScrollAnimation from "@/components/layout/ScrollAnimation";
import DietPlanCard from "@/components/nutrition/DietPlanCard";
import WeeklyMealPlan from "@/components/nutrition/WeeklyMealPlan";
import NutritionTips from "@/components/nutrition/NutritionTips";
import CalorieCalculator from "@/components/nutrition/CalorieCalculator";
import { dietPlans } from "@/data/dietPlans";
import Link from "next/link";

export default function NutritionPage() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const currentPlan = dietPlans[selectedPlan];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Nutrition & Diet Plans"
        subtitle="Fuel your fitness with the right nutrition. Explore our expert-designed diet plans and calculate your daily calorie needs."
        breadcrumbs={[{ label: "Nutrition", href: "/nutrition" }]}
      />

      {/* Diet Plan Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Choose Your Plan</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Diet Plans for <span className="text-teal-600">Every Goal</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you want to lose weight, gain muscle, or maintain a healthy lifestyle,
                we have the perfect diet plan for you.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dietPlans.map((plan, i) => (
              <ScrollAnimation key={plan.id} delay={i * 100}>
                <DietPlanCard
                  name={plan.name}
                  description={plan.description}
                  dailyCalories={plan.dailyCalories}
                  color={plan.color}
                  icon={plan.icon}
                  isSelected={selectedPlan === i}
                  onClick={() => setSelectedPlan(i)}
                />
              </ScrollAnimation>
            ))}
          </div>

          {/* Selected Plan Tips */}
          <ScrollAnimation>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-3">Key Tips for {currentPlan.name}:</h4>
              <div className="flex flex-wrap gap-2">
                {currentPlan.tips.map((tip, i) => (
                  <span key={i} className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm border border-gray-200">
                    {tip}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Weekly Meal Plan */}
          <ScrollAnimation>
            <WeeklyMealPlan meals={currentPlan.weeklyPlan} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Nutrition Tips</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Expert <span className="text-teal-600">Diet Advice</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple, practical nutrition tips to help you maximize your results
                and build healthier eating habits.
              </p>
            </div>
          </ScrollAnimation>
          <NutritionTips />
        </div>
      </section>

      {/* Calorie Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <CalorieCalculator />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Diet Plan?</h2>
            <p className="text-teal-100 text-lg mb-8">Our nutrition expert Sneha Reddy can create a personalized diet plan tailored to your specific goals and dietary preferences.</p>
            <Link href="/contact" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl">
              Contact Nutritionist
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}
