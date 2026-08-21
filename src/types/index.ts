export interface Trainer {
  id?: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  social: { instagram: string; twitter: string; linkedin: string };
  color: string;
  certifications?: string[];
  availableSlots?: string[];
}

export interface Plan {
  id?: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  color?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  color: string;
}

export interface Workout {
  title: string;
  duration: string;
  calories: string;
  category: string;
  description: string;
  color: string;
  videoId: string;
}

export interface ClassSchedule {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  day: string;
  category: string;
  color: string;
  spots: number;
  maxSpots: number;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "gym" | "classes" | "events" | "transformations";
}

export interface FAQ {
  id?: string;
  question: string;
  answer: string;
  category: string;
}

export interface Transformation {
  name: string;
  duration: string;
  weightLost: string;
  quote: string;
  color: string;
  beforeImg?: string;
  afterImg?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Meal {
  time: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DailyMealPlan {
  day: string;
  meals: Meal[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export interface DietPlan {
  id: string;
  name: string;
  description: string;
  dailyCalories: string;
  weeklyPlan: DailyMealPlan[];
  tips: string[];
  color: string;
  icon: string;
}

export interface NutritionTip {
  title: string;
  description: string;
  category: "hydration" | "protein" | "carbs" | "timing" | "general";
}
