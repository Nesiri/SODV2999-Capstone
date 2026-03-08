import React from 'react';
import { Link } from 'react-router-dom';

const CrisisNotice: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#1a1a2e66] via-[#2a1b3d66] to-[#16213e4D] py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Emergency warning bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-pulse"></div>

      <div className="relative max-w-4xl mx-auto z-10 text-center">
        {/* Urgency badge */}
        <div className="flex justify-center mb-8 ">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              ⚠️ Emergency Notice ⚠️
            </span>
          </div>
        </div>

        {/* Small Top Text */}
        <p className="text-purple-200 text-lg md:text-xl font-light mb-6">
          <span className="bg-white/5 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
            The LifeLine Canada Foundation is not a crisis hotline.
          </span>
        </p>

        {/* Main Crisis Message */}
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-red-400">
            If you, or someone you know
          </span>
          <br />
          <span className="text-white">
            is in crisis, call 911 immediately!
          </span>
        </h1>

        {/* Support Directory Text */}
        <p className="text-xl md:text-2xl text-purple-200 mb-10 font-light max-w-2xl mx-auto">
          <span className="bg-white/5 px-6 py-3 rounded-2xl inline-block backdrop-blur-sm border border-white/10">
            See our directory of mental health crisis support in your area
          </span>
        </p>

        {/* Button */}
        <Link
          to="/in-crisis"
          className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-b from-red-600 to-red-800 text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-2xl shadow-red-900/50 hover:shadow-red-700/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

          <span className="relative flex items-center gap-3">
            CRISIS LINES
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

        <p className="text-xs text-purple-300/60 mt-8">
          ⚡ For immediate assistance, please call emergency services
        </p>
      </div>
    </section>
  );
};

export default CrisisNotice;
