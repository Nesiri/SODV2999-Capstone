// components/ResourcesSection.tsx
import { useEffect, useRef } from 'react';
import {
  Phone,
  Heart,
  Shield,
  ArrowRight,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import resourceImg from '../../assets/Signposts-800x604.jpg';

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Animated Background Elements - Hidden on mobile, visible on larger screens */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000 hidden md:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-50/20 to-transparent"></div>
      </div>

      {/* Floating Orbs - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-xl animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl animate-float-delayed hidden md:block"></div>

      <div
        ref={sectionRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content - Order changes on mobile */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 w-full">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm border border-purple-100 animate-slideIn">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mental Health Support
              </span>
            </div>

            {/* Main Heading with Gradient Animation */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Resources
                </span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-expandWidth"></div>
            </div>

            {/* Content Cards - Adjusted padding for mobile */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Crisis Alert Card */}
              <div
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200 animate-slideInUp"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-red-500 to-orange-500 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2 flex-wrap">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                      <span>In Crisis? Help is Available 24/7</span>
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
                      Call or Text{' '}
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg">
                        988
                      </span>{' '}
                      — Canada's suicide prevention hotline
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      If you or someone you know is in immediate danger,{' '}
                      <span className="font-bold text-red-600">
                        call 911 right now
                      </span>
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-purple-700 font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all"
                    >
                      Find local crisis support
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Information Card */}
              <div
                className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-100 hover:border-purple-100 transition-all duration-300 animate-slideInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      This site provides information about anxiety, depression
                      and suicide. Online resources alone are not a substitute
                      for professional medical advice, diagnosis or treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note Card */}
              <div
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-purple-100 animate-slideInUp"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2">
                      Important
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">
                      Seek the advice of an appropriately qualified healthcare
                      professional before making decisions about your
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div
                className="pt-4 sm:pt-5 md:pt-6 animate-slideInUp"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 bg-gray-50/80 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-200">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                  <p className="italic leading-relaxed">
                    The guides, tool kits and resources throughout this site
                    represent a compilation of curated suicide prevention
                    resources from various sources around the world. When
                    clicking 3rd party links, you will be redirected to websites
                    not affiliated with, but supported by The LifeLine Canada
                    Foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Order changes on mobile */}
          <div
            className="relative animate-slideInRight w-full order-1 lg:order-2 -mt-8 sm:-mt-6 md:-mt-4 lg:mt-0"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Decorative elements - Hidden on mobile */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl hidden md:block"></div>

            {/* Main image container with 3D hover effect */}
            <div className="relative group perspective max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={resourceImg}
                  alt="Mental health resource directions sign"
                  className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/50 group-hover:border-white/80 transition-all duration-500"
                />

                {/* Floating caption - Hidden on mobile */}
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-purple-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hidden md:block">
                  <p className="text-xs sm:text-sm font-medium text-gray-700">
                    <span className="text-purple-600">✓</span> Verified
                    Resources
                  </p>
                </div>
              </div>
            </div>

            {/* Stats card - Adjusted for mobile */}
            <div className="absolute -left-2 sm:-left-4 md:-left-6 lg:-left-8 bottom-8 sm:bottom-12 md:bottom-16 bg-white/90 backdrop-blur-sm px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl border border-purple-100">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    Support
                  </div>
                </div>
                <div className="w-px h-4 sm:h-5 md:h-6 lg:h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    988
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    Hotline
                  </div>
                </div>
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
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

export default ResourcesSection;
