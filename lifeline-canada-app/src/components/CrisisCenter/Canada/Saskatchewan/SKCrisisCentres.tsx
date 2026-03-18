import React from 'react';

const SKCrisisCentres: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e9e3ea] via-[#f2ecf3] to-[#e0d8e2] py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4a6fa5]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Text Container */}
          <div className="flex-1 text-center sm:text-left space-y-3 sm:space-y-4">
            <div className="inline-block sm:block mx-auto sm:mx-0">
              <span className="hidden sm:inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/40 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-[#4a6fa5] border border-white/60 shadow-sm mb-2 sm:mb-3">
                🇨🇦 Saskatchewan
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight text-gray-900">
              <span className="block">Saskatchewan</span>
              <span className="block text-transparent bg-gradient-to-r from-[#4a6fa5] to-[#6b8cbc] bg-clip-text text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 sm:mt-2">
                Crisis Centres
              </span>
            </h1>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0">
            <div className="relative group w-fit">
              {/* Animated glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#4a6fa5]/20 via-[#6b8cbc]/20 to-[#4a6fa5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse"></div>

              {/* Image frame with gradient border */}
              <div className="relative p-1 bg-gradient-to-r from-[#4a6fa5]/30 to-[#6b8cbc]/30 rounded-2xl shadow-2xl">
                <div className="overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm">
                  <img
                    src="assets/flags/sath_1024x1024-300x149.webp"
                    alt="Saskatchewan Flag"
                    className="w-70 xs:w-70 sm:w-80 md:w-96 lg:w-110 xl:w-130 h-auto rounded-xl transform group-hover:scale-110 transition duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#4a6fa5]/30 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#4a6fa5]/30 rounded-bl-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SKCrisisCentres;
