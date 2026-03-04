import React, { useEffect, useState } from 'react';

const CrisisSupportBanner: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  // Live time update for the banner
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <style>{`
        /* CrisisSupportBanner specific animations - prefixed to avoid conflicts */
        .crisis-blob {
          animation: crisis-blob-keyframes 7s infinite;
        }
        
        .crisis-float {
          animation: crisis-float-keyframes 8s ease-in-out infinite;
        }
        
        .crisis-shimmer {
          animation: crisis-shimmer-keyframes 3s infinite;
        }
        
        .crisis-ping {
          animation: crisis-ping-keyframes 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .crisis-delay-1000 {
          animation-delay: 1s;
        }
        
        .crisis-delay-2000 {
          animation-delay: 2s;
        }
        
        .crisis-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes crisis-blob-keyframes {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes crisis-float-keyframes {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          75% { transform: translateY(20px) rotate(-5deg); }
        }
        
        @keyframes crisis-shimmer-keyframes {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes crisis-ping-keyframes {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        /* Crisis banner specific glass morphism */
        .crisis-backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        
        .crisis-backdrop-blur-sm {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

      <section className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated background particles - reduced opacity on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 crisis-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 crisis-blob crisis-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 crisis-blob crisis-delay-4000"></div>
        </div>

        {/* Floating orbs - hidden on mobile */}
        <div className="hidden md:block absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl crisis-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl crisis-float crisis-delay-2000"></div>
        </div>

        {/* Top gradient bar with live indicator */}
        <div className="relative h-1.5 md:h-2 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          <div className="absolute top-0 left-0 w-full h-full bg-white/20 crisis-shimmer"></div>
        </div>

        {/* Main content */}
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 md:py-20 lg:py-24">
          {/* Live indicator - mobile optimized */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 crisis-backdrop-blur-md rounded-full mb-6 md:mb-8 border border-white/20">
            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-xs md:text-sm font-medium">
              {isMobile
                ? '24/7 Support'
                : `Crisis Support Available 24/7 • ${time.toLocaleTimeString()}`}
            </span>
          </div>

          {/* Disclaimer with modern styling - mobile optimized */}
          <div className="inline-block mb-6 md:mb-8">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-white/5 crisis-backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
              <p className="text-white/80 text-xs md:text-sm lg:text-base font-light tracking-wide">
                ⚕️ The LifeLine Canada Foundation is not a crisis hotline
              </p>
            </div>
          </div>

          {/* Main heading - responsive text sizes */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            In Crisis? Reach Out{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                Now
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-yellow-400/20 blur-md"></span>
            </span>
          </h2>

          {/* 988 section - mobile optimized */}
          <div className="relative mb-6 md:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <span className="text-white/90 text-base md:text-xl lg:text-2xl">
                Call or Text
              </span>
              <a
                href="tel:988"
                className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl md:text-3xl lg:text-5xl font-black text-white drop-shadow-lg">
                  988
                </span>
                <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-6 md:w-6">
                  <span className="crisis-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 md:h-6 md:w-6 bg-white"></span>
                </span>
              </a>
              <span className="text-white/60 text-base md:text-xl">🇨🇦</span>
            </div>
          </div>

          <p className="text-white/80 text-sm md:text-base lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto font-light px-4">
            Canada's new suicide prevention lifeline — free, confidential,
            available 24/7
          </p>

          {/* Emergency 911 section - mobile optimized */}
          <div className="relative mb-8 md:mb-12 p-6 md:p-8 bg-white/5 crisis-backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 max-w-3xl mx-4 md:mx-auto">
            <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                Emergency
              </span>
            </div>

            <h3 className="text-base md:text-xl lg:text-2xl text-white/90 mb-3 md:mb-4 font-light">
              If you or someone you know is in immediate danger,
            </h3>

            <a
              href="tel:911"
              className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
                911
              </span>
              <span className="text-white/90 text-sm md:text-base lg:text-lg font-medium">
                Call Immediately
              </span>
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Additional resources link - mobile optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <p className="text-white/70 text-xs md:text-sm lg:text-base">
              Need local crisis support? Browse our directory
            </p>

            <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-white/10 crisis-backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden w-full sm:w-auto">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2 text-blue-300 text-sm md:text-base font-semibold">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <span className="truncate">SUPPORT SERVICES DIRECTORY</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust indicators - mobile optimized */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 md:mt-12">
            <div className="flex items-center gap-1.5 md:gap-2 text-white/60 text-[10px] md:text-xs lg:text-sm">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-white/60 text-[10px] md:text-xs lg:text-sm">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 text-white/60 text-[10px] md:text-xs lg:text-sm">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                />
              </svg>
              <span>Free Service</span>
            </div>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div className="relative h-1.5 md:h-2 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          <div className="absolute top-0 left-0 w-full h-full bg-white/20 crisis-shimmer crisis-delay-1000"></div>
        </div>
      </section>
    </>
  );
};

export default CrisisSupportBanner;
