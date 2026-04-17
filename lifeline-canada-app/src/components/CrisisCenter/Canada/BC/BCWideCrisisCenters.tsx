import React from 'react';
import { Link } from 'react-router-dom';

const CrisisCentres: React.FC = () => {
  const crisisCentres = [
    {
      title: 'KUU-US Crisis Line Society',
      image: '/assets/CanadaCenter_image/BC/KUU-600x183.webp',
      path: 'https://www.kuu-uscrisisline.com/',
      lines: [
        'Aboriginal Crisis Line',
        'Crisis: 250-723-4050 24 hrs',
        'Teen line: 250-723-2040',
        'Crisis: 1-800-588-8717 24 hrs',
      ],
    },
    {
      title: 'Crisis Intervention & Suicide Prevention Centre of BC',
      image:
        '/assets/CanadaCenter_image/BC/Crisis_Intervention_Suicide_Prevention_Centre.png',
      path: 'https://www.crisiscentre.bc.ca/',
      lines: [
        'Crisis 24 hrs: 1-866-661-3311',
        'Crisis 24 hrs TTY: 1-866-872-0113',
      ],
    },
    {
      title: 'Crisis Line Assoc. of BC.',
      image: '/assets/CanadaCenter_image/BC/Crisis_Line_Assoc.png',
      path: 'https://www.crisislines.bc.ca/',
      lines: [
        'Crisis: 1-800-784-2433 24 hrs',
        'Referral Hotline: 211 24/7',
        'Mental Health Support: 310-6789',
      ],
    },
    {
      title: 'VictimLink BC',
      image: '/assets/CanadaCenter_image/BC/BCgov-400x154.png',
      path: 'https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime/victimlinkbc',
      lines: ['Call/Text: 1-888-563-0808 24/7', 'Email: VictimlinkBC@bc211.ca'],
    },
    {
      title: 'Help Lines',
      image: '/assets/CanadaCenter_image/BC/Help_Lines.png',
      path: 'https://successbc.ca/counselling-crisis-support/services/help-lines/',
      lines: [
        'Mandarin: 1-888-721-0596 Ext.17 (7 days/week 10am–10pm)',
        'Cantonese: 1-888-721-0596 Ext.2 (7 days/week 10am–10pm)',
        'Korean: 1-888-721-0596 Ext.3 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)',
        'Farsi-Dari: 1-888-721-0596 Ext.4 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)',
        'Ukrainian: 1-888-721-0596 Ext.5 (Mon–Fri 10am–8pm | Sat–Sun 10am–5pm)',
      ],
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
          <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-bold font-serif !text-[#5f2d85] px-4">
            British Columbia Province
            <span className="block text-transparent bg-gradient-to-r from-[#5f2d85] to-[#8b3d9e] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              Wide Crisis Centres
            </span>
          </h1>
        </div>

        {/* Cards Grid - Equal height with flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-8">
          {crisisCentres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Link Card - Fixed aspect ratio for consistency */}
              <Link
                to={centre.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/90 backdrop-blur-sm rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar - responsive height */}
                <div className="h-1 sm:h-2 bg-gradient-to-r from-[#5f2d85] via-pink-600 to-[#5f2d85]"></div>

                {/* Image Container - FULL VISIBILITY with object-contain */}
                <div 
                  className="relative w-full bg-gray-100 flex items-center justify-center p-4 sm:p-5 md:p-6"
                  style={{ minHeight: '140px', height: 'auto' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-auto max-h-28 sm:max-h-32 md:max-h-36 object-contain transform group-hover:scale-105 transition duration-700"
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

              {/* Lines Section - Equal height flex column */}
              <div className="mt-1 p-4 sm:p-5 bg-white/80 backdrop-blur-sm rounded-b-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                <div className="space-y-2 sm:space-y-2.5 flex-1">
                  <h3 className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block break-words">
                    {centre.title}
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {centre.lines.map((line, i) => {
                      const isMainNumber =
                        line.toLowerCase().includes('crisis') &&
                        line.includes(':');
                      const isEmail = line.includes('@');
                      const isHours = line.toLowerCase().includes('am') || 
                                     line.toLowerCase().includes('pm') ||
                                     line.toLowerCase().includes('24 hrs');

                      let bgColor = 'hover:bg-white/60';
                      let textColor = 'text-gray-700';
                      const borderStyle = '';
                      
                      if (isMainNumber) {
                        bgColor = 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                        textColor = 'text-[#5f2d85] font-medium';
                      } else if (isEmail) {
                        bgColor = 'bg-blue-50/50 border border-blue-100';
                      } else if (isHours) {
                        bgColor = 'bg-green-50/50 border border-green-100';
                      }

                      return (
                        <div
                          key={i}
                          className={`${bgColor} ${borderStyle} text-xs sm:text-sm p-2 sm:p-2.5 rounded-lg transition-all duration-300`}
                        >
                          <p className={`${textColor} leading-relaxed break-words`}>
                            {line}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default CrisisCentres;