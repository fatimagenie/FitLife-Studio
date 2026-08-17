import { Award } from "lucide-react";
import { transformations } from "@/data/transformations";

export default function Transformations() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {transformations.map((t) => (
        <div
          key={t.name}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
        >
          {/* Visual Header */}
          <div className={`h-32 bg-gradient-to-br ${t.color} relative flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-3xl font-bold">{t.weightLost}</div>
              <div className="text-sm opacity-80">in {t.duration}</div>
            </div>
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
              <Award className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="p-6">
            {/* Before/After Bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1">
                <div className="text-xs text-gray-400 mb-1">Before</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div className="text-teal-600 font-bold text-sm">→</div>
              <div className="flex-1">
                <div className="text-xs text-gray-400 mb-1">After</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-teal-600 text-xs">{t.duration} journey</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
