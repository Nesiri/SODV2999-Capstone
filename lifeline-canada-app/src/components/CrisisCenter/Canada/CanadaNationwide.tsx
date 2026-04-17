import React from 'react';

type CrisisCentre = {
  name: string;
  image: string;
  details?: string[];
};

const crisisCentres: CrisisCentre[] = [
  {
    name: '988 Suicide & Crisis Lifeline',
    image: '/assets/CanadaCenter_image/talkSuicide.jpg',
    details: ['Call or Text: 988', 'Toll-Free 24/7'],
  },
  {
    name: 'Kids Help Phone',
    image: '/assets/CanadaCenter_image/kidsHelpPhone-1-400x176.jpg',
    details: ['Call: 1-800-668-6868', '20 y/o and Younger'],
  },
  {
    name: 'Crisis Text Line',
    image: '/assets/CanadaCenter_image/crisisTexLine-400x188.jpg',
    details: [
      'Text Toll-Free, 24/7',
      'English: TALK to 686868',
      'French: TEXTO to 686868',
    ],
  },
  {
    name: 'First Nations Residential Schools',
    image:
      '/assets/CanadaCenter_image/FirstNationResSchoolorange-heart-graphic-400x267.jpg',
    details: ['Call: 1-866-925-4419'],
  },
  {
    name: 'Trans LifeLine',
    image: '/assets/CanadaCenter_image/Trans-Pride-Flag-400x240.png',
    details: ['Call: 1-877-330-6366', 'All Ages'],
  },
  {
    name: 'First Nations & Inuit Hope for Wellness',
    image: '/assets/CanadaCenter_image/HopeForWellness-400x119.jpg',
    details: ['Call: 1-855-242-3310  24/7'],
  },
];

const CanadaNationwide: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F8F2F5] via-[#F0E9F0] to-[#E8DFE8] py-24 overflow-hidden">
      {/* Modern abstract pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23948374' fill-opacity='0.3'/%3E%3Ccircle cx='20' cy='20' r='1' fill='%23948374' fill-opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='1' fill='%23948374' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Soft luminous gradients */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-[#D4C1C1]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-[#C1B1A1]/20 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with elegant typography */}
        <div className="text-center mb-16">
          <h1 className="!text-3xl sm:!text-5xl font-serif !text-[#5f2d85] leading-[1.1] mb-4">
            Canada Nationwide
            <span className="block !text-[#5f2d85]">Crisis Centres</span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C89F9F] to-transparent mx-auto"></div>
        </div>

        {/* Card grid - ALL CARDS EQUAL SIZE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {crisisCentres.map((centre, index) => (
            <div
              key={index}
              className="block group relative transform hover:-translate-y-2 transition-all duration-500 h-full"
            >
              {/* Card shadow layers */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C89F9F]/20 to-[#B28B8B]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card - EQUAL HEIGHT using flex flex-col */}
              <div className="relative !bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/60 hover:border-white/80 transition-all duration-300 flex flex-col h-full">
                {/* Logo/Image Container - FIXED SIZE WITH CONTAIN FIT */}
                <div
                  className="relative rounded-2xl overflow-hidden mb-5 flex-shrink-0 bg-gray-50 flex items-center justify-center"
                  style={{ height: '160px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B3C]/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={centre.image}
                    alt={centre.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 p-4"
                  />
                </div>

                {/* Content below image - FLEXIBLE but pushes to fill space */}
                <div className="flex flex-col flex-grow">
                  <h2 className="!text-xl font-serif text-[#2A3B3C] mb-3 group-hover:text-[#C89F9F] transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                    {centre.name}
                  </h2>

                  {/* Details with modern styling - PUSHES TO BOTTOM */}
                  <div className="space-y-1.5 mt-auto">
                    {centre.details?.map((line, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[#C89F9F] mt-1 flex-shrink-0">
                          ✦
                        </span>
                        <span className="text-[#4A5A5C] font-light leading-relaxed">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle decorative element */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#C89F9F]/30 !text-4xl font-serif">
                    ❤️
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CanadaNationwide;
