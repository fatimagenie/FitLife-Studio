export interface Trainer {
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
