import { Link } from "react-router-dom";
import { patternData } from "../../components/PatternInterrupt/pattern/patternData";

export default function LifeLineLanding() {
  const items = Object.entries(patternData).filter(
    ([, value]) => value.category === "Mood & Inspiration"
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-800 p-10 text-white shadow-lg">
        <p className="text-xs uppercase tracking-widest text-slate-300">
          LifeLine App
        </p>
        <h1 className="mt-2 text-4xl font-bold">Mood & Inspiration</h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Quick tools and uplifting content to boost your mood and motivation.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map(([key, value]) => (
          <Link
            key={key}
            to={`/lifeline-app/${key}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="text-2xl">{value.icon}</div>
            <h3 className="mt-3 font-semibold text-slate-900 group-hover:text-indigo-600">
              {value.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{value.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}