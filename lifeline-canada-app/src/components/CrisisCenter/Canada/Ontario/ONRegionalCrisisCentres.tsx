import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Cambridge Distress Centre',
    image: '/assets/CanadaCenter_image/ON/telecare-cambridge-400x102.jpg',
    path: '#',
    lines: ['Distress Line: 519-658-5455', '24/7 Crisis Line: 1-844-437-3247'],
  },
  {
    title: 'Distress Centre Durham',
    image: '/assets/CanadaCenter_image/ON/durham.png',
    path: 'https://distresscentredurham.com/',
    lines: ['905-430-2522', '1-800-452-0688'],
  },
  {
    title: 'Distress Centre Halton',
    image: '/assets/CanadaCenter_image/ON/halton.png',
    path: 'https://www.dchalton.ca/',
    lines: [
      'Burlington: 905-681-1488',
      'Halton Hills/Milton: 905-877-1211',
      'Hamilton: 905-561-5800',
      'Oakville: 905-849-4541',
    ],
  },
  {
    title: 'Hamilton Crisis Line',
    image: '/assets/CanadaCenter_image/ON/hamilton.png',
    path: 'https://sahamiltoncfs.ca/',
    lines: ['905-522-1477', '1-855-294-4673'],
  },
  {
    title: 'Kingston Distress Line',
    image: '/assets/CanadaCenter_image/ON/kingston.png',
    path: 'https://www.telephoneaidlinekingston.com/',
    lines: ['613-544-1771'],
  },
  {
    title: 'Lanark, Leeds and Grenville Counties Distress Line',
    image: '/assets/CanadaCenter_image/ON/larnark.png',
    path: 'https://developmentalservices.com/services-distress',
    lines: ['1-800-465-4442'],
  },
  {
    title: 'London & District, Oxford & Surrounding Region',
    image: '/assets/CanadaCenter_image/ON/london.png',
    path: 'https://reachout247.ca/',
    lines: ['Reach Out 24/7: 1-866-933-2023', 'Support Line: 1-844-360-8055'],
  },
  {
    title: 'Distress Centre Niagara',
    image: '/assets/CanadaCenter_image/ON/niagra.png',
    path: 'https://www.distresscentreniagara.com/',
    lines: [
      'St. Catharines: 905-688-3711',
      'Port Colborne: 905-734-1212',
      'Fort Erie: 905-382-0689',
      'Grimsby, W. Lincoln: 905-563-6674',
    ],
  },
  {
    title: 'Distress Centre of Ottawa and Region',
    image: '/assets/CanadaCenter_image/ON/ottawa.png',
    path: 'https://www.dcottawa.on.ca/i-need-help/',
    lines: [
      'Distress Line: 613-238-3311',
      'Crisis Line: 613-722-6914',
      '1-866-996-0991',
    ],
  },
  {
    title: 'Distress Centres of Greater Toronto',
    image: '/assets/CanadaCenter_image/ON/toronto.png',
    path: 'https://www.dcogt.com/',
    lines: [
      'Distress Line: 416-408-4357',
      'Survivor Support Program: 416-595-1716',
    ],
  },
  {
    title: 'Peel and Dufferin Region',
    image: '/assets/CanadaCenter_image/ON/peel&duffrin.png',
    path: 'https://cmhapeeldufferin.ca/programs/24-7-crisis-support-peel/',
    lines: ['24/7 Crisis Support', '905-278-9036', '1-888-811-2222'],
  },
  {
    title: 'Sarnia & Lambton County',
    image: '/assets/CanadaCenter_image/ON/sarnia@lambton.png',
    path: 'https://www.familycounsellingctr.com/',
    lines: ['Distress Line: 519-336-3000', '1-888-347-8737'],
  },
  {
    title: 'Here 24/7 Waterloo and Wellington Region',
    image: '/assets/CanadaCenter_image/ON/waterloo.png',
    path: 'https://here247.ca/',
    lines: ['Here 24/7: 1-844-437-3247'],
  },
  {
    title: 'Windsor & Essex County',
    image: '/assets/CanadaCenter_image/ON/windsor&essex.png',
    path: 'https://windsoressex.cmha.ca/wp-content/uploads/2016/11/Distress-Centre.pdf',
    lines: ['Distress Line: 519-256-5000'],
  },
  {
    title: 'York & South Simcoe Regions',
    image: '/assets/CanadaCenter_image/ON/york.png',
    path: 'https://yssn.ca/crisis-services/310-cope/',
    lines: ['Distress Line: 1-855-310-COPE (2673)'],
  },
  {
    title: 'Red Lake Hospital Crisis Line',
    image: '/assets/CanadaCenter_image/ON/redlake.png',
    path: 'https://www.redlakehospital.ca/mentalhealth-addictionsservices',
    lines: ['Kenora Rainy River District of Ontario', '1-866-888-8988'],
  },
];

const ONRegionalCrisisCentres: React.FC = () => {
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
            Ontario Regional
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
                  <h3 className="!text-base sm:!text-lg md:!text-xl lg:!text-2xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block break-words">
                    {centre.title}
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {centre.lines.map((line, i) => {
                      const isMainNumber =
                        line.toLowerCase().includes('crisis') ||
                        line.toLowerCase().includes('distress') ||
                        line.toLowerCase().includes('call:') ||
                        /^\d/.test(line.trim());
                      const isHours =
                        line.toLowerCase().includes('am') ||
                        line.toLowerCase().includes('pm') ||
                        line.toLowerCase().includes('24/7') ||
                        line.toLowerCase().includes('24 hrs');
                      const isLocation =
                        line.includes('Burlington') ||
                        line.includes('Halton') ||
                        line.includes('Hamilton') ||
                        line.includes('Oakville') ||
                        line.includes('St. Catharines') ||
                        line.includes('Port Colborne') ||
                        line.includes('Fort Erie') ||
                        line.includes('Grimsby') ||
                        line.includes('Kenora');

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

export default ONRegionalCrisisCentres;