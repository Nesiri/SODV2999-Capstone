import { patternData } from "./patternData";
import PatternCard from "./PatternCard";

export default function PatternLanding() {
  const moodItems = Object.entries(patternData).filter(
    ([, item]) => item.category === "Mood & Inspiration"
  );

  const selfHelpItems = Object.entries(patternData).filter(
    ([, item]) => item.category === "Self Help & Tools"
  );

  return (
    <div className="bg-[#F5F0FA] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#5A2D82] mb-8">
            Mood & Inspiration
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {moodItems.map(([slug, item]) => (
              <PatternCard key={slug} slug={slug} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#5A2D82] mb-8">
            Self Help & Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {selfHelpItems.map(([slug, item]) => (
              <PatternCard key={slug} slug={slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}