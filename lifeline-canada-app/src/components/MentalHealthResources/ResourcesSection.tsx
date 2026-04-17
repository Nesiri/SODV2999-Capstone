// components/ResourcesSection.tsx
import { useEffect, useRef } from 'react';
import { Phone, Heart, Shield, AlertCircle, ExternalLink } from 'lucide-react';
import resourceImg from '../../assets/Signposts-800x604.jpg';
import { Link } from 'react-router-dom';

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

      <div
        ref={sectionRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-32 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 w-full">
            {/* Main Heading with Purple Gradient Animation */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Resources
                </span>
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-full animate-expandWidth"></div>
            </div>

            {/* Content Cards */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Crisis Alert Card - Darker purple for urgency */}
              <div
                className="group relative !bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#5f2d85] animate-slideInUp"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85]/5 to-[#5f2d85]/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-lg sm:rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:!text-xl font-bold !text-[#5f2d85] mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2 flex-wrap">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 !text-[#5f2d85]" />
                      <span>In Crisis? Help is Available 24/7</span>
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
                      Call or Text{' '}
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] text-white px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-base sm:text-lg md:!text-xl font-bold shadow-lg">
                        988
                      </span>{' '}
                      Canada's suicide prevention hotline
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      If you or someone you know is in immediate danger,{' '}
                      <span className="font-bold !text-[#5f2d85]">
                        call 911 right now
                      </span>
                    </p>
                    <Link
                      to="/incrisisneedhelp"
                      className="inline-flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base !text-[#5f2d85] font-medium group-hover:gap-2 sm:group-hover:gap-3 transition-all"
                    >
                      Find local crisis support
                    </Link>
                  </div>
                </div>
              </div>

              {/* Information Card - Lighter purple */}
              <div
                className="!bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-100 hover:border-[#C77DDF] transition-all duration-300 animate-slideInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#5f2d85] to-[#C77DDF] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
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

              {/* Important Note Card - Medium purple gradient */}
              <div
                className="bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-[#5f2d85]/30 animate-slideInUp"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#5f2d85] to-[#5f2d85] p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg !text-[#5f2d85] mb-1 sm:mb-2">
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
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 !text-[#5f2d85]" />
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

          {/* Right Image */}
          <div
            className="relative sm:top-10 animate-slideInRight w-full order-1 lg:order-2 -mt-8 sm:-mt-6 md:-mt-4 lg:mt-0"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Decorative elements - Purple calming colors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#5f2d85]/10 rounded-full blur-3xl hidden md:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#5f2d85]/10 to-[#C77DDF]/10 rounded-full blur-3xl hidden md:block"></div>

            {/* Main image container with 3D hover effect */}
            <div className="relative group perspective max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={resourceImg}
                  alt="Mental health resource directions sign"
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
        }        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
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

export default ResourcesSection;
