import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Crisis Stabilization Unit',
    image: '/assets/CanadaCenter_image/MB/WHA_Stabilization.png',
    path: 'https://sharedhealthmb.ca/services/mental-health/mha-services/crisis-stabilization-unit/',
    lines: [
      'WHRA Mental Health Crisis Response',
      'Crisis 24 hours: (204) 940-3633',
    ],
  },
  {
    title: 'Interlake-Eastern Regional Health Authority',
    image: '/assets/CanadaCenter_image/MB/intake_eastern.png',
    path: 'https://www.ierha.ca/programs-services/mental-health/',
    lines: ['Crisis Stabilization Unit / Mobile Crisis Unit', '1-877-499-8770'],
  },
  {
    title: 'Klinic Community Health Centre',
    image: '/assets/CanadaCenter_image/MB/klinic-400x100.jpg',
    path: 'https://klinic.mb.ca/',
    lines: [
      'Serving Winnipeg',
      'Crisis 24 hours: 1-888-322-3019',
      'Crisis 24 hours: (204) 786-8686',
    ],
  },
  {
    title: 'Mental Health Crisis Service – Karen Devine Safe House',
    image: '/assets/CanadaCenter_image/MB/Alcohol-Suicide-400x253.jpg',
    path: '#',
    lines: [
      'Crisis 24 hours: 1-888-310-4593',
      'Crisis 7 days/week 4:30pm-8:30am',
      'North Central: (204) 857-6369',
      'South Central: (204) 325-9700',
    ],
  },
  {
    title: 'Mobile Crisis Services',
    image: '/assets/CanadaCenter_image/MB/mobile_crisis.png',
    path: 'https://wrha.mb.ca/mental-health/',
    lines: [
      'Winnipeg Regional Health Authority',
      'Crisis 24 hours: (204) 940-1781',
    ],
  },
  {
    title: 'Mobile Crisis Unit (MCU) – Westman Crisis Services',
    image: '/assets/CanadaCenter_image/MB/winnipeg-400x100.jpg',
    path: 'https://prairiemountainhealth.ca/programs-and-services/mental-health/adults/#:~:text=Westman%20Crisis%20Services%20and%20the,332%2D3030%20(North).',
    lines: [
      'Serving Brandon & Assiniboine Regions',
      'Crisis 24 hours: 1-888-379-7699',
      'Crisis 24 hours: (204) 725-4411',
    ],
  },
  {
    title: 'Sara Riel Crisis Stabilization Unit',
    image: '/assets/CanadaCenter_image/MB/sara_riel.png',
    path: '#',
    lines: [
      'Serving Winnipeg & surrounding areas',
      'Crisis 24 hours: (204) 233-2756',
    ],
  },
  {
    title: 'Northern Health Region Mobile Crisis Team',
    image: '/assets/CanadaCenter_image/MB/nhr-400x100.jpg',
    path: 'https://northernhealthregion.com/programs-and-services/mental-health-and-substance-recovery/',
    lines: ['204-778-1472', 'Toll Free: 1-866-242-1571'],
  },
  {
    title: 'Eden Health Care Services',
    image: '/assets/CanadaCenter_image/MB/eden_health.png',
    path: 'https://edenhealthcare.ca/walk-in-counselling/',
    lines: ['Steinbach, Portage la Prairie, Winkler', '1-888-617-7715'],
  },
  {
    title: 'Thompson Youth (17 and under) Mobile Crisis Team',
    image: '/assets/CanadaCenter_image/MB/thompson_youth.png',
    path: '#',
    lines: [
      '12 noon – 12 midnight',
      '204-778-9977',
      'Toll Free: 1-866-242-1571',
    ],
  },
];

const MBRegionalCrisisCentres: React.FC = () => {
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
            Manitoba Regional
            <span className="block text-transparent bg-gradient-to-r from-[#5f2d85] to-[#8b3d9e] bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              Crisis Support Centres
            </span>
          </h1>
        </div>

        {/* Cards Grid - Responsive with equal heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {centres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Card - Clickable Link with NO CUTOFF */}
              <Link
                to={centre.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar - responsive */}
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

                {/* Hover shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 pointer-events-none"></div>
              </Link>

              {/* Lines Section - Equal height with flex */}
              <div className="mt-1 p-4 sm:p-5 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                <div className="space-y-2 sm:space-y-2.5 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block break-words">
                    {centre.title}
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {centre.lines.map((line, i) => {
                      const isMainNumber =
                        line.toLowerCase().includes('crisis') ||
                        line.toLowerCase().includes('call:') ||
                        line.toLowerCase().includes('toll free');
                      const isHours =
                        line.toLowerCase().includes('am') ||
                        line.toLowerCase().includes('pm') ||
                        line.toLowerCase().includes('24') ||
                        line.toLowerCase().includes('noon') ||
                        line.toLowerCase().includes('midnight');
                      const isLocation =
                        line.includes('Serving') ||
                        line.includes('Winnipeg') ||
                        line.includes('Brandon') ||
                        line.includes('Steinbach') ||
                        line.includes('Portage') ||
                        line.includes('Thompson');

                      let bgColor = 'bg-gray-50/50';
                      let textColor = 'text-gray-700';
                      
                      if (isMainNumber) {
                        bgColor = 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                        textColor = 'text-[#5f2d85] font-medium';
                      } else if (isHours) {
                        bgColor = 'bg-blue-50/50 border border-blue-100';
                      } else if (isLocation) {
                        bgColor = 'bg-emerald-50/50 border border-emerald-100';
                      }

                      return (
                        <div
                          key={i}
                          className={`${bgColor} text-xs sm:text-sm p-2 sm:p-3 rounded-lg transition-all duration-300 hover:shadow-md`}
                        >
                          <p
                            className={`${textColor} leading-relaxed flex items-start gap-1.5 sm:gap-2`}
                          >
                            {isMainNumber && (
                              <span className="text-purple-500 mt-0.5 text-xs sm:text-sm flex-shrink-0">📞</span>
                            )}
                            {isHours && (
                              <span className="text-blue-500 mt-0.5 text-xs sm:text-sm flex-shrink-0">⏰</span>
                            )}
                            {isLocation && (
                              <span className="text-emerald-500 mt-0.5 text-xs sm:text-sm flex-shrink-0">📍</span>
                            )}
                            <span className="break-words flex-1">{line}</span>
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

export default MBRegionalCrisisCentres;