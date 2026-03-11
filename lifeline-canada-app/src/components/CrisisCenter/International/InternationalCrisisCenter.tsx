import React from 'react';

const InternationalCrisisCentres: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#F3F5F7] via-[#E9EEF3] to-[#DEE6EF] py-20 md:py-28 overflow-hidden">
      {/* Elegant geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%23948374' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Soft luminous gradients */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-[#C1B1A1]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#A6B4AA]/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Elegant badge with refined typography */}
            <div className="inline-block">
              <span className="text-xs tracking-[0.3em] text-[#B28B8B] uppercase font-light">
                — Compassionate Support
              </span>
            </div>

            {/* Sophisticated headline with elegant font pairing */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-serif text-[#2A3B3C] leading-[1.1]">
                International Crisis
                <span className="block text-[#C89F9F]">Centres</span>
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-[#C89F9F] to-transparent"></div>
            </div>

            {/* Refined content with elegant typography */}
            <div className="space-y-6">
              {/* Highlight box with subtle elegance */}
              <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60">
                <p className="text-[#4A5A5C] text-lg leading-relaxed">
                  <span className="inline-flex items-center gap-3 text-[#2A3B3C] font-medium mb-2">
                    <span className="w-2 h-2 bg-[#C89F9F] rounded-full"></span>
                    If in crisis, call 911 or the Mental Health Crisis Lines
                    provided below.
                  </span>
                  <br />
                  <span className="font-light text-[#4A5A5C]">
                    The LifeLine Canada Foundation is not a crisis hotline.
                    Following are some international crisis helpline or hotline
                    information.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Elevated card design */}
          <div className=" relative flex justify-center lg:justify-end">
            <div className="sm:w-[500px] relative transform hover:scale-[1.02] transition-transform duration-700">
              {/* Layered shadows for depth */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C1B1A1]/20 to-[#A6B4AA]/20 rounded-[3rem] blur-2xl"></div>
              <div className="absolute -inset-2 bg-white/40 rounded-[2.5rem] blur-xl"></div>

              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-4 shadow-2xl">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-[2.5rem] shadow-inner"></div>

                {/* Image container with soft gradient border */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C89F9F]/10 to-transparent z-10"></div>
                  <img
                    src="/assets/CrisisCenter/heart-earth-globe-e1686616467774-400x319.jpg"
                    alt="international Crisis Centres"
                    className="w-96 h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCrisisCentres;
