import { HandCoins, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomepageCallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#e6d9f0] via-[#d6c4e6] to-[#c2afd9] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-56 md:w-80 h-56 md:h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl font-bold bg-[#5f2d85] bg-clip-text text-transparent mb-3 md:mb-4 px-2">
            Make a Difference Today
          </h2>
          <p className="!text-[#5f2d85]/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Your support and involvement can change lives. Join us in our
            mission.
          </p>
        </div>

        {/* Two Cards Grid - Mobile optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto px-2">
          {/* Contribution Card */}
          <div className="group relative !bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-fuchsia-400/5 to-purple-400/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon - smaller on mobile */}
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-full bg-[#5f2d85] text-white mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
                <HandCoins size={24} className="md:w-10 md:h-10" />
              </div>

              {/* Title - smaller on mobile */}
              <h3 className="!text-lg sm:!text-xl md:!text-2xl font-bold !text-[#5f2d85] mb-2 md:mb-3 text-center md:text-left">
                Make a Contribution
              </h3>

              {/* Description */}
              <p className="!text-[#5f2d85]/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center md:text-left">
                Every contribution helps us reach more people with life-saving
                mental health resources
              </p>

              {/* Link - Matching View More Button Style */}
              <div className="relative inline-flex w-full justify-center">
                <Link
                  to="/contribute"
                  className="relative px-8 md:px-10 py-3 md:py-4 !bg-[#5f2d85] hover:!bg-[#5f2d85] !text-white !text-sm md:!text-base font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
                >
                  <span>CONTRIBUTE</span>
                  <ArrowRight
                    size={18}
                    className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 text-white"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Get Involved Card */}
          <div className="group relative !bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-fuchsia-400/5 to-purple-400/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon - smaller on mobile */}
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-full bg-[#5f2d85] text-white mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                <Heart size={24} className="md:w-10 md:h-10" />
              </div>

              {/* Title - smaller on mobile */}
              <h3 className="!text-lg sm:!text-xl md:!text-2xl font-bold !text-[#5f2d85] mb-2 md:mb-3 text-center md:text-left">
                Get Involved
              </h3>

              {/* Description */}
              <p className="!text-[#5f2d85]/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center md:text-left">
                Volunteers like you help us make mental health resources
                accessible to everyone
              </p>

              {/* Link - Matching View More Button Style */}
              <div className="relative inline-flex w-full justify-center">
                <Link
                  to="/volunteers"
                  className="relative px-8 md:px-10 py-3 md:py-4 !bg-[#5f2d85] hover:!bg-[#5f2d85] !text-white !text-sm md:!text-base font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
                >
                  <span>VOLUNTEER</span>
                  <ArrowRight
                    size={18}
                    className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200 text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative text - mobile optimized */}
        <div className="text-center mt-10 md:mt-16">
          <p className="!text-[#5f2d85]/60 text-xs sm:text-sm flex items-center justify-center gap-1 md:gap-2 px-2">
            <Sparkles size={12} className="md:w-4 md:h-4 animate-pulse" />
            <span>Every contribution counts. Every volunteer matters.</span>
            <Sparkles size={12} className="md:w-4 md:h-4 animate-pulse" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageCallToAction;
