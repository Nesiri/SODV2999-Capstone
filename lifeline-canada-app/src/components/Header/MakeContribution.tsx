import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function MakeContributionButton() {
  return (
    <>
      <style>{`
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-8px) translateX(4px);
          }
          50% {
            transform: translateY(0) translateX(0);
          }
          75% {
            transform: translateY(8px) translateX(-4px);
          }
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>

      <Link
        to="/contribute"
        className="fixed top-9 right-40 w-[120px] flex items-center justify-center group h-10 px-4 rounded-lg text-sm font-bold transition-all duration-300 overflow-hidden z-50"
      >
        {/* Animated gradient background - Changed to purple/pink theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 group-hover:from-purple-600 group-hover:via-fuchsia-600 group-hover:to-pink-600 transition-all duration-300"></div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        {/* Glow effect - Updated to match new colors */}
        <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/30 via-fuchsia-400/30 to-pink-400/30 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Content */}

        <div className="relative flex items-center justify-center  text-white text-xs">
          <p className="tracking-wide">MAKE CONTRIBUTION</p>

          <Sparkles className="w-4 h-4 animate-spin-slow" />
        </div>
        {/* Floating hearts - Using different positions and emojis */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 -left-2 text-pink-300/60 animate-float-fast text-xs">
            ✨
          </div>
          <div className="absolute top-3 left-1/3 text-purple-300/60 animate-float-fast animation-delay-300 text-sm">
            💫
          </div>
          <div className="absolute top-4 right-4 text-fuchsia-300/60 animate-float-fast animation-delay-500 text-base">
            ⭐
          </div>
          <div className="absolute bottom-2 left-4 text-indigo-300/60 animate-float-fast animation-delay-700 text-xs">
            💝
          </div>
        </div>
      </Link>
    </>
  );
}
