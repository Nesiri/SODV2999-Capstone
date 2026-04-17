import React, { useState, useEffect, useRef } from 'react';
import patternInterruptImg from '../../assets/PattInturrMain.png';

const PatternInterruptSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#f5edf7] via-white to-[#e8dceb]"
    >
      {/* Animated Background Elements - Purple calming colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#C77DDF]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#5f2d85]/5 to-transparent"></div>
      </div>

      {/* Static Orbs - NO animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-xl hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-xl hidden md:block"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          {/* Left Side - Text Content */}
          <div
            className={`
              transform transition-all duration-1000 delay-300
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
            `}
          >
            {/* Animated badge - NO blinking dot */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 mb-8">
              <span className="text-sm font-medium text-[#5f2d85] tracking-wide">
                BREAK FREE FROM NEGATIVE CYCLES
              </span>
            </div>

            {/* Main heading - INLINE TITLE */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-8">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Pattern Interruptions
                </span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-full animate-expandWidth"></div>
            </div>

            {/* Feature cards - glassmorphism style matching Resources page */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-8">
              {/* Card 1 */}
              <div className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#5f2d85] mb-1 sm:mb-2">
                      Break Negative Habits
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      A Pattern Interrupt is a way to alter our mental, emotional,
                      or behavioral state in order to break negative habits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#5f2d85] mb-1 sm:mb-2">
                      Regain Control
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      Pattern interrupts offer an effective way to break negative
                      cycles and regain control over our actions, thoughts, and
                      emotions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#5f2d85] mb-1 sm:mb-2">
                      Create New Pathways
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      By recognizing our patterns, we can intervene and create new
                      pathways for more productive thoughts, behaviors, and
                      emotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Effects (NO square corner accents) */}
          <div
            className={`
              relative transform transition-all duration-1000 delay-500
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
            `}
          >
            {/* Decorative blur elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-3xl hidden md:block"></div>

            {/* Main image container with 3D hover effect - NO square corners */}
            <div className="relative group perspective max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={patternInterruptImg}
                  alt="Pattern interruption domino concept"
                  className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/50 group-hover:border-white/80 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }       
       
        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .perspective {
          perspective: 2000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .group-hover\\:rotate-y-12 {
          transition: transform 0.7s;
        }
        .group:hover .group-hover\\:rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
};

export default PatternInterruptSection;