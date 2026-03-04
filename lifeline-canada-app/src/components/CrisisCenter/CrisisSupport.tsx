import React from 'react';
import crisisSuportImage from '../../assets/crisis-support.png';

const CrisisSupport: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-[#fbf7f2] font-sans antialiased overflow-hidden">
      {/* Minimalist floating orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#c7d8d1]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-[#e6d9ce]/40 rounded-full blur-3xl"></div>

      {/* Single diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#c4b5a5]/20 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left column */}
          <div className="flex-1 flex flex-col justify-center space-y-14">
            {/* Heading */}
            <div className="space-y-3">
              <span className="text-sm font-medium tracking-[0.3em] text-[#b2957b] uppercase block">
                — 24/7 support
              </span>
              <h1 className="font-serif text-7xl md:text-8xl lg:text-8xl font-light text-[#1f2c32] leading-[0.9]">
                In Crisis?
                <span className="block text-[#ac8b74] mt-2">Need Help?</span>
              </h1>
            </div>

            {/* Crisis information - with FULL original text */}
            <div className="max-w-xl">
              <div className="bg-white rounded-[2rem] p-10 shadow-[0_50px_40px_-30px_rgba(0,0,0,0.15)] border border-white/80">
                <p className="text-xl md:text-2xl text-[#3d5663] leading-relaxed">
                  In Crisis? Call or Text{' '}
                  <span className="text-[#1e3b4a] font-medium text-2xl md:text-3xl">
                    988
                  </span>{' '}
                  Canada's new suicide prevention hotline. If you or someone you
                  know is in danger of hurting themselves or others, call{' '}
                  <span className="text-[#1e3b4a] font-medium">911</span>{' '}
                  immediately.{' '}
                  <a
                    href="#local-crisis-support"
                    className="text-[#2b5f6b] border-b border-dotted border-[#9fb7c0] hover:border-solid hover:border-[#1a3f48] transition-all duration-300 inline-flex items-center gap-1 group cursor-pointer"
                  >
                    See our directory of mental health crisis support
                  </a>{' '}
                  in your area below.
                </p>
              </div>
            </div>

            {/* Medical disclaimer - FULL original text */}
            <div className="max-w-md">
              <p className="text-base md:text-lg text-[#8a9ca8] leading-relaxed border-l-2 border-[#dbd2c8] pl-6">
                Seek the advice of an appropriately qualified healthcare
                professional before making decisions about your circumstances.
              </p>
            </div>
          </div>

          {/* Right column - keep your beautiful design */}
          <div className="flex-1 lg:mt-12">
            <div className="sticky top-24">
              {/* Asymmetrical frame */}
              <div className="relative">
                {/* Bold negative space treatment */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ac8b74]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1f2c32]/10 rounded-full blur-2xl"></div>

                {/* Main image with unique crop */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                  {/* Duotone-like overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ac8b74]/20 via-transparent to-[#1f2c32]/30 mix-blend-multiply z-10"></div>

                  <img
                    src={crisisSuportImage}
                    alt="Calm waters representing peace and support"
                    className="w-full h-full object-cover"
                  />

                  {/* Caption - restored original with your styling */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="backdrop-blur-sm bg-white/10 px-5 py-3 rounded-full inline-block border border-white/20">
                      <span className="text-white text-sm font-light tracking-widest">
                        — you are not alone —
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating minimal element */}
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-white/80">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-[#3b4f53] tracking-wide">
                      AVAILABLE NOW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-32 flex justify-between items-center text-xs text-[#cbd2ce] tracking-wider uppercase">
          <span>Confidential • Free • 24/7</span>
          <span className="border border-[#e2dad2] px-4 py-2 rounded-full">
            988.ca
          </span>
        </div>
      </div>
    </main>
  );
};

export default CrisisSupport;
