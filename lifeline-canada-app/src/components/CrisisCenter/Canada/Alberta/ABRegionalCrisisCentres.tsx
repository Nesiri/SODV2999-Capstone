import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Stepping Stones Crisis Centre',
    image: '/assets/CanadaCenter_image/AB/stepping-stones-1-400x100.png',
    path: 'https://steppingstonessociety.ca/',
    lines: [
      'Cold Lake, AB',
      'Crisis 24/7: 1-866-594-0533',
      'Crisis 24/7: (780) 594-3353',
    ],
  },
  {
    title: 'Distress Centre Calgary',
    image: '/assets/CanadaCenter_image/AB/distress_center.png',
    path: 'https://distresscentre.com/',
    lines: ['Serving Calgary & Area', 'Crisis Line: (403) 266-4357 24/7'],
  },
  {
    title: 'Distress Line of Southwestern Alberta',
    image: '/assets/CanadaCenter_image/AB/cmha_ab_southwestern.png',
    path: 'https://lethbridge.cmha.ca/programs/crisis-services/distress-line-of-south-western-alberta/',
    lines: [
      'Chinook Health Region & S. Calgary',
      'Crisis 24 hours: 1-888-787-2880',
      'Crisis 24 hours: (403) 327-7905',
    ],
  },
  {
    title: 'Salvation Army Community & Family Centres',
    image: '/assets/CanadaCenter_image/AB/salvation_army.png',
    path: 'https://salvationarmy.ca/you-can-bring-hope/recovery-support/',
    lines: [
      'Greater Edmonton Area',
      'Mon – Friday, 9:00 am – 11:30 pm',
      'Hope Line: (780) 424-9223',
    ],
  },
  {
    title: 'The Support Network Distress Line',
    image: '/assets/CanadaCenter_image/AB/cmah-edmonton-400x100.png',
    path: 'https://edmonton.cmha.ca/find-help/distress-crisis-lines/',
    lines: [
      'Capital Health Region & Drayton Valley',
      'Crisis: 1-800-232-7288 24/7',
      'Crisis 24 hours: (780) 482-4357',
    ],
  },
  {
    title: 'Wood’s Homes',
    image: '/assets/CanadaCenter_image/AB/wood_homes.png',
    path: 'https://woodshomes.ca/',
    lines: [
      'Calgary',
      'Crisis 24 hours: 1-800-563-6106',
      'Crisis 24 hours: (403) 299-9699',
    ],
  },
  {
    title: 'Society for Crisis Prevention Some Other Solutions',
    image: '/assets/CanadaCenter_image/AB/fort_mcmurray.png',
    path: 'https://www.someothersolutions.ca/',
    lines: [
      'Serving Fort McMurray & Northeastern Alberta',
      '24 hour Crisis Line: 780-743-HELP',
      '1-800-565-3801',
    ],
  },
  {
    title: 'Calgary ConnecTeen',
    image: '/assets/CanadaCenter_image/AB/connect_teen.png',
    path: 'https://salvationarmy.ca/you-can-bring-hope/recovery-support/',
    lines: ['Call: 403-264-8336', 'Text: 587-333-2724'],
  },
];

const ABRegionalCrisisCentres: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#c9c2cf] via-[#d6cfdd] to-[#bcb4c4] py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 !bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:!text-4xl lg:text-5xl  font-bold font-serif !text-[#5f2d85] px-4">
            Alberta Regional
            <span className="block text-transparent bg-[#5f2d85] bg-clip-text text-2xl sm:text-3xl lg:!text-4xl  mt-2">
              Crisis Support Centres
            </span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {centres.map((centre, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Image Card - Clickable Link */}
              <Link
                to={centre.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative !bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-[#5f2d85] via-pink-600 to-[#5f2d85]"></div>

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
                  <div className="absolute top-3 right-3 !bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 z-20">
                    <svg
                      className="w-4 h-4 !text-[#5f2d85]"
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
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
              </Link>

              {/* Lines Section - Beautiful Card Below */}
              <div className="mt-1 p-5 !bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 flex-1">
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
                          className={`${isMainNumber ? 'font-normal !text-[#5f2d85]' : 'text-gray-700'} leading-relaxed flex items-start gap-2`}
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

export default ABRegionalCrisisCentres;
