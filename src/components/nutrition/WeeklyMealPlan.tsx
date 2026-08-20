"use client";
import { useState } from "react";
import { DailyMealPlan } from "@/types";
import { Clock, Flame, Beef, Wheat, Droplets } from "lucide-react";

interface WeeklyMealPlanProps {
  meals: DailyMealPlan[];
}

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeeklyMealPlan({ meals }: WeeklyMealPlanProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = meals[selectedDay];

  const totals = currentDay?.meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {dayNames.map((day, index) => (
          <button
            key={day}
            onClick={() => setSelectedDay(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedDay === index
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {currentDay?.meals.map((meal, index) => (
          <div
            key={index}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock size={14} />
                <span>{meal.time}</span>
              </div>
            <h4 className="font-semibold text-white">{meal.name}</h4>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-orange-400">
                <Flame size={14} />
                <span>{meal.calories} cal</span>
              </div>
              <div className="flex items-center gap-1.5 text-red-400">
                <Beef size={14} />
                <span>{meal.protein}g protein</span>
              </div>
              <div className="flex items-center gap-1.5 text-yellow-400">
                <Wheat size={14} />
                <span>{meal.carbs}g carbs</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <Droplets size={14} />
                <span>{meal.fat}g fat</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totals && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">
            Daily Totals
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
              <Flame size={14} />
              {totals.calories} cal
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
              <Beef size={14} />
              {totals.protein}g protein
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
              <Wheat size={14} />
              {totals.carbs}g carbs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
              <Droplets size={14} />
              {totals.fat}g fat
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
