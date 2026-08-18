export interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  advice: string;
}

export function calculateBMI(heightCm: number, weightKg: number): BMIResult | null {
  if (heightCm <= 0 || weightKg <= 0) return null;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = Math.round(bmi * 10) / 10;

  if (bmi < 18.5) {
    return { bmi: rounded, category: "Underweight", color: "text-blue-500", advice: "Consider a nutrition plan to gain healthy weight. Consult our nutrition expert for a personalized diet." };
  } else if (bmi < 25) {
    return { bmi: rounded, category: "Normal", color: "text-green-500", advice: "Great! You're at a healthy weight. Maintain it with regular exercise and balanced nutrition." };
  } else if (bmi < 30) {
    return { bmi: rounded, category: "Overweight", color: "text-orange-500", advice: "Consider joining our weight loss program. Our trainers can create a custom plan for you." };
  } else {
    return { bmi: rounded, category: "Obese", color: "text-red-500", advice: "We recommend consulting with our nutrition expert and starting a guided fitness program." };
  }
}

export function ftToCm(feet: number, inches: number): number {
  return (feet * 12 + inches) * 2.54;
}

export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}
