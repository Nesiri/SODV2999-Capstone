import React from 'react';
import { Link } from 'react-router-dom';

const crisisCentres = [
  {
    title1: 'Yukon Distress & Support Line',
    image: '/assets/CanadaCenter_image/OtherProvince/yukon.png',
    path: 'https://yukon.cmha.ca/',
    lines: ['All Ages 7 pm-12 am 7 days a week (PST)', '1-844-533-3030'],
  },
];

const YTCrisisCentres: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e9e3ea] via-[#f2ecf3] to-[#e0d8e2] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative background elements - responsive */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/30 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-[#4a6fa5]/10 rounded-full blur-2xl sm:blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Flag - Responsive layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Text Container */}
          <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4">
            <div className="inline-block lg:block mx-auto lg:mx-0">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/40 backdrop-blur-sm rounded-full text-xs sm:text-sm font-normal text-[#5f2d85] border border-white/60 shadow-sm">
                🇨🇦 Yukon
              </span>
            </div>

            <h1 className="!text-3xl xs:!text-4xl sm:!text-5xl  font-serif font-medium leading-tight !text-[#5f2d85]">
              <span className="block">Yukon</span>
              <span className="block text-transparent bg-gradient-to-r from-[#5f2d85] to-[#8b3d9e] bg-clip-text text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mt-1 sm:mt-2">
                Crisis Centres
              </span>
            </h1>
          </div>

          {/* Image Container - Responsive flag */}
          <div className="flex-1 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Animated glow effect */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#4a6fa5]/20 via-[#6b8cbc]/20 to-[#4a6fa5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse"></div>

              {/* Image frame with gradient border */}
              <div className="relative p-0.5 sm:p-1 bg-gradient-to-r from-[#4a6fa5]/30 to-[#6b8cbc]/30 rounded-xl sm:rounded-2xl shadow-2xl">
                <div className="overflow-hidden rounded-lg sm:rounded-xl bg-white/50 backdrop-blur-sm">
                  <img
                    src="/assets/flags/yuth_1024x1024-e1687406771897-300x149.webp"
                    alt="Yukon Flag"
                    className="w-full h-auto rounded-lg sm:rounded-xl transform group-hover:scale-110 transition duration-700 ease-out object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Decorative corner accents - hidden on mobile */}
              <div className="hidden sm:block absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#4a6fa5]/30 rounded-tr-lg"></div>
              <div className="hidden sm:block absolute -bottom-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#4a6fa5]/30 rounded-bl-lg"></div>
            </div>
          </div>
        </div>

        {/* Crisis Centre Card - No image cut-off */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            {crisisCentres.map((centre, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Link Card - NO CUTOFF */}
                <Link
                  to={centre.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/90 backdrop-blur-sm rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
                >
                  {/* Gradient top bar - responsive */}
                  <div className="h-1 sm:h-2 bg-gradient-to-r from-[#5f2d85] via-pink-600 to-[#5f2d85]"></div>

                  {/* Image Container - FULL VISIBILITY with object-contain */}
                  <div 
                    className="relative w-full bg-gray-100 flex items-center justify-center p-4 sm:p-5 md:p-6"
                    style={{ minHeight: '160px', height: 'auto' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src={centre.image}
                      alt={centre.title1}
                      className="w-full h-auto max-h-32 sm:max-h-36 md:max-h-40 object-contain transform group-hover:scale-105 transition duration-700"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'https://via.placeholder.com/400x120/4a6fa5/ffffff?text=Crisis+Centre';
                      }}
                    />

                    {/* Arrow indicator - responsive */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 z-20">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#5f2d85]"
                        fill="none"
                        stroke="#5f2d85"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none"></div>
                </Link>

                {/* Lines Section - Below Card */}
                <div className="mt-1 p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-sm rounded-b-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="!text-xl sm:!text-2xl md:!text-3xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block break-words">
                      {centre.title1}
                    </h3>

                    {centre.lines.map((line, i) => {
                      const isPhoneNumber = /[\d\-\\(\\)\\+]+/.test(line) && /\d/.test(line);
                      const isHours = line.toLowerCase().includes('pm') || 
                                     line.toLowerCase().includes('am') ||
                                     line.toLowerCase().includes('7 days') ||
                                     line.toLowerCase().includes('week') ||
                                     line.toLowerCase().includes('pst');
                      
                      return (
                        <div
                          key={i}
                          className={`text-sm sm:text-base p-2.5 sm:p-3 rounded-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 ${
                            isPhoneNumber
                              ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500'
                              : isHours
                              ? 'bg-blue-50/50 border border-blue-100'
                              : 'hover:bg-white/60'
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                              isPhoneNumber ? 'text-[#5f2d85]' : 'text-gray-500'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {isPhoneNumber ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            )}
                          </svg>
                          <p className={`leading-relaxed break-words flex-1 ${
                            isPhoneNumber ? 'font-medium text-[#5f2d85]' : 'text-gray-700'
                          }`}>
                            {line}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom pattern - responsive */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400/50 animate-pulse delay-200"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/50 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default YTCrisisCentres;