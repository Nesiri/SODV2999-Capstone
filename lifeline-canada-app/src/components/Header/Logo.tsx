import { Link } from 'react-router-dom';
import logoImage from '../../assets/CPCLogo72dpi.png';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-1 sm:gap-2 lg:gap-3 group relative"
    >
      {/* Soft Hover Glow - Updated to match serene blue theme */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#a8c9e0]/20 via-[#b8d4e8]/20 to-[#c8e0f0]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative bottom-5 sm:bottom-0">
        <div className="relative right-2">
          <img
            src={logoImage}
            alt="The LifeLine Canada Foundation Logo"
            className="w-16 h-10 sm:w-32 sm:h-20"
          />
        </div>
      </div>

      {/* Text - Updated with calming gradient */}
      <div className="relative bottom-5 sm:bottom-0 leading-tight text-[clamp(8px,1vw,10px)]">
        <h1 className="font-black bg-gradient-to-r from-[#2c5f8a] via-[#3d7caf] to-[#4f8fbf] bg-clip-text text-transparent whitespace-nowrap">
          The LifeLine
          <span className="block text-[#5d8cb0] text-[clamp(7px,1.8vw,14px)]">
            Canada
          </span>
        </h1>

        <p className="text-[clamp(6px,1.5vw,10px)] font-semibold text-[#7c9ebd] tracking-wide opacity-85 whitespace-nowrap">
          <span className="border-b border-[#b8d4e8]/30 pb-[1px]">
            FOUNDATION FOR MENTAL HEALTH
          </span>
        </p>
      </div>
    </Link>
  );
}
