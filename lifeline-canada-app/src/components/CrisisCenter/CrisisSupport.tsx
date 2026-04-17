import React, { useEffect, useRef } from 'react';
const crisisSuportImage = 'assets/CrisisCenter/crisis-support-no-coffee.png';

const CrisisSupport: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#f5edf7] via-white to-[#e8dceb] font-sans antialiased">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#C77DDF]/10 to-[#5f2d85]/10 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#5f2d85]/5 to-transparent"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-xl animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-xl animate-float-delayed hidden md:block"></div>

      <div
        ref={sectionRef}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        {/* HEADER */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/50 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#5f2d85] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#5f2d85] uppercase">
              24/7 CRISIS SUPPORT
            </span>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                In Crisis? Need Help?
              </span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-full animate-expandWidth"></div>
          </div>
        </div>

        {/* 2-COLUMN GRID FOR CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Crisis Card */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-4 sm:space-y-5">
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
                  <span className="block font-normal mb-2">
                    In Crisis? Call or Text{' '}
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg">
                      988
                    </span>{' '}
                    Canada's suicide prevention hotline.
                  </span>
                </p>

                <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base md:text-lg">
                  If you or someone you know is in danger of hurting
                  themselves or others, call{' '}
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg">
                    911
                  </span>{' '}
                  immediately.
                </p>

                <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
                  <a
                    href="#local-crisis-support"
                    className="inline-flex items-center gap-2 text-[#5f2d85] font-bold border-b border-[#5f2d85]/50 hover:border-[#5f2d85] transition-all group/link"
                  >
                    See our directory of mental health crisis support
                  </a>{' '}
                  in your area below.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-[#5f2d85]/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg text-[#5f2d85] mb-1 sm:mb-2">
                    Important
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Seek the advice of an appropriately qualified healthcare
                    professional before making decisions about your circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-3xl hidden md:block"></div>

              <div className="relative group perspective max-w-sm sm:max-w-md mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={crisisSuportImage}
                    alt="Peace and support"
                    className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/50 group-hover:border-white/80 transition-all duration-500"
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
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
    </main>
  );
};

export default CrisisSupport;