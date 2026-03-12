import React from 'react';
import volunteerImage from '../../assets/Volunteer-800x399.jpg';

const GetInvolvedSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f4fe] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Cool badge with glow */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 tracking-wider">
                ✦ MAKE A DIFFERENCE ✦
              </span>
            </div>

            {/* Headings with stunning text effects */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-700 drop-shadow-lg">
                  Get Involved!
                </span>
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-800">
                <span className="relative inline-block">
                  Change a Life.
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-300/30 via-pink-300/30 to-blue-300/30 blur-sm -z-10"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 blur-sm -z-10"></span>
                </span>
              </h2>
            </div>

            {/* Beautiful paragraph styling */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <span className="text-2xl text-purple-500 font-serif mr-1">
                  ✨
                </span>
                Thank you for your interest in volunteering for{' '}
                <span className="relative inline-block group">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    The LifeLine Canada Foundation
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                . If you'd like to get involved, we are always looking for
                dedicated and committed volunteers for short, long term and task
                specific help. There are many opportunities available.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <span className="text-2xl text-blue-500 font-serif mr-1">
                  💫
                </span>
                You can use the volunteer form below to share more information
                regarding your interests and availability. After submitting the
                form you will receive an email with further information. All
                information gathered is kept confidential and only used by{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  The LifeLine Canada Foundation
                </span>
                .
              </p>
            </div>

            {/* Stylish decorative line */}
            <div className="flex items-center gap-4 pt-4 group">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                VOLUNTEER TODAY
              </span>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-500 blur-md" />

              {/* Image container with glass effect */}
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={volunteerImage}
                    alt="Volunteer Word Cloud"
                    className="w-full max-w-md h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Stylish overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl"></div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
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
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default GetInvolvedSection;
