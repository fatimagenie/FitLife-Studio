import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
          backgroundSize: "50px 50px"
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            #1 Fitness Studio in Town
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Body,
            <br />
            <span className="text-teal-200">Elevate Your Mind</span>
          </h1>

          <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto mb-10">
            Join FitLife Studio and discover a new you. Expert trainers,
            state-of-the-art equipment, and a community that supports your
            fitness journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#plans"
              className="group bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all flex items-center gap-2 shadow-xl"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#workouts"
              className="group flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/60 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="h-5 w-5 fill-current" />
              </div>
              Watch Preview
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-teal-200 font-medium">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-teal-200 font-medium">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-teal-200 font-medium">Weekly Classes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
