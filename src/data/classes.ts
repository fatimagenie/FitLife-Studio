import { ClassSchedule } from "@/types";

export const classes: ClassSchedule[] = [
  { id: "1", name: "Power Yoga", trainer: "Priya Sharma", time: "06:00", duration: "60 min", day: "Monday", category: "Yoga", color: "from-purple-500 to-purple-700", spots: 5, maxSpots: 20 },
  { id: "2", name: "HIIT Blast", trainer: "Amit Patel", time: "07:00", duration: "45 min", day: "Monday", category: "HIIT", color: "from-red-500 to-orange-500", spots: 3, maxSpots: 15 },
  { id: "3", name: "Strength Training", trainer: "Rajesh Kumar", time: "08:00", duration: "60 min", day: "Monday", category: "Strength", color: "from-teal-500 to-teal-700", spots: 8, maxSpots: 12 },
  { id: "4", name: "Boxing Basics", trainer: "Vikram Singh", time: "06:00", duration: "45 min", day: "Tuesday", category: "Boxing", color: "from-red-500 to-red-700", spots: 6, maxSpots: 10 },
  { id: "5", name: "Pilates Core", trainer: "Ananya Das", time: "07:00", duration: "50 min", day: "Tuesday", category: "Pilates", color: "from-cyan-500 to-cyan-700", spots: 10, maxSpots: 15 },
  { id: "6", name: "Spin Class", trainer: "Amit Patel", time: "06:00", duration: "45 min", day: "Wednesday", category: "Cardio", color: "from-pink-500 to-rose-500", spots: 2, maxSpots: 20 },
  { id: "7", name: "Vinyasa Flow", trainer: "Priya Sharma", time: "07:00", duration: "60 min", day: "Wednesday", category: "Yoga", color: "from-purple-500 to-purple-700", spots: 7, maxSpots: 20 },
  { id: "8", name: "Functional Fitness", trainer: "Rajesh Kumar", time: "06:00", duration: "50 min", day: "Thursday", category: "Strength", color: "from-teal-500 to-teal-700", spots: 4, maxSpots: 12 },
  { id: "9", name: "Kickboxing", trainer: "Vikram Singh", time: "06:00", duration: "45 min", day: "Thursday", category: "Boxing", color: "from-red-500 to-red-700", spots: 5, maxSpots: 10 },
  { id: "10", name: "Reformer Pilates", trainer: "Ananya Das", time: "07:00", duration: "55 min", day: "Thursday", category: "Pilates", color: "from-cyan-500 to-cyan-700", spots: 8, maxSpots: 12 },
  { id: "11", name: "Power Yoga", trainer: "Priya Sharma", time: "06:00", duration: "60 min", day: "Friday", category: "Yoga", color: "from-purple-500 to-purple-700", spots: 9, maxSpots: 20 },
  { id: "12", name: "CrossFit WOD", trainer: "Amit Patel", time: "07:00", duration: "45 min", day: "Friday", category: "HIIT", color: "from-red-500 to-orange-500", spots: 1, maxSpots: 15 },
  { id: "13", name: "Strength 101", trainer: "Rajesh Kumar", time: "08:00", duration: "60 min", day: "Friday", category: "Strength", color: "from-teal-500 to-teal-700", spots: 6, maxSpots: 12 },
  { id: "14", name: "Morning Yoga", trainer: "Priya Sharma", time: "07:00", duration: "75 min", day: "Saturday", category: "Yoga", color: "from-purple-500 to-purple-700", spots: 12, maxSpots: 25 },
  { id: "15", name: "Boot Camp", trainer: "Amit Patel", time: "08:00", duration: "60 min", day: "Saturday", category: "HIIT", color: "from-red-500 to-orange-500", spots: 10, maxSpots: 20 },
  { id: "16", name: "Boxing Sparring", trainer: "Vikram Singh", time: "16:00", duration: "60 min", day: "Saturday", category: "Boxing", color: "from-red-500 to-red-700", spots: 4, maxSpots: 8 },
  { id: "17", name: "Restorative Yoga", trainer: "Priya Sharma", time: "08:00", duration: "60 min", day: "Sunday", category: "Yoga", color: "from-purple-500 to-purple-700", spots: 15, maxSpots: 25 },
  { id: "18", name: "Open Gym", trainer: "Rajesh Kumar", time: "09:00", duration: "120 min", day: "Sunday", category: "Strength", color: "from-teal-500 to-teal-700", spots: 20, maxSpots: 30 },
];

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const timeSlots = ["06:00", "07:00", "08:00", "09:00", "16:00"];
