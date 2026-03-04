import React from 'react';
import contactImage from '../../assets/contact-us-800x322.png';
const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f4fe] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-pink-200/10 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                ✦ GET IN TOUCH ✦
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700">
                Contact
              </span>
              <br />
              <span className="text-gray-800 relative">
                Us
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
              </span>
            </h1>

            {/* Description with enhanced typography */}
            <div className="space-y-6 text-gray-700">
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-2xl text-purple-300 opacity-30">
                  "
                </div>
                <p className="text-lg md:text-xl leading-relaxed italic font-light pl-4">
                  For non crisis questions and comments or to contact The
                  LifeLine Canada Foundation about collaborating please use the
                  contact form below.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed bg-purple-50/50 p-5 rounded-xl border border-purple-100">
                <span className="font-semibold text-purple-600">
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
            </div>

            {/* Links - Simple Mobile Responsive */}
            <div className="space-y-4 pt-4">
              {/* First Link */}
              <div className="relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1.5 w-1 h-5 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></span>
                <p className="text-gray-700 text-sm md:text-base">
                  For complete details of TLC's Companion Paws program and
                  process please see:{' '}
                  <a
                    href="https://companionpaws.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block sm:inline mt-1 sm:mt-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 underline decoration-purple-300 break-words"
                  >
                    CompanionPaws.ca
                  </a>
                </p>
              </div>

              {/* Second Link */}
              <div className="relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1.5 w-1 h-5 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></span>
                <p className="text-gray-700 text-sm md:text-base">
                  For crisis support, please click{' '}
                  <a
                    href="#"
                    className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 underline decoration-pink-300"
                  >
                    here
                  </a>{' '}
                  to contact our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeInRight">
            {/* Image with modern styling */}
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={contactImage}
                    alt="Contact Illustration"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
