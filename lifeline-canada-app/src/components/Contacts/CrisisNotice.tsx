import React from 'react';
import { Link } from 'react-router-dom';

const CrisisNotice: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#5f2d85]/10 via-[#9B4DAB]/10 to-[#5f2d85]/10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
      {/* Spider Web Background */}

      {/* Decorative background elements - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#5f2d85]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#C77DDF]/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5f2d85]/5 rounded-full blur-3xl" />
      </div>

      {/* Emergency warning bar */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] animate-pulse"></div>

      <div className="relative w-full max-w-4xl mx-auto z-10 text-center px-0 sm:px-4">
        {/* Urgency badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#5f2d85]/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#5f2d85]/20">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#5f2d85]"></span>
            </span>
            <span className="!text-xs sm:!text-sm font-bold text-[#5f2d85] uppercase tracking-wider">
              ⚠️ Emergency ⚠️
            </span>
          </div>
        </div>

        {/* Small Top Text */}
        <p className="!text-[#5f2d85] !text-sm sm:!text-base md:!text-lg lg:!text-xl font-light mb-4 sm:mb-6 px-2">
          <span className="bg-[#5f2d85]/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block border border-[#5f2d85]/20">
            The LifeLine Canada Foundation is not a crisis hotline.
          </span>
        </p>

        {/* Main Crisis Message */}
        <h1
          className="font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
         
        >
          <span className="!text-lg sm:!text-xl md:!text-2xl lg:!text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] block sm:inline">
            If you, or someone you know
          </span>
          <br className="hidden sm:block" />
          <span className="!text-[#5f2d85] !text-lg sm:!text-xl md:!text-2xl lg:!text-3xl block mt-2 sm:mt-0 sm:inline">
            is in crisis, call 911 immediately!
          </span>
        </h1>

        {/* Support Directory Text */}
        <p className="!text-sm sm:!text-base md:!text-lg lg:!text-xl !text-[#5f2d85] mb-6 sm:mb-8 md:mb-10 font-light max-w-2xl mx-auto px-3">
          <span className="bg-[#5f2d85]/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl inline-block border border-[#5f2d85]/20">
            See our directory of mental health crisis support in your area
          </span>
        </p>

        {/* Button - Long rectangle pill shape with purple background and white text */}
        <div className="px-3 sm:px-0 flex justify-center">
          <Link
            to="/incrisisneedhelp"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] !text-white px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg lg:!text-xl shadow-2xl shadow-[#5f2d85]/50 hover:shadow-[#5f2d85]/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden border border-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></span>

            <span className="!text-lg relative flex items-center justify-center gap-2 sm:gap-3">
              CRISIS LINES
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0 text-white"
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
          </Link>
        </div>
        {/* Footer note */}
        <p className="text-[10px] sm:text-xs text-[#5f2d85]/50 mt-6 sm:mt-8 px-3">
          ⚡ For immediate assistance, please call emergency services
        </p>
      </div>
    </section>
  );
};

export default CrisisNotice;
