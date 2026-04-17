import React from 'react';
import { Heart, Shield } from 'lucide-react';

const CanadianCrisisCentres: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f5edf7] via-white to-[#e8dceb]">
      {/* Animated Background Elements - Purple calming colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#C77DDF]/10 to-[#5f2d85]/10 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#5f2d85]/5 to-transparent"></div>
      </div>

      {/* Floating Orbs - Purple calming colors */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-xl animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-xl animate-float-delayed hidden md:block"></div>

      <div className="relative top-10 sm:top-0 max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content - shows first on mobile (top) */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-1 w-full">
            {/* Main Heading with Purple Gradient Animation */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="!text-4xl sm:!text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Canadian Crisis Centres
                </span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-full animate-expandWidth"></div>
            </div>

            {/* Content Cards */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Highlight box with subtle elegance */}
              <div className="group relative !bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85] animate-slideInUp">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <p className="text-[#4A5A5C] text-base sm:text-lg leading-relaxed">
                    <span className="inline-flex items-center gap-3 text-[#2A3B3C] font-medium mb-2">
                      <span className="w-2 h-2 bg-[#5f2d85] rounded-full"></span>
                      Canada's 988 hotline
                    </span>
                    <br />
                    <span className="font-light text-[#4A5A5C]">
                      gives people access to suicide prevention services via
                      call or text.
                    </span>
                  </p>
                </div>
              </div>

              {/* Information Card */}
              <div className="!bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-100 hover:border-[#C77DDF] transition-all duration-300 animate-slideInUp">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#5f2d85] to-[#C77DDF] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      People in every province and territory who are
                      experiencing a mental health crisis and need immediate,
                      real-time support can use the three-digit number. Similar
                      to 911 for accessing fire, police and medical emergencies,
                      988: Suicide Crisis Helpline is a short, easy-to-remember
                      number to get a quick response from coast to coast to
                      coast, 24/7 and free of charge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note Card */}
              <div className="bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-[#5f2d85]/30 animate-slideInUp">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg !text-[#5f2d85] mb-1 sm:mb-2">
                      Service Information
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">
                      Calls and texts to 988 will be directed to a network of
                      partners in communities across the country offering
                      suicide prevention services such as counselling. The 988
                      service is federally funded and available in English and
                      French.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - shows second on mobile (bottom) */}
          <div className="relative animate-slideInRight w-full order-2 lg:order-2">
            {/* Decorative elements - Purple calming colors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-3xl hidden md:block"></div>

            {/* Main image container with 3D hover effect */}
            <div className="relative group perspective max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="assets/CrisisCenter/canadaHeart-300x272.webp"
                  alt="Canadian Crisis Centres"
                  className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/50 group-hover:border-white/80 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }       
        .animate-slideInRight {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }
       
       
        .perspective {
          perspective: 2000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .group-hover\\:rotate-y-12 {
          transition: transform 0.7s;
        }
        .group:hover .group-hover\\:rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
};

export default CanadianCrisisCentres;
