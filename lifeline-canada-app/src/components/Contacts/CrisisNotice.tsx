import React from 'react';
import { Link } from 'react-router-dom';
import SpiderWebBackground from '../Background/SpiderWebBackground';

const CrisisNotice: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center">
      {/* Spider Web Background */}
      <SpiderWebBackground opacity={0.5} />
      
      {/* Decorative background elements - updated to purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 h-64 sm:h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-80 h-64 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Emergency warning bar - updated to purple */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 animate-pulse"></div>

      <div className="relative w-full max-w-4xl mx-auto z-10 text-center px-0 sm:px-4">
        {/* Urgency badge - updated to purple */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-500/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400/30">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-purple-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-purple-200 uppercase tracking-wider">
              ⚠️ Emergency ⚠️
            </span>
          </div>
        </div>

        {/* Small Top Text - updated to purple */}
        <p className="text-purple-200 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-4 sm:mb-6 px-2">
          <span className="bg-purple-800/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block border border-purple-400/20">
            The LifeLine Canada Foundation is not a crisis hotline.
          </span>
        </p>

        {/* Main Crisis Message - updated to purple */}
        <h1 className="font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2" 
            style={{ fontSize: 'clamp(1.25rem, 8vw, 4.5rem)' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 block sm:inline">
            If you, or someone you know
          </span>
          <br className="hidden sm:block" />
          <span className="text-purple-100 block mt-2 sm:mt-0 sm:inline">
            is in crisis, call 911 immediately!
          </span>
        </h1>

        {/* Support Directory Text - updated to purple */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 mb-6 sm:mb-8 md:mb-10 font-light max-w-2xl mx-auto px-3">
          <span className="bg-purple-800/40 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl inline-block border border-purple-400/20">
            See our directory of mental health crisis support in your area
          </span>
        </p>

        {/* Button - updated to purple */}
        <div className="px-3 sm:px-0">
          <Link
            to="/incrisisneedhelp"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-b from-purple-600 to-purple-800 text-purple-100 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-2xl shadow-purple-800/50 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

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

        {/* Footer note - updated to purple */}
        <p className="text-[10px] sm:text-xs text-purple-400/60 mt-6 sm:mt-8 px-3">
          ⚡ For immediate assistance, please call emergency services
        </p>
      </div>
    </section>
  );
};

export default CrisisNotice;