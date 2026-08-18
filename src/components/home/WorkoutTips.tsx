import { Play, Clock, Flame } from "lucide-react";

const workouts = [
  {
    title: "Full Body HIIT Blast",
    duration: "20 min",
    calories: "300 cal",
    category: "HIIT",
    description: "High-intensity interval training to torch calories and build endurance.",
    color: "from-red-500 to-orange-500",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Morning Yoga Flow",
    duration: "30 min",
    calories: "150 cal",
    category: "Yoga",
    description: "Start your day with energizing poses and mindful breathing.",
    color: "from-purple-500 to-pink-500",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Core Crusher",
    duration: "15 min",
    calories: "200 cal",
    category: "Abs",
    description: "Intense core workout for a stronger midsection.",
    color: "from-teal-500 to-cyan-500",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Strength Training 101",
    duration: "45 min",
    calories: "400 cal",
    category: "Strength",
    description: "Learn proper form for compound lifts and build muscle.",
    color: "from-blue-500 to-indigo-500",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Cardio Dance Party",
    duration: "25 min",
    calories: "250 cal",
    category: "Cardio",
    description: "Fun dance moves that make cardio feel like a party.",
    color: "from-pink-500 to-rose-500",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Flexibility & Mobility",
    duration: "20 min",
    calories: "100 cal",
    category: "Stretch",
    description: "Improve flexibility and prevent injuries with guided stretching.",
    color: "from-green-500 to-emerald-500",
    videoId: "dQw4w9WgXcQ",
  },
];

const tips = [
  "Stay hydrated - drink at least 3 liters of water daily",
  "Get 7-8 hours of sleep for optimal recovery",
  "Warm up before every workout to prevent injuries",
  "Progressive overload is key to building strength",
  "Nutrition is 80% of your fitness results",
  "Consistency beats intensity - show up every day",
];

export default function WorkoutTips() {
  return (
    <section id="workouts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Workout Videos */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Workout Library
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Free <span className="text-teal-600">Workout Routines</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our library of workout videos designed for all fitness levels.
            Follow along at home or in the gym.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workouts.map((workout) => (
            <div
              key={workout.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Video Thumbnail */}
              <div
                className={`h-48 bg-gradient-to-br ${workout.color} relative flex items-center justify-center cursor-pointer`}
              >
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white fill-current ml-1" />
                </div>
                <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {workout.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {workout.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{workout.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workout.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    {workout.calories}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fitness Tips */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Quick Fitness Tips
            </h3>
            <p className="text-teal-100">
              Simple advice to maximize your results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-teal-50">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
