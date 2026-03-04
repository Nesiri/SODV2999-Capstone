import React from 'react';
import heroImage from '../../assets/Mother-and-daughter-talking-seriously.jpg';

const MentalHealthHero: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .animate-blob {
            animation: blob 7s infinite;
            opacity: 0.1;
          }
          
          .hero-image {
            max-width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>

      <section className="relative top-20 sm:top-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 md:py-24 overflow-hidden min-h-screen sm:min-h-0 flex items-center">
        {/* Decorative background elements - adjusted for mobile */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 sm:opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 sm:opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
            {/* Left Content - Mobile optimized */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-bold text-gray-900 leading-tight mb-3 sm:mb-6 px-2 sm:px-0">
                {/* First line – SMALL on mobile */}
                <span className="block text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                  Mental Health Resources At
                </span>

                {/* Second line – Bigger + Gradient */}
                <span
                  className="block sm:inline
                     text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl
                     text-transparent bg-clip-text bg-gradient-to-r
                     from-blue-600 to-purple-600"
                >
                  Your Fingertips
                </span>
              </h1>

              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                <p className="leading-relaxed">
                  Do you or someone you care about struggle with thoughts of
                  suicide or other mental health issues? We're here to help. The
                  guides, tools and resources throughout this site represent a
                  compilation of resources from various sources across the Globe
                  as noted.
                </p>

                <p className="leading-relaxed border-l-4 border-blue-500 pl-3 sm:pl-4 italic text-xs xs:text-sm sm:text-base md:text-lg bg-blue-50/50 p-3 sm:p-4 rounded-r-lg">
                  When clicking 3rd party links, you will be redirected to
                  websites not affiliated to, but with the underlying support of
                  The LifeLine Canada Foundation.
                </p>
              </div>
            </div>

            {/* Right Image - Mobile optimized */}
            <div className="flex-1 relative order-1 lg:order-2 w-full mb-6 lg:mb-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-full">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-2xl sm:blur-3xl opacity-10 sm:opacity-20 animate-pulse"></div>

                {/* Image container with floating animation */}
                <div className="relative animate-float">
                  <img
                    src={heroImage}
                    alt="Mental health support illustration showing connection and care"
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hero-image"
                    loading="eager"
                  />

                  {/* Decorative dots - hidden on very small screens */}
                  <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500 rounded-full opacity-10"></div>
                  <div className="hidden sm:block absolute -top-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500 rounded-full opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentalHealthHero;
