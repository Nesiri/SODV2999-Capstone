import { Link } from 'react-router-dom';
import { Brain, Award, Shield } from 'lucide-react';
import logoImg from '../../assets/CPCLogo72dpi.png';

export default function FooterLogo() {
  return (
    <div className="flex-1">
      <Link to="/" className="group block max-w-sm mx-auto lg:mx-0">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Logo - Always on left, reduced size on mobile */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[50%] blur-lg opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="relative rounded-[50%] group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 shadow-2xl">
              <img
                src={logoImg}
                alt="Logo"
                className="w-14 h-16 xs:w-16 xs:h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 object-contain"
              />
            </div>
          </div>

          {/* Text - Adjusted size for mobile */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight">
              The LifeLine Canada
            </h2>
            <p className="text-blue-300 mt-0.5 sm:mt-1 font-medium text-xs xs:text-sm sm:text-base">
              Foundation for Mental Health
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
              <Brain className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
              <span className="text-[10px] xs:text-xs sm:text-sm text-blue-200 truncate">
                Transforming Lives Since 2010
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges - Always left-aligned */}
        <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-blue-900/40 backdrop-blur-sm rounded-lg xs:rounded-xl border border-blue-700/30">
            <Award className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-blue-200 whitespace-nowrap">
              Registered Charity
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-blue-900/40 backdrop-blur-sm rounded-lg xs:rounded-xl border border-blue-700/30">
            <Shield className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
            <span className="text-[10px] xs:text-xs sm:text-sm text-blue-200 whitespace-nowrap">
              SSL Secured
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
