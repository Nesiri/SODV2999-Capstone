import { Link } from "react-router-dom";
import type { PatternItem } from "./patternData";

type Props = {
  slug: string;
  item: PatternItem;
};

export default function PatternCard({ slug, item }: Props) {
  return (
    <Link
      to={`/pattern/${slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-xl text-white`}
        >
          {item.icon}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
}