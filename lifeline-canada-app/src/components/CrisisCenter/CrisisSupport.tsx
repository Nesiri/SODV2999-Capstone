import React from 'react';
const crisisSuportImage = 'assets/CrisisCenter/crisis-support-no-coffee.png';

const CrisisSupport: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-indigo-200 font-sans antialiased overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-300/20 rounded-full blur-[150px]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* HEADER - CENTERED ON SCREEN */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 mb-8">
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] text-purple-900 uppercase">
              24/7 CRISIS SUPPORT
            </span>
          </div>

          <h1 className="!text-3xl md:!text-5xl  font-bold leading-[1.1]">
            <span className="!bg-[#89009B]  bg-clip-text text-transparent">
              In Crisis?
            </span>{' '}
            <span className="!bg-[#89009B]  bg-clip-text text-transparent">
              Need Help?
            </span>
          </h1>
        </div>

        {/* 2-COLUMN GRID FOR CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Boxed paragraph - Modern glass card with darker text for contrast */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-2xl">
                <p className="text-purple-950 leading-relaxed space-y-4">
                  <span className="block text-lg font-semibold">
                    In Crisis? Call or Text{' '}
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                      988
                    </span>{' '}
                    Canada's new suicide prevention hotline.
                  </span>
                  <span className="block font-medium">
                    If you or someone you know is in danger of hurting
                    themselves or others, call{' '}
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                      911
                    </span>{' '}
                    immediately.
                  </span>
                  <span className="block">
                    <a
                      href="#local-crisis-support"
                      className="inline-flex items-center gap-2 !text-purple-800 font-bold border-b border-purple-600/50 hover:border-purple-800 transition-all group/link"
                    >
                      See our directory of mental health crisis support
                    </a>{' '}
                    in your area below.
                  </span>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
              <p className="text-sm text-purple-800/70 leading-relaxed font-medium">
                Seek the advice of an appropriately qualified healthcare
                professional before making decisions about your circumstances.
              </p>
            </div>
          </div>

          {/* Right Column - Image aligned with text box */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-2xl blur-2xl" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/40">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-200/50 via-transparent to-transparent z-10" />
                <img
                  src={crisisSuportImage}
                  alt="Peace and support"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
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
