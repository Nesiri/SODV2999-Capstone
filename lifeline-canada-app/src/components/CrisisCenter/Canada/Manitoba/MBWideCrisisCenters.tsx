import React from 'react';
import { Link } from 'react-router-dom';

const MBWideCrisisCentres: React.FC = () => {
  const crisisCentres = [
    {
      title: 'Manitoba Suicide Line',
      image: 'assets/CanadaCenter_image/MB/monitoba.png',
      path: 'https://reasontolive.ca/',
      lines: ['1-877-435-7170'],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#c9c2cf] via-[#d6cfdd] to-[#bcb4c4] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements - responsive */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/20 rounded-full blur-2xl sm:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-300/20 rounded-full blur-2xl sm:blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - responsive typography */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold font-serif text-[#5f2d85] px-4">
            Manitoba Province
            <span className="block text-transparent bg-gradient-to-r from-[#5f2d85] to-[#8b3d9e] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              Wide Crisis Centres
            </span>
          </h1>
        </div>

        {/* Centered Card - Responsive width */}
        <div className="flex justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
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
                      alt={centre.title}
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
                      {centre.title}
                    </h3>

                    {centre.lines.map((line, i) => {
                      const isMainNumber =
                        line.toLowerCase().includes('crisis') &&
                        line.includes(':');
                      const isEmail = line.includes('@');
                      const isPhoneNumber = /^[\d\s\-\\()\\+]+$/.test(line.trim());

                      let bgColor = 'hover:bg-white/60';
                      let textColor = 'text-gray-700';
                      let icon = null;
                      
                      if (isMainNumber) {
                        bgColor = 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                        textColor = 'text-[#5f2d85] font-medium';
                        icon = '📞';
                      } else if (isEmail) {
                        bgColor = 'bg-blue-50/50 border border-blue-100';
                        icon = '✉️';
                      } else if (isPhoneNumber) {
                        bgColor = 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                        textColor = 'text-[#5f2d85] font-medium';
                        icon = '📞';
                      }

                      return (
                        <div
                          key={i}
                          className={`${bgColor} text-sm sm:text-base p-2.5 sm:p-3 rounded-lg transition-all duration-300`}
                        >
                          <p className={`${textColor} leading-relaxed flex items-start gap-2 sm:gap-3`}>
                            {icon && (
                              <span className="text-base sm:text-lg flex-shrink-0">{icon}</span>
                            )}
                            <span className="break-words flex-1">{line}</span>
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

export default MBWideCrisisCentres;