
import contactImage from '../../assets/contact-us-800x322.png';
import { Link } from 'react-router-dom';
import AboutUsBackground from '../Background/AboutUsBackground';

const ContactSection = () => {
  return (
    <AboutUsBackground>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 lg:py-28 z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Content - Elevated Card with Lower Elevation */}
          <div className="animate-fadeInLeft order-2 lg:order-1 h-full">
            <div className="bg-gradient-to-br from-white via-purple-50/20 to-white rounded-2xl sm:rounded-3xl shadow-sm border border-purple-100 p-6 sm:p-8 lg:p-10 h-full flex flex-col transition-all duration-300 hover:shadow-md">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-200 shadow-sm w-fit mb-6 sm:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 tracking-wide">
                  ✦ GET IN TOUCH ✦
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700">
                  Contact
                </span>
                <br />
                <span className="text-gray-800 relative inline-block">
                  Us
                  <span className="absolute -bottom-2 left-0 w-20 sm:w-24 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></span>
                </span>
              </h1>

              {/* Description */}
              <div className="space-y-5 sm:space-y-6 text-gray-700 flex-grow">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-2xl sm:text-3xl text-purple-300 opacity-30 font-serif">
                    "
                  </div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed italic font-light pl-4 sm:pl-5">
                    For non-crisis questions and comments or to contact The
                    LifeLine Canada Foundation about collaborating, please use the
                    contact form below.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100/30 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-purple-100 transition-all duration-300">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-purple-600">
                      The LifeLine Canada Foundation (TLC)
                    </span>{' '}
                    is a registered non-profit committed to the prevention of
                    suicide and positive mental health in Canada and Worldwide. 
                    We envision a country where suicide is a rare event, where 
                    people are nurtured and supported, where individuals and 
                    families are aware of the risk factors for suicide and 
                    actively seek help from accessible, effective community resources.
                  </p>
                </div>
              </div>

              {/* Link */}
              <div className="space-y-4 pt-6 sm:pt-8 mt-auto">
                <div className="relative pl-6 sm:pl-8 group">
                  <span className="absolute left-0 top-1.5 w-1 h-5 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full group-hover:h-6 transition-all duration-300"></span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    For crisis support, please click{' '}
                    <Link
                      to="/incrisisneedhelp"
                      className="inline-flex items-center gap-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-300 underline decoration-purple-300 hover:decoration-purple-600"
                    >
                      here
                      <span className="text-base sm:text-lg transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>{' '}
                    to contact our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Lower Elevation */}
          <div className="animate-fadeInRight order-1 lg:order-2 flex items-center h-full mb-8 lg:mb-0">
            <div className="relative w-full group">
              {/* Reduced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-3xl blur-md opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

              {/* Image container with minimal shadow */}
              <div className="relative bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-purple-200/50">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={contactImage}
                    alt="Contact Illustration"
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </AboutUsBackground>
  );
};

export default ContactSection;