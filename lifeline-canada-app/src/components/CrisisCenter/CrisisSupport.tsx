import React from 'react';
import crisisSuportImage from '../../assets/crisis-support.png';

const CrisisSupport: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-slate-700 via-purple-700 to-slate-700 font-sans antialiased overflow-hidden">
      {/* Visible spider web / lattice grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial lines - spider web spokes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const x2 = 50 + 48 * Math.cos(angle);
            const y2 = 50 + 48 * Math.sin(angle);
            return (
              <line
                key={`radial-${i}`}
                x1="50%"
                y1="50%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(168, 85, 247, 0.25)"
                strokeWidth="0.8"
              />
            );
          })}
          {/* Concentric circles - spider web rings */}
          {[12, 24, 36, 48, 60, 72].map((radius, i) => (
            <circle
              key={`circle-${i}`}
              cx="50%"
              cy="50%"
              r={`${radius}%`}
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="0.6"
              strokeDasharray={i % 2 === 0 ? "5 3" : "3 5"}
            />
          ))}
        </svg>
        
        {/* Diagonal lattice grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L50 50 M0 50 L50 0' stroke='%23a855f7' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '35px 35px',
          }}
        />
        
        {/* Fine cross grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0 L15 30 M0 15 L30 15' stroke='%23c084fc' stroke-width='0.4' fill='none' opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundSize: '25px 25px',
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 w-fit">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                24/7 CRISIS SUPPORT
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  In Crisis?
                </span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-3">
                  Need Help?
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>

            {/* Boxed paragraph - Modern glass card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                <p className="text-white/90 leading-relaxed space-y-4">
                  <span className="block text-lg">
                    In Crisis? Call or Text{' '}
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      988
                    </span>{' '}
                    Canada's new suicide prevention hotline.
                  </span>
                  <span className="block">
                    If you or someone you know is in danger of hurting themselves or others, call{' '}
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      911
                    </span>{' '}
                    immediately.
                  </span>
                  <span className="block">
                    <a
                      href="#local-crisis-support"
                      className="inline-flex items-center gap-2 text-purple-300 font-medium border-b border-purple-500/50 hover:border-purple-300 transition-all group/link"
                    >
                      See our directory of mental health crisis support
                      <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
                    </a>{' '}
                    in your area below.
                  </span>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
              <p className="text-sm text-white/50 leading-relaxed">
                Seek the advice of an appropriately qualified healthcare
                professional before making decisions about your circumstances.
              </p>
            </div>
          </div>

          {/* Right Column - Image aligned with text box */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative sm:top-22 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent z-10" />
                <img
                  src={crisisSuportImage}
                  alt="Peace and support"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Caption overlay */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 w-full px-6">
                  <div className="backdrop-blur-md bg-black/30 rounded-full px-6 py-3 text-center border border-white/20">
                    <span className="text-white text-sm font-medium tracking-wider">
                      ✨ you are not alone ✨
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default CrisisSupport;