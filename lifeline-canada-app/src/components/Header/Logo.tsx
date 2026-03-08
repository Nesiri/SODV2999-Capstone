import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 sm:gap-2 lg:gap-3 group relative"
    >
      {/* Soft Hover Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Main Heart Only - Now with bright blue and background */}
      <div className="relative bottom-5 sm:bottom-0">
        <div className="relative">
          {/* Bright background circle behind heart */}
          <div className="absolute inset-0 bg-blue-300/30 rounded-full blur-md scale-150"></div>
          <Heart
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-blue-600 fill-blue-500 drop-shadow-lg relative z-10"
            strokeWidth={1.5}
          />
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