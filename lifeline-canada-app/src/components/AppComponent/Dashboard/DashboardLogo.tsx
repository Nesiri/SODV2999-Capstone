import Logo from '../../Header/Logo'

export default function DashboardLogo() {
  return (
    <div className="flex items-center gap-1 group relative">
      {/* Mini Hover Glow - Consistent Purple */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-purple-500/20 to-purple-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Logo Container - Small size for sidebar */}
      <div className="relative">
        {/* Main Logo Container */}
        <div className="relative flex items-center justify-center">
          {/* Logo Component with custom sizing and disabled click */}
          <div 
            className="scale-75 md:scale-90 transform"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            style={{ pointerEvents: 'none' }}
          >
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}