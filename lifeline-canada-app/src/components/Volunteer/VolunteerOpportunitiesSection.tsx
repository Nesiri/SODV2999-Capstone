import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerOpportunitiesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8f5ff] via-white to-[#f5f0ff] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative background elements - consistent purple */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Content - full width */}
        <div className="space-y-8 animate-fadeInUp">
          {/* Title with consistent purple gradient */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-lg shadow-purple-500/5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                ⚡ JOIN OUR TEAM ⚡
              </span>
            </div>

            <h2 className="!text-2xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700">
                  Volunteering with TLC
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-300/30 via-purple-300/30 to-purple-300/30 blur-sm"></span>
              </span>
              <br />
              <span className="text-gray-800 relative">
                is rewarding and fun!
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              </span>
            </h2>
          </div>

          {/* Vision statement with quote styling - consistent purple */}
          <div className="relative pl-6 border-l-4 border-purple-400 max-w-4xl">
            <div className="absolute -left-2 top-0 text-4xl text-purple-300 opacity-50">
              "
            </div>
            <p className="text-lg md:text-xl text-gray-600 italic font-light leading-relaxed">
              To continue to lower the risk of suicide to where it is a rare
              event across the country and to build mental health resilience for
              all.
            </p>
            <div className="absolute -right-2 bottom-0 text-4xl text-purple-300 opacity-50">
              "
            </div>
          </div>

          {/* Main description with beautiful typography */}
          <div className="space-y-6 text-gray-700 max-w-5xl">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-2xl text-purple-500 mr-1">🌟</span>
              We offer enthusiastic volunteers an opportunity to make a{' '}
              <span className="relative inline-block group/word">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  significant difference
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-purple-600 scale-x-0 group-hover/word:scale-x-100 transition-transform duration-300"></span>
              </span>{' '}
              in the lives of Canadians in keeping with our vision. It is also
              an opportunity to gain{' '}
              <span className="font-bold text-gray-900">
                important experience
              </span>{' '}
              in specific vocational areas and/or with the non-profit sector.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-2xl text-purple-500 mr-1">✨</span>
              We have many{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                exciting volunteer positions
              </span>
              , and we are happy to tailor your talents and interests to our
              needs. If you have energy to offer, and want to explore your fit
              with TLC, don't hesitate to get in touch!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('volunteer-form')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <span className="relative z-10">Apply as Volunteer</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <Link
              to="mailto:volunteers@thelifelinecanada.ca"
              className="group inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>volunteers@thelifelinecanada.ca</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                📧
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default VolunteerOpportunitiesSection;