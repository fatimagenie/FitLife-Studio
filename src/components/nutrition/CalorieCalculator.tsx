"use client";

import { useState } from "react";
import { Calculator, TrendingUp, TrendingDown, Minus } from "lucide-react";

const activityLevels = [
  { value: 1.2, label: "Sedentary (desk job)" },
  { value: 1.375, label: "Light (1-3 days/week)" },
  { value: 1.55, label: "Moderate (3-5 days/week)" },
  { value: 1.725, label: "Active (6-7 days/week)" },
  { value: 1.9, label: "Very Active (athlete)" },
];

const goals = [
  { value: "loss", label: "Weight Loss", adjustment: -500, icon: TrendingDown, color: "text-red-500" },
  { value: "maintain", label: "Maintenance", adjustment: 0, icon: Minus, color: "text-teal-500" },
  { value: "gain", label: "Muscle Gain", adjustment: 500, icon: TrendingUp, color: "text-blue-500" },
];

export default function CalorieCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [activityIndex, setActivityIndex] = useState(2);
  const [goal, setGoal] = useState("maintain");

  // Mifflin-St Jeor equation (for males)
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  const tdee = Math.round(bmr * activityLevels[activityIndex].value);
  const selectedGoal = goals.find(g => g.value === goal) || goals[1];
  const dailyCalories = Math.round(tdee + selectedGoal.adjustment);

  // Macro breakdown
  const protein = Math.round((dailyCalories * 0.3) / 4); // 30% protein, 4 cal/g
  const carbs = Math.round((dailyCalories * 0.45) / 4); // 45% carbs, 4 cal/g
  const fat = Math.round((dailyCalories * 0.25) / 9); // 25% fat, 9 cal/g

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
          <Calculator className="h-6 w-6 text-teal-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Calorie Calculator</h3>
          <p className="text-gray-500 text-sm">Calculate your daily calorie needs</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
          <select value={activityIndex} onChange={e => setActivityIndex(Number(e.target.value))} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none">
            {activityLevels.map((level, i) => (
              <option key={i} value={i}>{level.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">Your Goal</label>
        <div className="grid grid-cols-3 gap-3">
          {goals.map(g => {
            const Icon = g.icon;
            return (
              <button key={g.value} onClick={() => setGoal(g.value)} className={`p-4 rounded-xl border-2 transition-all text-center ${
                goal === g.value ? "border-teal-600 bg-teal-50" : "border-gray-200 hover:border-gray-300"
              }`}>
                <Icon className={`h-6 w-6 mx-auto mb-2 ${g.color}`} />
                <span className="text-sm font-medium">{g.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 text-white">
        <div className="text-center mb-6">
          <p className="text-teal-200 text-sm mb-1">Your Daily Calorie Needs</p>
          <p className="text-5xl font-bold">{dailyCalories}</p>
          <p className="text-teal-200 text-sm mt-1">calories/day</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{protein}g</p>
            <p className="text-teal-200 text-xs">Protein (30%)</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{carbs}g</p>
            <p className="text-teal-200 text-xs">Carbs (45%)</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{fat}g</p>
            <p className="text-teal-200 text-xs">Fat (25%)</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-teal-200 text-xs">BMR: {Math.round(bmr)} cal | TDEE: {tdee} cal</p>
        </div>
      </div>
    </section>
  );
}
