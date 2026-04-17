import React from 'react';
import { Link } from 'react-router-dom';

type Province = {
  name: string;
  image: string;
  path: string;
};

const provinces: Province[] = [
  {
    name: 'British Columbia',
    image: '/assets/flags/bcth_1024x1024-300x149.webp',
    path: '/british-columbia-crisis-centres',
  },
  {
    name: 'Alberta',
    image: '/assets/flags/alth_1024x1024-300x149.webp',
    path: '/alberta-crisis-centres',
  },
  {
    name: 'Saskatchewan',
    image: '/assets/flags/sath_1024x1024-300x149.webp',
    path: '/saskatchewan-crisis-centres',
  },
  {
    name: 'Manitoba',
    image: '/assets/flags/math_grande-300x147.webp',
    path: '/manitoba-crisis-centres',
  },
  {
    name: 'Ontario',
    image: '/assets/flags/onth_grande-300x149.webp',
    path: '/ontario-crisis-centres',
  },
  {
    name: 'Quebec',
    image: '/assets/flags/quth_1024x1024-300x149.webp',
    path: '/quebec-crisis-centres',
  },
  {
    name: 'New Brunswick',
    image: '/assets/flags/nbth_1024x1024-300x147.webp',
    path: '/other-provinces/newbrunswick-crisis-centres',
  },
  {
    name: 'Newfoundland and Labrador',
    image: '/assets/flags/nfth_1024x1024-300x148.webp',
    path: '/other-provinces/newfoundland-crisis-centres',
  },
  {
    name: 'Nova Scotia',
    image: '/assets/flags/nsth_1024x1024-300x151.webp',
    path: '/other-provinces/nova-scotia-crisis-centres',
  },
  {
    name: 'Prince Edward Island',
    image: '/assets/flags/peith_1024x1024-300x150.webp',
    path: '/other-provinces/pei-crisis-centres',
  },
  {
    name: 'Yukon',
    image: '/assets/flags/yuth_1024x1024-e1687406771897-300x149.webp',
    path: '/other-provinces/yukon-crisis-centres',
  },
  {
    name: 'Nunavut',
    image: '/assets/flags/nuth_1024x1024-300x150.webp',
    path: '/other-provinces/nunavut-crisis-centres',
  },
  {
    name: 'Northwest Territories',
    image: '/assets/flags/nwth_1024x1024-300x149.webp',
    path: '/other-provinces/nwterritories-crisis-centres',
  },
];

const ProvincialCrisisCentres: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F0F5FA] via-[#E8F0F7] to-[#E0EAF2] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Modern geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%238B9EB0' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Soft luminous gradients - responsive positioning */}
      <div className="absolute top-20 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#A6C1D9]/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>
      <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#D4B8C5]/20 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with elegant typography */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#7C9EB2] uppercase font-light block mb-3 sm:mb-4">
            — Support Across Canada —
          </span>
          <h1 className="!text-3xl md:!text-4xl lg:!text-5xl font-serif !text-[#5f2d85] leading-[1.2] sm:leading-[1.15] lg:leading-[1.1] mb-3 sm:mb-4">
            Provincial Crisis
            <span className="block !text-[#5f2d85]">Centres</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#B18F9E] to-transparent mx-auto"></div>
          <p className="text-sm sm:text-base md:text-lg text-[#3C5A6F] font-light max-w-2xl mx-auto mt-4 sm:mt-5 md:mt-6 px-4">
            Find immediate support in your province or territory
          </p>
        </div>

        {/* Modern card grid - FULLY RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {provinces.map((province) => (
            <Link
              key={province.name}
              to={province.path}
              className="group relative transform hover:-translate-y-2 transition-all duration-500 h-full"
              style={{ textDecoration: 'none' }}
            >
              {/* Card shadow layers - responsive blur */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#B18F9E]/20 to-[#7C9EB2]/20 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card - EQUAL HEIGHT using flex flex-col */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg border border-white/60 hover:border-white/80 transition-all duration-300 flex flex-col h-full">
                {/* Image container - RESPONSIVE SIZING */}
                <div
                  className="relative rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 flex-shrink-0 bg-gray-50 flex items-center justify-center"
                  style={{ height: '80px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A4F]/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={province.image}
                    alt={province.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 p-1 sm:p-2"
                    loading="lazy"
                  />
                  {/* Elegant overlay border */}
                  <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl pointer-events-none"></div>
                </div>

                {/* Province name - RESPONSIVE TYPOGRAPHY */}
                <div className="flex-grow flex items-center justify-center">
                  <h3 className="text-center font-serif !text-xs sm:!text-sm md:!text-base lg:!text-lg text-[#1F3A4F] group-hover:text-[#B18F9E] transition-colors duration-300 leading-tight sm:leading-normal px-1">
                    {province.name}
                  </h3>
                </div>

                {/* Subtle decorative element - hidden on mobile */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  <span className="text-[#B18F9E]/40 text-base sm:text-xl">✦</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvincialCrisisCentres;