"use client";

import { useState } from "react";
import { Calculator, Info } from "lucide-react";
import { calculateBMI, ftToCm, lbsToKg, BMIResult } from "@/lib/bmi";

export default function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = () => {
    let h: number;
    let w: number;

    if (unit === "metric") {
      h = parseFloat(heightCm);
      w = parseFloat(weightKg);
    } else {
      h = ftToCm(parseFloat(heightFt) || 0, parseFloat(heightIn) || 0);
      w = lbsToKg(parseFloat(weightLbs));
    }

    const bmiResult = calculateBMI(h, w);
    setResult(bmiResult);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
          <Calculator className="h-6 w-6 text-teal-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
          <p className="text-gray-500 text-sm">Check your Body Mass Index</p>
        </div>
      </div>

      {/* Unit Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        <button
          onClick={() => setUnit("metric")}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
            unit === "metric" ? "bg-white text-teal-600 shadow-sm" : "text-gray-600"
          }`}
        >
          Metric (cm/kg)
        </button>
        <button
          onClick={() => setUnit("imperial")}
          className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
            unit === "imperial" ? "bg-white text-teal-600 shadow-sm" : "text-gray-600"
          }`}
        >
          Imperial (ft/lbs)
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {unit === "metric" ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                placeholder="e.g. 170"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                placeholder="e.g. 70"
              />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (ft)</label>
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Height (in)</label>
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  placeholder="7"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
              <input
                type="number"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                placeholder="e.g. 154"
              />
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors mb-6"
      >
        Calculate BMI
      </button>

      {result && (
        <div className="bg-gray-50 rounded-xl p-5">
          <div className="text-center mb-4">
            <div className={`text-4xl font-bold ${result.color} mb-1`}>{result.bmi}</div>
            <div className={`text-lg font-semibold ${result.color}`}>{result.category}</div>
          </div>
          <div className="flex items-start gap-2 bg-white rounded-lg p-3">
            <Info className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">{result.advice}</p>
          </div>
        </div>
      )}
    </div>
  );
}
