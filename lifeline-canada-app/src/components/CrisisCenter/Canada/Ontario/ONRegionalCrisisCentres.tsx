import React from 'react';
import { Link } from 'react-router-dom';

const centres = [
  {
    title: 'Cambridge Distress Centre',
    image: '/assets/CanadaCenter_image/ON/telecare-cambridge-400x102.jpg',
    path: '#',
    lines: [
      'Distress Line: 519-658-5455',
      '24/7 Crisis Line: 1-844-437-3247',
    ],
  },
  {
    title: 'Distress Centre Durham',
    image: '/assets/CanadaCenter_image/ON/durham.png',
    path: 'https://distresscentredurham.com/',
    lines: [
      '905-430-2522',
      '1-800-452-0688',
    ],
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
    lines: [
      '905-522-1477',
      '1-855-294-4673',
    ],
  },
  {
    title: 'Kingston Distress Line',
    image: '/assets/CanadaCenter_image/ON/kingston.png',
    path: 'https://www.telephoneaidlinekingston.com/',
    lines: [
      '613-544-1771',
    ],
  },
  {
    title: 'Lanark, Leeds and Grenville Counties Distress Line',
    image: '/assets/CanadaCenter_image/ON/larnark.png',
    path: 'https://developmentalservices.com/services-distress',
    lines: [
      '1-800-465-4442',
    ],
  },
  {
    title: 'London & District, Oxford & Surrounding Region',
    image: '/assets/CanadaCenter_image/ON/london.png',
    path: 'https://reachout247.ca/',
    lines: [
      'Reach Out 24/7: 1-866-933-2023',
      'Support Line: 1-844-360-8055',
    ],
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
    lines: [
      '24/7 Crisis Support',
      '905-278-9036',
      '1-888-811-2222',
    ],
  },
  {
    title: 'Sarnia & Lambton County',
    image: '/assets/CanadaCenter_image/ON/sarnia@lambton.png',
    path: 'https://www.familycounsellingctr.com/',
    lines: [
      'Distress Line: 519-336-3000',
      '1-888-347-8737',
    ],
  },
  {
    title: 'Here 24/7 Waterloo and Wellington Region',
    image: '/assets/CanadaCenter_image/ON/waterloo.png',
    path: 'https://here247.ca/',
    lines: [
      'Here 24/7: 1-844-437-3247',
    ],
  },
  {
    title: 'Windsor & Essex County',
    image: '/assets/CanadaCenter_image/ON/windsor&essex.png',
    path: 'https://windsoressex.cmha.ca/wp-content/uploads/2016/11/Distress-Centre.pdf',
    lines: [
      'Distress Line: 519-256-5000',
    ],
  },
  {
    title: 'York & South Simcoe Regions',
    image: '/assets/CanadaCenter_image/ON/york.png',
    path: 'https://yssn.ca/crisis-services/310-cope/',
    lines: [
      'Distress Line: 1-855-310-COPE (2673)',
    ],
  },
  {
    title: 'Red Lake Hospital Crisis Line',
    image: '/assets/CanadaCenter_image/ON/redlake.png',
    path: 'https://www.redlakehospital.ca/mentalhealth-addictionsservices',
    lines: [
      'Kenora Rainy River District of Ontario',
      '1-866-888-8988',
    ],
  },
];

const ONRegionalCrisisCentres: React.FC = () => {
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
        Ontario Regional
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

export default ONRegionalCrisisCentres;
