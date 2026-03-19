import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react'; // Optional: Use a simple icon

export default function MakeContributionButton() {
  return (
    <Link
      to="/contribute"
      className="fixed top-9 right-35 w-[130px] flex items-center justify-center group h-10 px-4 rounded-md text-sm font-medium transition-all duration-200 z-50 shadow-sm hover:shadow-md"
    >
      {/* Unified background: Purple to Blue gradient (matches logo/theme) */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#2b5797]/10 rounded-md transition-opacity duration-200 group-hover:opacity-90"></div>

      {/* Subtle shimmer effect (kept very subtle) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-md"></div>

      {/* Button Content */}
      <div className="relative flex items-center justify-center gap-2 text-white">
        {/* Optional: Simple icon */}
        <Heart size={14} className="text-white/90" />
        <span className="tracking-wide text-xs uppercase">
          Make a Contribution
        </span>
      </div>
    </Link>
  );
}
