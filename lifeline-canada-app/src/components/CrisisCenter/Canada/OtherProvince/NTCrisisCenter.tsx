import React from 'react';
import { Link } from 'react-router-dom';

const crisisCentres = [
  {
    title: 'Serving Northwest Territories',
    image:
      '/assets/CanadaCenter_image/OtherProvince/northwest_territoriews.png',
    path: 'https://www.nthssa.ca/en/services/mental-health-resources-and-supports/crisis-lines-and-811',
    lines: [
      '811 (1-844-259-1793) Nurse Advice/Mental Health and Wellness Counseling/Tobacco Cessation',
    ],
  },
];

const NTCrisisCentres: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e9e3ea] via-[#f2ecf3] to-[#e0d8e2] py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 !bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4a6fa5]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Flag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 mb-12">
          {/* Text Container */}
          <div className="flex-1 text-center sm:text-left space-y-3 sm:space-y-4">
            <div className="inline-block sm:block mx-auto sm:mx-0">
              <span className="hidden sm:inline-block px-3 sm:px-4 py-1.5 sm:py-2 !bg-white/40 backdrop-blur-sm rounded-full text-xs sm:text-sm font-normal !text-[#5f2d85] border border-white/60 shadow-sm mb-2 sm:mb-3">
                🇨🇦 Northwest Territories
              </span>
            </div>

            <h1 className="text-3xl xs:!text-4xl sm:text-5xl font-serif font-medium leading-tight !text-[#5f2d85]">
              <span className="block">Northwest Territories</span>
              <span className="block text-transparent bg-[#5f2d85] bg-clip-text text-3xl xs:text-5xl sm:text-5xl mt-1 sm:mt-2">
                Crisis Centres
              </span>
            </h1>
          </div>
          {/* Image Container */}
          <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0">
            <div className="relative group w-fit">
              {/* Animated glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#4a6fa5]/20 via-[#6b8cbc]/20 to-[#4a6fa5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse"></div>

              {/* Image frame with gradient border */}
              <div className="relative p-1 bg-gradient-to-r from-[#4a6fa5]/30 to-[#6b8cbc]/30 rounded-2xl shadow-2xl">
                <div className="overflow-hidden rounded-xl !bg-white/50 backdrop-blur-sm">
                  <img
                    src="/assets/flags/nwth_1024x1024-300x149.webp"
                    alt="Northwest Territories Flag"
                    className="w-70 xs:w-70 sm:w-80 md:w-96 lg:w-110 xl:w-130 h-auto rounded-xl transform group-hover:scale-110 transition duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#4a6fa5]/30 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#4a6fa5]/30 rounded-bl-lg"></div>
            </div>
          </div>
        </div>

        {/* Crisis Centre Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md mt-20">
            {crisisCentres.map((centre, index) => (
              <div key={index} className="flex flex-col">
                {/* Image Link Card */}
                <Link
                  to={centre.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative !bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/50 cursor-pointer"
                >
                  {/* Gradient top bar */}
                  <div className="h-2 bg-gradient-to-r from-[#5f2d85] via-pink-600 to-[#5f2d85]"></div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
                    <div className="absolute top-3 right-3 !bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
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

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                </Link>

                {/* Lines Section - Outside Link, Below Card */}
                <div className="mt-1 p-5 !bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
                      {centre.title}
                    </h3>

                    {centre.lines.map((line, i) => {
                      const isMainNumber =
                        line.toLowerCase().includes('crisis') &&
                        line.includes(':');

                      return (
                        <div
                          key={i}
                          className={`text-sm p-2.5 rounded-lg transition-all duration-300 flex items-center ${
                            isMainNumber
                              ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 font-medium'
                              : ''
                          }`}
                        >
                          <svg
                            className="w-4 h-4 !text-[#5f2d85] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="#5f2d85"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <p className="text-gray-700 leading-relaxed">
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

        {/* Decorative bottom pattern */}
        <div className="flex justify-center gap-3 mt-12 lg:mt-16">
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-400/50 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50 animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default NTCrisisCentres;
