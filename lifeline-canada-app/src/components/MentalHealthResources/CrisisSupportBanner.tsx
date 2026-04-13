import React from 'react';
import { Link } from 'react-router-dom';

const CrisisSupportBanner: React.FC = () => {
  return (
    <>
      <section className="relative w-full !bg-gradient-to-br from-purple-50 via-purple-100/50 to-purple-100 overflow-hidden">
        {/* Main content */}
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 md:py-20 lg:py-24">
          {/* Disclaimer with modern styling - mobile optimized */}
          <div className="inline-block mb-6 md:mb-8">
            <div className="px-4 md:px-6 py-2 md:py-3 !bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
              <p className="!text-purple-900/80 text-xs md:text-sm lg:text-base font-light tracking-wide">
                ⚕️ The LifeLine Canada Foundation is not a crisis hotline
              </p>
            </div>
          </div>

          {/* Main heading - responsive text sizes */}
          <h2 className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold text-black/80 mb-4 md:mb-6 leading-tight px-2">
            In Crisis? Canada's new suicide prevention
            <span className="relative inline-block">
              <span className="relative z-10 !bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text">
                hotline
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-purple-400/20 blur-md"></span>
            </span>
          </h2>

          {/* 988 section - mobile optimized */}
          <div className="relative mb-6 md:mb-8">
            <div className="absolute inset-0 !bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <span className="!text-purple-900/90 text-base md:text-xl lg:text-2xl">
                Call or Text
              </span>
              <p className="group relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 !bg-[#89009B] hover:!bg-purple-800 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                <span className=" !text-2xl md:!text-3xl lg:!text-5xl font-black text-white drop-shadow-lg">
                  988
                </span>
                <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-6 md:w-6">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 md:h-6 md:w-6 bg-white"></span>
                </span>
              </p>
              <span className=" !text-purple-700/60 text-base md:text-xl">
                🇨🇦
              </span>
            </div>
          </div>

          {/* Emergency 911 section - mobile optimized */}
          <div className="relative mb-8 md:mb-12 p-6 md:p-8 !bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 max-w-3xl mx-4 md:mx-auto">
            <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-0.5 md:py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              <span className="!text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
                Emergency
              </span>
            </div>

            <h3 className="text-base md:text-xl lg:text-2xl text-purple-900/90 mb-3 md:mb-4 font-light">
              If you or someone you know is in danger of hurting themselves or
              others,
            </h3>

            <p className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-5 !bg-[#89009B] hover:!bg-purple-800 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 group">
              <span className="text-2xl md:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
                911
              </span>
              <span className="!text-white/90 text-sm md:text-base lg:text-lg font-medium">
                Call Immediately
              </span>
            </p>
          </div>

          <p className="!text-purple-800/70 text-xs md:text-sm lg:text-base">
            Additionally, see our directory of mental health crisis support in
            your area.
          </p>
          <br />
          {/* Additional resources link - mobile optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <Link
              to="/incrisisneedhelp"
              className="group relative px-6 md:px-8 py-3 md:py-4 !bg-[#89009B] hover:!bg-purple-800 rounded-xl md:rounded-2xl border border-white/20 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative flex items-center justify-center gap-2 text-white text-sm md:text-base font-semibold">
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
                <p className="truncate">SUPPORT SERVICES</p>
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
            </Link>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div className="relative h-1.5 md:h-2 w-full !bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
        </div>
      </section>
    </>
  );
};

export default CrisisSupportBanner;