import React from 'react';
import { Link } from 'react-router-dom';

const CrisisNotice: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#4a3144cc] via-[#5a3e4ecc] to-[#3a2a3ccc] py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
      {/* Decorative background elements - adjusted to match sunset palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#d4a5a5]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-[#b8a5d4]/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        {/* Additional small orbs for mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a5b3]/5 rounded-full blur-3xl" />
      </div>

      {/* Emergency warning bar - adjusted to sunset palette */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d96c6c] via-[#e6a56c] to-[#d96c6c] animate-pulse"></div>

      <div className="relative w-full max-w-4xl mx-auto z-10 text-center px-0 sm:px-4">
        {/* Urgency badge - softened to match palette */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#d96c6c]/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#d96c6c]/30">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d96c6c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#d96c6c]"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#ffdbdb] uppercase tracking-wider">
              ⚠️ Emergency ⚠️
            </span>
          </div>
        </div>

        {/* Small Top Text - adjusted to match palette */}
        <p className="text-[#e6d5e0] text-sm sm:text-base md:text-lg lg:text-xl font-light mb-4 sm:mb-6 px-2">
          <span className="bg-[#5a3e4e]/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block border border-[#d4b2c0]/20">
            The LifeLine Canada Foundation is not a crisis hotline.
          </span>
        </p>

        {/* Main Crisis Message */}
        <h1 className="font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2" 
            style={{ fontSize: 'clamp(1.25rem, 8vw, 4.5rem)' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb6b6] via-[#ffd7a5] to-[#ffb6b6] block sm:inline">
            If you, or someone you know
          </span>
          <br className="hidden sm:block" />
          <span className="text-[#ffefef] block mt-2 sm:mt-0 sm:inline">
            is in crisis, call 911 immediately!
          </span>
        </h1>

        {/* Support Directory Text - adjusted to match palette */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#e6d5e0] mb-6 sm:mb-8 md:mb-10 font-light max-w-2xl mx-auto px-3">
          <span className="bg-[#5a3e4e]/40 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl inline-block border border-[#d4b2c0]/20">
            See our directory of mental health crisis support in your area
          </span>
        </p>

        {/* Button - adjusted to match sunset palette */}
        <div className="px-3 sm:px-0">
          <Link
            to="/incrisisneedhelp"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-b from-[#d96c6c] to-[#b84d4d] text-[#ffefef] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl shadow-[#b84d4d]/50 hover:shadow-[#d96c6c]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffefef]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <span className="relative flex items-center justify-center gap-2 sm:gap-3">
              CRISIS LINES
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
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
            </span>
          </Link>
        </div>

        {/* Footer note - adjusted to match palette */}
        <p className="text-[10px] sm:text-xs text-[#d4b2c0]/60 mt-6 sm:mt-8 px-3">
          ⚡ For immediate assistance, please call emergency services
        </p>
      </div>
    </section>
  );
};

export default CrisisNotice;