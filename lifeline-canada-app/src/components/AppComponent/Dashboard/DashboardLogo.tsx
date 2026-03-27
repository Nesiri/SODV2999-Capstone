import logoImage from '../../../assets/CPCLogo72dpi.png';

export default function DashboardLogo() {
  return (
    <div className="flex items-center gap-1 group relative">
      {/* Mini Hover Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Logo Container - Small size for sidebar */}
      <div className="relative">
        {/* Main Logo Circle */}
        <div className="relative flex items-center justify-center w-20 h-8">
          {/* Logo Image - Small for sidebar */}
          <img
            src={logoImage}
            alt="CPC Foundation"
            className="w-12 h-6 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="relative leading-tight">
        <p className="font-black text-xs sm:text-sm bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          The LifeLine
        </p>
        <p className="text-[10px] font-semibold text-blue-300/80 tracking-wide">
          Canada
        </p>
      </div>
    </div>
  );
}
