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
    lines: [
      'Crisis Stabilization Unit / Mobile Crisis Unit',
      '1-877-499-8770',
    ],
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
    lines: [
      '204-778-1472',
      'Toll Free: 1-866-242-1571',
    ],
  },
  {
    title: 'Eden Health Care Services',
    image: '/assets/CanadaCenter_image/MB/eden_health.png',
    path: 'https://edenhealthcare.ca/walk-in-counselling/',
    lines: [
      'Steinbach, Portage la Prairie, Winkler',
      '1-888-617-7715',
    ],
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
    <section className="relative bg-gradient-to-br from-[#c9c2cf] via-[#d6cfdd] to-[#bcb4c4] py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent px-4">
        Manitoba Regional
            <span className="block text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
              Crisis Support Centres
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-purple-600/50 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {centres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Card - Clickable Link */}
              <Link
                to={centre.path}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/400x200/4a6fa5/ffffff?text=Crisis+Centre';
                    }}
                  />

                  {/* Arrow indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 z-20">
                    <svg
                      className="w-4 h-4 text-purple-600"
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
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </Link>

              {/* Lines Section - Beautiful Card Below */}
              <div className="mt-1 p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1">
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
                    {centre.title}
                  </h3>
                  {centre.lines.map((line, i) => {
                    const isMainNumber =
                      line.toLowerCase().includes('crisis') ||
                      line.toLowerCase().includes('call:');
                    const isHours =
                      line.toLowerCase().includes('am') ||
                      line.toLowerCase().includes('pm') ||
                      line.toLowerCase().includes('24');
                    const isLocation =
                      line.includes('Serving') ||
                      line.includes('Vancouver') ||
                      line.includes('Richmond');

                    let bgColor = 'bg-gray-50/50';
                    if (isMainNumber)
                      bgColor =
                        'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500';
                    else if (isHours)
                      bgColor = 'bg-blue-50/50 border border-blue-100';
                    else if (isLocation)
                      bgColor = 'bg-emerald-50/50 border border-emerald-100';

                    return (
                      <div
                        key={i}
                        className={`${bgColor} text-sm p-3 rounded-lg transition-all duration-300 hover:shadow-md`}
                      >
                        <p
                          className={`${isMainNumber ? 'font-semibold text-purple-800' : 'text-gray-700'} leading-relaxed flex items-start gap-2`}
                        >
                          {isMainNumber && (
                            <span className="text-purple-500 mt-0.5">📞</span>
                          )}
                          {isHours && (
                            <span className="text-blue-500 mt-0.5">⏰</span>
                          )}
                          {isLocation && (
                            <span className="text-emerald-500 mt-0.5">📍</span>
                          )}
                          <span>{line}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom pattern */}
        <div className="flex justify-center gap-3 mt-16 lg:mt-20">
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-200"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default MBRegionalCrisisCentres;
