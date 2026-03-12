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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse-slower" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles - now using pre-generated values from useMemo */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingParticles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
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
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 mb-6 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">
              24/7 Crisis Support Available
            </span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="relative">
            <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 animate-gradient-x">
              Crisis Centres
            </span>
            {/* Decorative underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Immediate help is available. Reach out to your local crisis centre
            for confidential support, 24 hours a day, 7 days a week.
          </p>
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
                relative bg-white/80 backdrop-blur-xl rounded-3xl 
                shadow-2xl hover:shadow-3xl 
                transition-all duration-700 ease-out
                transform-gpu hover:scale-105 hover:-translate-y-2
                border border-white/50
                overflow-hidden
                ${hoveredId === item.id ? 'ring-4 ring-purple-500/30' : ''}
              `}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-rose-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-rose-600/10 transition-all duration-700" />

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-purple-200/50 rounded-tl-3xl group-hover:border-purple-400 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-200/50 rounded-br-3xl group-hover:border-pink-400 transition-colors duration-500" />
                </div>

                {/* Content Container */}
                <Link to={item.path} className="relative p-8">
                  {/* Image Container */}
                  <div className="relative mb-6">
                    {/* Image wrapper */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, ${item.id === 1 ? '#9333EA' : item.id === 2 ? '#DB2777' : '#E11D48'} 1px, transparent 0)`,
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
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-white/50">
                          <span className="text-xs font-semibold text-gray-700">
                            24/7
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative ring */}
                    <div
                      className={`
                      absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 
                      group-hover:opacity-30 blur-xl transition-opacity duration-700
                    `}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-center mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                      {item.title}
                    </span>
                  </h3>

                  {/* Helpline */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-2">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="font-mono font-semibold text-gray-800">
                        {item.helpline}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-center text-sm mb-6">
                    {item.description}
                  </p>

                  {/* Action Button */}
                  <div className="text-center">
                    <button
                      className={`
                      group/btn relative px-6 py-3 rounded-xl font-semibold text-white
                      overflow-hidden transition-all duration-500 transform-gpu
                      hover:scale-105 hover:shadow-xl active:scale-95
                      bg-gradient-to-r from-purple-600 to-pink-600
                      before:absolute before:inset-0
                      before:bg-white/30 before:skew-x-12
                      before:translate-x-[-200%] hover:before:translate-x-[200%]
                      before:transition-transform before:duration-1000
                    `}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Help Now
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-amber-200/50">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
            </div>
            <span className="text-amber-800 font-medium">
              If this is a medical emergency, please call 911 or your local
              emergency services immediately.
            </span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CrisisCentres;
