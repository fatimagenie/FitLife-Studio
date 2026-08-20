"use client";

import { Flame, Dumbbell, Heart, Leaf } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Dumbbell,
  Heart,
  Leaf,
};

interface DietPlanCardProps {
  name: string;
  description: string;
  dailyCalories: string;
  color: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function DietPlanCard({ name, description, dailyCalories, color, icon, isSelected, onClick }: DietPlanCardProps) {
  const IconComponent = iconMap[icon] || Flame;
  
  return (
    <button
      onClick={onClick}
      className={`relative bg-white rounded-2xl p-6 text-left transition-all hover:shadow-xl h-full ${
        isSelected ? "ring-2 ring-teal-600 shadow-xl scale-105" : "shadow-lg border border-gray-100"
      }`}
    >
      <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-4`}>
        <IconComponent className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Daily:</span>
        <span className="font-bold text-teal-600">{dailyCalories} cal</span>
      </div>
      {isSelected && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
      )}
    </button>
  );
}
