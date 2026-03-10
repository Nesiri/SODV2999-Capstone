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
    path: '/newbrunswick-crisis-centres',
  },
  {
    name: 'Newfoundland and Labrador',
    image: '/assets/flags/nfth_1024x1024-300x148.webp',
    path: '/newfoundland-crisis-centres',
  },
  {
    name: 'Nova Scotia',
    image: '/assets/flags/nsth_1024x1024-300x151.webp',
    path: '/nova-scotia-crisis-centres',
  },
  {
    name: 'Prince Edward Island',
    image: '/assets/flags/peith_1024x1024-300x150.webp',
    path: '/pei-crisis-centres',
  },
  {
    name: 'Yukon',
    image: '/assets/flags/yuth_1024x1024-e1687406771897-300x149.webp',
    path: '/yukon-crisis-centres',
  },
  {
    name: 'Nunavut',
    image: '/assets/flags/nuth_1024x1024-300x150.webp',
    path: '/nunavut-crisis-centres',
  },
  {
    name: 'Northwest Territories',
    image: '/assets/flags/nwth_1024x1024-300x149.webp',
    path: '/nwterritories-crisis-centres',
  },
];

const ProvincialCrisisCentres: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F0F5FA] via-[#E8F0F7] to-[#E0EAF2] py-24 overflow-hidden">
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

      {/* Soft luminous gradients */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#A6C1D9]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-[#D4B8C5]/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with elegant typography */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-[#7C9EB2] uppercase font-light block mb-4">
            — Support Across Canada —
          </span>
          <h1 className="text-5xl lg:text-6xl font-serif text-[#1F3A4F] leading-[1.1] mb-4">
            Provincial Crisis
            <span className="block text-[#B18F9E]">Centres</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#B18F9E] to-transparent mx-auto"></div>
          <p className="text-[#3C5A6F] text-lg font-light max-w-2xl mx-auto mt-6">
            Find immediate support in your province or territory
          </p>
        </div>

        {/* Modern card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {provinces.map((province) => (
            <Link
              key={province.name}
              to={province.path}
              className="group relative transform hover:-translate-y-2 transition-all duration-500"
              style={{ textDecoration: 'none' }}
            >
              {/* Card shadow layers */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#B18F9E]/20 to-[#7C9EB2]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/60 hover:border-white/80 transition-all duration-300">
                {/* Image container with modern frame */}
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A4F]/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={province.image}
                    alt={province.name}
                    className="w-full h-28 sm:h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Elegant overlay border */}
                  <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none"></div>
                </div>

                {/* Province name with elegant styling */}
                <h3 className="text-center font-serif text-base sm:text-lg text-[#1F3A4F] group-hover:text-[#B18F9E] transition-colors duration-300">
                  {province.name}
                </h3>

                {/* Subtle decorative element */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#B18F9E]/40 text-xl">✦</span>
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
