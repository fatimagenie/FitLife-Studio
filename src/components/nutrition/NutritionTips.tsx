import { nutritionTips } from "@/data/nutritionTips";
import { Droplets, Beef, Wheat, Clock, Lightbulb } from "lucide-react";
import ScrollAnimation from "../layout/ScrollAnimation";

const categoryIcons: Record<string, React.ElementType> = {
  hydration: Droplets,
  protein: Beef,
  carbs: Wheat,
  timing: Clock,
  general: Lightbulb,
};

const categoryColors: Record<string, string> = {
  hydration: "from-blue-500 to-cyan-500",
  protein: "from-red-500 to-orange-500",
  carbs: "from-yellow-500 to-amber-500",
  timing: "from-purple-500 to-pink-500",
  general: "from-green-500 to-emerald-500",
};

export default function NutritionTips() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {nutritionTips.map((tip, i) => {
        const IconComponent = categoryIcons[tip.category] || Lightbulb;
        return (
          <ScrollAnimation key={tip.title} delay={i * 50}>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 h-full">
              <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[tip.category]} rounded-xl flex items-center justify-center mb-4`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tip.description}</p>
              <span className="inline-block mt-3 text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full capitalize">
                {tip.category}
              </span>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
}
