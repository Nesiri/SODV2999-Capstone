import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const crisisData = [
  {
    id: 1,
    title: 'Canada',
    path: '/canadian-crisis-centres',
    image: '/assets/CrisisCenter/canadaHeart-300x272.webp',
    helpline: '1-833-456-4566',
    description: '24/7 Crisis Support',
  },
  {
    id: 2,
    title: 'United States',
    path: '/usa-crisis-centres',
    image: '/assets/CrisisCenter/usaHeart-400x231.jpg',
    helpline: '988',
    description: 'Suicide & Crisis Lifeline',
  },
  {
    id: 3,
    title: 'International',
    path: '/international-crisis-centres',
    image: '/assets/CrisisCenter/heart-earth-globe-e1686616467774-400x319.jpg',
    helpline: 'Multiple Countries',
    description: 'Find help worldwide',
  },
];

// Simple seeded random function for stable values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const CrisisCentres = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Generate stable random values using seeded random
  const floatingParticles = useMemo(
    () =>
      [...Array(20)].map((_, i) => {
        const seed1 = i * 100 + 1;
        const seed2 = i * 100 + 2;
        const seed3 = i * 100 + 3;

        return {
          top: `${seededRandom(seed1) * 100}%`,
          left: `${seededRandom(seed2) * 100}%`,
          delay: `${i * 0.2}s`,
          duration: `${3 + seededRandom(seed3) * 5}s`,
        };
      }),
    [] // Empty dependency array = runs once, no re-renders
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f5f0ff] via-[#faf5ff] to-[#f0eaff] overflow-hidden">
      {/* Animated Background Elements - Softened colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs - Calming purple/lavender tones */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#d9c9ff]/40 to-[#e0bbff]/40 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#b19cd9]/30 to-[#c7b0e6]/30 rounded-full blur-3xl animate-pulse-slower" />

        {/* Animated grid lines - Subtle */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147 112 219 / 0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles - Matching palette */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingParticles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#b19cd9] to-[#d9c9ff] rounded-full opacity-30 animate-float"
              style={{
                top: particle.top,
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Animated badge - Softer colors */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#d9c9ff]/30 mb-6 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b19cd9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8a75b5]"></span>
            </span>
            <span className="text-sm font-semibold text-[#4a3f5a]">
              24/7 Crisis Support Available
            </span>
          </div>

          {/* Main heading with gradient - Softer purple gradient */}
          <h1 className="relative">
            <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#6b4f7a] via-[#8a75b5] to-[#b19cd9] animate-gradient-x">
              Crisis Centres
            </span>
            {/* Decorative underline - Matching */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-[#8a75b5] to-[#b19cd9] rounded-full" />
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {crisisData.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card Container */}
              <div
                className={`
                relative bg-white/90 backdrop-blur-md rounded-3xl 
                shadow-[0_20px_50px_-15px_rgba(106,79,122,0.3)] 
                hover:shadow-[0_30px_60px_-15px_rgba(106,79,122,0.5)]
                transition-all duration-700 ease-out
                transform-gpu hover:scale-[1.02] hover:-translate-y-2
                border border-[#d9c9ff]/40
                overflow-hidden
                ${hoveredId === item.id ? 'ring-4 ring-[#b19cd9]/40' : ''}
              `}
              >
                {/* Animated gradient overlay - Softer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b19cd9]/0 via-[#d9c9ff]/0 to-[#e0bbff]/0 group-hover:from-[#b19cd9]/10 group-hover:via-[#d9c9ff]/10 group-hover:to-[#e0bbff]/10 transition-all duration-700" />

                {/* Decorative corner accents - Matching palette */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#d9c9ff]/50 rounded-tl-3xl group-hover:border-[#b19cd9] transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#e0bbff]/50 rounded-br-3xl group-hover:border-[#b19cd9] transition-colors duration-500" />
                </div>

                {/* Content Container */}
                <Link to={item.path} className="relative p-8 block">
                  {/* Image Container */}
                  <div className="relative mb-6">
                    {/* Image wrapper */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f5f0ff] to-[#faf5ff] shadow-inner">
                      {/* Animated background pattern - Color coded by country but softer */}
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, ${
                              item.id === 1 ? '#8a75b5' : item.id === 2 ? '#b19cd9' : '#d9c9ff'
                            } 1px, transparent 0)`,
                            backgroundSize: '24px 24px',
                          }}
                        />
                      </div>

                      {/* Main image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative z-10 w-full h-full object-contain p-6 transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />

                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-[#d9c9ff]/50">
                          <span className="text-xs font-semibold text-[#4a3f5a]">
                            24/7
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative ring */}
                    <div
                      className={`
                      absolute -inset-1 bg-gradient-to-r from-[#b19cd9] to-[#d9c9ff] rounded-3xl opacity-0 
                      group-hover:opacity-30 blur-xl transition-opacity duration-700
                    `}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-center mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4a3f5a] to-[#6b4f7a] group-hover:from-[#6b4f7a] group-hover:to-[#8a75b5] transition-all duration-500">
                      {item.title}
                    </span>
                  </h3>

                  {/* Helpline */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f5f0ff] to-[#faf0ff] rounded-full px-4 py-2 border border-[#d9c9ff]/30">
                      <svg
                        className="w-4 h-4 text-[#8a75b5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="font-mono font-semibold text-[#4a3f5a]">
                        {item.helpline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#6b5f7a] text-center text-sm mb-6">
                    {item.description}
                  </p>

                  {/* Learn More Link - Added for better UX */}
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 text-[#8a75b5] text-sm font-medium group-hover:text-[#6b4f7a] transition-colors">
                      Get Support
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice - Softer amber */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#fff3e6] to-[#ffe8d9] backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#ffd9b3]/50">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff9933]"></span>
            </div>
            <span className="text-[#664d33] font-medium">
              If this is a medical emergency, please call 911 or your local
              emergency services immediately.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisCentres;