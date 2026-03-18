import React from 'react';
import crisisSuportImage from '../../assets/crisis-support.png';

const CrisisSupport: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#e0bbff]/30 via-[#f3e8ff]/40 to-[#d9c9ff]/30 font-sans antialiased overflow-hidden">
      {/* Minimalist floating orbs - softened to match palette */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#d9c9ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-[#e6d9ce]/30 rounded-full blur-3xl"></div>

      {/* Single diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c4b5a5]/10 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left column */}
          <div className="flex-1 flex flex-col justify-center space-y-14">
            {/* Heading - adjusted for better contrast */}
            <div className="space-y-3">
              <span className="text-sm font-medium tracking-[0.3em] text-[#6b4f6f] uppercase block">
                CRISIS SUPPORT
              </span>
              <h1 className="font-serif text-7xl md:text-8xl lg:text-8xl font-light text-[#2d1f33] leading-[0.9]">
                In Crisis?
                <span className="block text-[#7c5e7f] mt-2">Need Help?</span>
              </h1>
            </div>

            {/* Crisis information - FIXED card colors */}
            <div className="max-w-xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 shadow-[0_50px_40px_-30px_rgba(0,0,0,0.15)] border border-white/60">
                <p className="text-xl md:text-2xl leading-relaxed text-[#2d1f33]">
                  In Crisis? Call or Text{' '}
                  <span className="text-[#7c3a7c] font-bold text-2xl md:text-3xl">
                    988
                  </span>{' '}
                  Canada's new suicide prevention hotline. If you or someone you
                  know is in danger of hurting themselves or others, call{' '}
                  <span className="text-[#7c3a7c] font-bold">911</span>{' '}
                  immediately.{' '}
                  <a
                    href="#local-crisis-support"
                    className="text-[#5f4b8b] border-b border-dotted border-[#b19cd9] hover:border-solid hover:border-[#4a3780] transition-all duration-300 inline-flex items-center gap-1 group cursor-pointer"
                  >
                    See our directory of mental health crisis support
                  </a>{' '}
                  in your area below.
                </p>
              </div>
            </div>

            {/* Medical disclaimer - FIXED colors */}
            <div className="max-w-md">
              <p className="text-base md:text-lg text-[#4a3f5a] leading-relaxed border-l-2 border-[#b19cd9] pl-6">
                Seek the advice of an appropriately qualified healthcare
                professional before making decisions about your circumstances.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 lg:flex lg:items-center mt-10">
            <div className="sticky top-24">
              {/* Asymmetrical frame */}
              <div className="relative">
                {/* Bold negative space treatment - adjusted colors */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#b19cd9]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#4a3f5a]/20 rounded-full blur-2xl"></div>

                {/* Main image */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl">
                  {/* Duotone-like overlay - softened */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b19cd9]/30 via-transparent to-[#4a3f5a]/40 mix-blend-soft-light z-10"></div>

                  <img
                    src={crisisSuportImage}
                    alt="Calm waters representing peace and support"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption - now properly positioned */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 p-4 z-[9999] w-full flex justify-center">
                  <div className="backdrop-blur-md bg-[#2d1f33]/30 px-6 py-4 rounded-full inline-block border border-white/30 shadow-2xl">
                    <span className="text-white text-base font-light tracking-widest">
                      — you are not alone —
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CrisisSupport;