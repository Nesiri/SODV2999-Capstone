import { Link } from 'react-router-dom';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 sm:gap-2 lg:gap-3 group relative"
    >
      {/* Soft Hover Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative bottom-5 sm:bottom-0">
        <div className="relative right-2">
          {/* Bright background circle behind heart */}

          {/* Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Heart
              className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              fill="currentColor"
            />
            <Sparkles className="absolute -top-1 -right-1 text-yellow-300 w-3 h-3 animate-spin-slow" />
            <Star className="absolute -bottom-1 -left-1 text-pink-300 w-2 h-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="relative bottom-5 sm:bottom-0 leading-tight text-[clamp(8px,2vw,14px)]">
        <h1 className="font-black bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">
          The LifeLine
          <span className="block text-blue-600 text-[clamp(7px,1.8vw,14px)]">
            Canada
          </span>
        </h1>

        <p className="text-[clamp(6px,1.5vw,10px)] font-semibold text-gray-500 tracking-wide opacity-85 whitespace-nowrap">
          <span className="border-b border-gray-300/30 pb-[1px]">
            FOUNDATION FOR MENTAL HEALTH
          </span>
        </p>
      </div>
    </Link>
  );
}
