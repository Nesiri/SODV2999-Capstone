
import { Heart } from 'lucide-react';
import EmailImage from '../../assets/Email.jpg';
import { Link } from 'react-router-dom';
import AboutUsBackground from '../Background/AboutUsBackground';

const EmailSupport = () => {
  return (
    <AboutUsBackground>
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20 lg:py-28 z-10">
        {/* Section header badge */}
        <div className="flex justify-center md:justify-start mb-6 sm:mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-200 shadow-md">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 fill-purple-500" />
            <span className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              ✦ WE'RE HERE TO HELP ✦
            </span>
          </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          {/* LEFT CONTENT - Elevated Card with Minimal Elevation */}
          <div className="animate-slideInLeft h-full order-2 md:order-1">
            <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-2xl sm:rounded-3xl shadow-lg border border-purple-100 p-6 sm:p-8 md:p-10 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 sm:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700">
                  Email
                </span>
                <br />
                <span className="text-gray-800 relative">
                  Support
                  <span className="absolute -bottom-2 left-0 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></span>
                </span>
              </h1>

              <div className="prose prose-sm sm:prose-lg max-w-none flex-grow">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                  <span className="font-semibold text-purple-700">
                    The LifeLine Canada Foundation (TLC)
                  </span>{' '}
                  is a registered non-profit committed to the prevention of
                  suicide and positive mental health in Canada and Worldwide and
                  has made work in this area a top priority. We envision a country
                  where suicide is a rare event, where people are nurtured and
                  supported, where individuals and families are aware of the risk
                  factors for suicide and actively seek help from accessible,
                  effective community resources.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-200">
                  <p className="text-gray-700 text-sm sm:text-base">
                    <span className="italic text-purple-600 font-medium">Non-crisis</span>{' '}
                    questions and comments or to contact The LifeLine Canada
                    Foundation about collaborating please{' '}
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900 font-semibold underline decoration-2 decoration-purple-300 hover:decoration-purple-500 transition-all duration-300"
                    >
                      click here
                      <span className="text-base sm:text-lg transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - Perfectly Aligned with Mobile Optimization */}
          <div className="animate-float flex items-center h-full order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full group">
              {/* Background glow effect - reduced for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-purple-500 rounded-2xl sm:rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white to-purple-50/50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] shadow-lg border border-purple-200 transform group-hover:scale-105 transition-all duration-500 w-full flex justify-center items-center">
                <img 
                  src={EmailImage} 
                  className='w-full h-auto max-w-xs sm:max-w-md md:max-w-full object-contain' 
                  alt="Email support" 
                />
                {/* Decorative elements - adjusted for mobile */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-purple-200 to-purple-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500 delay-100"></div>

                {/* Small floating hearts - hidden on very small screens */}
                <Heart className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-300 fill-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-5px] hidden sm:block" />
                <Heart className="absolute bottom-0 -left-4 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 text-purple-300 fill-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform group-hover:translate-x-[5px] hidden sm:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          opacity: 0;
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        /* Smooth transitions for all devices */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </AboutUsBackground>
  );
};

export default EmailSupport;