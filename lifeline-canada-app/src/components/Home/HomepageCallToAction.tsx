import {
  HandCoins,
  Heart,
  Sparkles,
  Gift,
  Users,
  ArrowRight,
} from 'lucide-react';

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 bg-clip-text text-transparent mb-3 md:mb-4 px-2">
            Make a Difference Today
          </h2>
          <p className="text-purple-700/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Your support and involvement can change lives. Join us in our
            mission.
          </p>
        </div>

        {/* Two Cards Grid - Mobile optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto px-2">
          {/* Contribution Card */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-fuchsia-400/5 to-pink-400/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon - smaller on mobile */}
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-700 text-white mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3">
                <HandCoins size={24} className="md:w-10 md:h-10" />
              </div>

              {/* Title - smaller on mobile */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 mb-2 md:mb-3 text-center md:text-left">
                Make a Contribution
              </h3>

              {/* Description */}
              <p className="text-purple-600/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center md:text-left">
                Your support helps us reach more people with mental health
                resources
              </p>

              {/* Features - stacked on mobile */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-purple-600 text-xs sm:text-sm">
                  <Gift
                    size={14}
                    className="md:w-4 md:h-4 text-purple-500 flex-shrink-0"
                  />
                  <span className="text-left">
                    One-time or monthly donations
                  </span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 text-xs sm:text-sm">
                  <Heart
                    size={14}
                    className="md:w-4 md:h-4 text-purple-500 flex-shrink-0"
                  />
                  <span className="text-left">100% goes to programs</span>
                </div>
              </div>

              {/* Button - responsive */}
              <button className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-semibold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm md:text-base">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  CONTRIBUTE NOW
                  <ArrowRight
                    size={16}
                    className="md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Get Involved Card */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-fuchsia-400/5 to-pink-400/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon - smaller on mobile */}
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-700 text-white mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                <Heart size={24} className="md:w-10 md:h-10" />
              </div>

              {/* Title - smaller on mobile */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 mb-2 md:mb-3 text-center md:text-left">
                Get Involved
              </h3>

              {/* Description */}
              <p className="text-purple-600/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center md:text-left">
                Volunteer your time and skills to support our community
              </p>

              {/* Features - stacked on mobile */}
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-purple-600 text-xs sm:text-sm">
                  <Users
                    size={14}
                    className="md:w-4 md:h-4 text-purple-500 flex-shrink-0"
                  />
                  <span className="text-left">Join our volunteer team</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 text-xs sm:text-sm">
                  <Sparkles
                    size={14}
                    className="md:w-4 md:h-4 text-purple-500 flex-shrink-0"
                  />
                  <span className="text-left">Make a real impact</span>
                </div>
              </div>

              {/* Button - responsive */}
              <button className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn text-sm md:text-base">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VOLUNTEER NOW
                  <ArrowRight
                    size={16}
                    className="md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom decorative text - mobile optimized */}
        <div className="text-center mt-10 md:mt-16">
          <p className="text-purple-600/60 text-xs sm:text-sm flex items-center justify-center gap-1 md:gap-2 px-2">
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
