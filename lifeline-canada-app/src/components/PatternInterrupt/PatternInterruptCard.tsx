import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

interface PatternInterruptCardProps {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string; // Add this prop for the link destination
  variant?: 'peaceful' | 'hopeful' | 'energetic' | 'calm';
}

const PatternInterruptCard: React.FC<PatternInterruptCardProps> = ({
  src,
  alt = 'Pattern Interrupts visualization',
  title = 'Pattern Interrupts',
  description = 'Sometimes the biggest hurdle to getting better and moving forward is the depression itself. One often removes themselves from the presence of comforting & encouraging loved ones, or ceases to participate in activities of personal interest as a result of being depressed, which further contributes to their condition.',
  buttonText = 'Break the Pattern',
  buttonLink = '/pattern-interrupts', 
  variant = 'hopeful',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Variant configurations based on therapeutic needs
  const variantConfig = {
    peaceful: {
      gradient: 'from-blue-400 via-teal-400 to-emerald-400',
      light: 'from-blue-50 via-teal-50 to-emerald-50',
      button:
        'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600',
      accent: 'border-teal-200',
      shadow: 'shadow-teal-100/50',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      ),
    },
    hopeful: {
      gradient: 'from-amber-400 via-orange-400 to-rose-400',
      light: 'from-amber-50 via-orange-50 to-rose-50',
      button:
        'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600',
      accent: 'border-amber-200',
      shadow: 'shadow-amber-100/50',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      ),
    },
    energetic: {
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      light: 'from-purple-50 via-pink-50 to-red-50',
      button:
        'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      accent: 'border-purple-200',
      shadow: 'shadow-purple-100/50',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      ),
    },
    calm: {
      gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
      light: 'from-indigo-50 via-blue-50 to-cyan-50',
      button:
        'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
      accent: 'border-indigo-200',
      shadow: 'shadow-indigo-100/50',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      ),
    },
  };

  const config = variantConfig[variant];

  return (
    <div
      className="group relative w-full perspective-2000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container with organic shape - Full width */}
      <div
        className={`
          relative w-full overflow-hidden rounded-none md:rounded-[2rem] lg:rounded-[2.5rem]
          bg-gradient-to-br ${config.light}
          shadow-2xl ${config.shadow}
          transition-all duration-700 ease-out
          hover:shadow-3xl lg:hover:scale-[1.01]
          border border-white/50 backdrop-blur-sm
        `}
        style={{
          transform: isHovered
            ? 'rotateY(1deg) rotateX(0.5deg)'
            : 'rotateY(0) rotateX(0)',
        }}
      >
        {/* Animated organic background shapes - scaled for full width */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`
            absolute -top-1/2 -right-1/4 w-[1200px] h-[1200px] 
            bg-gradient-to-r ${config.gradient} opacity-5 
            rounded-full blur-3xl animate-blob
          `}
          />
          <div
            className={`
            absolute -bottom-1/2 -left-1/4 w-[1200px] h-[1200px] 
            bg-gradient-to-r ${config.gradient} opacity-5 
            rounded-full blur-3xl animate-blob animation-delay-2000
          `}
          />
        </div>

        {/* Floating particles for healing effect - increased for full width */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 bg-gradient-to-r ${config.gradient} 
                rounded-full opacity-20 animate-float
              `}
              style={{
                top: `${(i * 8) % 100}%`,
                left: `${(i * 13) % 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Content container - optimized for full width */}
        <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Image Section - adjusted proportions for full width */}
          <div className="relative w-full lg:w-5/12 xl:w-1/2 group/image">
            {/* Double exposure effect container */}
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
              {/* Loading skeleton with gradient animation */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-2xl lg:rounded-3xl" />
              )}

              {/* Main image with organic mask */}
              <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl">
                <img
                  src={src}
                  alt={alt}
                  className={`
                    w-full h-full object-cover
                    transition-all duration-1000 ease-out
                    ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                    group-hover/image:scale-110
                  `}
                  style={{
                    maskImage:
                      'radial-gradient(circle at 50% 50%, black 70%, transparent 100%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at 50% 50%, black 70%, transparent 100%)',
                  }}
                  onLoad={() => setIsImageLoaded(true)}
                />

                {/* Therapeutic gradient overlay */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-tr ${config.gradient} 
                  mix-blend-soft-light opacity-30 
                  group-hover/image:opacity-40 transition-opacity duration-700
                `}
                />

                {/* Healing light effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Decorative elements - scaled for full width */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <div
                  className={`w-full h-full bg-gradient-to-r ${config.gradient} rounded-full opacity-20 animate-pulse-slow`}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-36 h-36">
                <div
                  className={`w-full h-full bg-gradient-to-r ${config.gradient} rounded-full opacity-10 animate-pulse-slower`}
                />
              </div>
            </div>

            {/* Hope symbol - repositioned for full width */}
            <div className="absolute -bottom-4 -right-4 lg:right-0 lg:-bottom-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-4 shadow-xl">
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 text-amber-500 animate-float"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>

          {/* Content Section - adjusted for full width */}
          <div className="relative w-full lg:w-7/12 xl:w-1/2 space-y-6 lg:space-y-8">
            {/* Title with emotional resonance */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-1 h-8 lg:h-10 bg-gradient-to-b ${config.gradient} rounded-full animate-pulse`}
                />
                <span className="text-sm lg:text-base font-semibold tracking-wider text-gray-500 uppercase">
                  Healing Journey
                </span>
              </div>

              <h2 className="relative">
                <span
                  className={`
                  text-4xl lg:text-5xl xl:text-6xl font-black leading-tight
                  bg-clip-text text-transparent 
                  bg-gradient-to-r ${config.gradient}
                  animate-gradient-x
                `}
                >
                  {title}
                </span>

                {/* Animated underline */}
                <span
                  className={`
                  absolute -bottom-2 left-0 w-20 lg:w-24 h-1 
                  bg-gradient-to-r ${config.gradient} rounded-full
                  transition-all duration-700
                  group-hover:w-32 lg:group-hover:w-40
                `}
                />
              </h2>
            </div>

            {/* Description with empathetic typography */}
            <div className="relative">
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl italic max-w-3xl">
                "{description}"
              </p>

              {/* Quotation marks - scaled for full width */}
              <div className="absolute -top-4 -left-4 text-6xl lg:text-7xl text-gray-200 select-none">
                "
              </div>
              <div className="absolute -bottom-8 lg:-bottom-10 -right-4 text-6xl lg:text-7xl text-gray-200 select-none rotate-180">
                "
              </div>
            </div>

            {/* Key insight section - enhanced for full width */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-5 lg:p-6 border border-white/60 shadow-inner max-w-2xl">
              <div className="flex items-start gap-4 lg:gap-5">
                <div
                  className={`
                  w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-r ${config.gradient} 
                  flex items-center justify-center flex-shrink-0
                  shadow-lg
                `}
                >
                  <svg
                    className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {config.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 lg:mb-2 text-base lg:text-lg">
                    Interrupt the Pattern
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Breaking free from depression's cycle starts with one small
                    step. You're not alone.
                  </p>
                </div>
              </div>
            </div>

            {/* Action link with therapeutic message - FIXED LINK STYLING */}
            <div className="pt-4 lg:pt-6">
              <Link
                to={buttonLink}
                className={`
                  group/btn relative inline-flex items-center justify-center
                  w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 lg:py-4
                  ${config.button} text-white font-bold text-sm lg:text-base
                  rounded-xl lg:rounded-2xl overflow-hidden
                  transition-all duration-500
                  hover:scale-105 hover:shadow-2xl
                  active:scale-95
                  cursor-pointer
                  no-underline
                  before:absolute before:inset-0
                  before:bg-white/30 before:skew-x-12
                  before:translate-x-[-200%] hover:before:translate-x-[200%]
                  before:transition-transform before:duration-1000
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg
                    className="w-5 h-5 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {buttonText}
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>

              {/* Supportive message */}
              <p className="text-sm lg:text-base text-gray-500 mt-4 text-center lg:text-left">
                ✨ Every step forward matters. You've got this.
              </p>
            </div>
          </div>
        </div>

        {/* Healing corner decorations - scaled for full width */}
        <div className="absolute bottom-0 left-0 w-24 lg:w-32 h-24 lg:h-32">
          <div className="absolute bottom-0 left-0 w-16 lg:w-20 h-16 lg:h-20 border-l-4 border-b-4 border-teal-200/30 rounded-bl-3xl lg:rounded-bl-[2rem]" />
        </div>
        <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32">
          <div className="absolute top-0 right-0 w-16 lg:w-20 h-16 lg:h-20 border-r-4 border-t-4 border-amber-200/30 rounded-tr-3xl lg:rounded-tr-[2rem]" />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </div>
  );
};

export default memo(PatternInterruptCard);
