import { Link } from 'react-router-dom';
import { Users } from 'lucide-react'; // Optional: Simple icon

export default function GetInvolvedButton() {
  return (
    <Link
      to="/volunteers"
      className="fixed top-10 right-10 w-[120px] flex items-center justify-center group h-10 px-4 rounded-md text-sm font-medium transition-all duration-200 z-50 shadow-sm hover:shadow-md"
    >
      {/* Unified background: Purple to Blue gradient (matches logo/theme and Contribute button) */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#2b5797]/10 rounded-md transition-opacity duration-200 group-hover:opacity-90"></div>

      {/* Subtle shimmer effect (kept very subtle, consistent with Contribute button) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-md"></div>

      {/* Button Content */}
      <div className="relative flex items-center justify-center gap-2 text-white">
        {/* Optional: Simple icon */}
        <Users size={14} className="text-white/90" />
        <span className="tracking-wide text-xs uppercase">Get Involved</span>
      </div>

      {/* Removed: All floating hearts, emojis, and fast animations */}
      {/* Removed: Strong outer glow */}
    </Link>
  );
}
