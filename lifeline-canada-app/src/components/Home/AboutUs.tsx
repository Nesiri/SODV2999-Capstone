// pages/AboutUs.tsx
import React from 'react';
import aboutImage from '../../assets/new-about-us.png';
import { NavLink } from 'react-router-dom';
import AboutUsBackground from '../Background/AboutUsBackground';

const AboutUs: React.FC = () => {
  return (
    <AboutUsBackground>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20 lg:py-28">
        {/* Decorative heading - mobile optimized */}
        <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12 lg:mb-20">
          <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-purple-400" />
          <span className="text-[10px] md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] text-purple-600 uppercase">
            Our story
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-purple-400 to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex-1 space-y-8 md:space-y-12">
            {/* Hero Section - Reduced heading size and side by side */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                <span className="font-serif !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold leading-[1.1] bg-gradient-to-r from-stone-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
                  About
                </span>
                <span className="font-serif !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold leading-[1.1] bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Us
                </span>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-xl md:rounded-2xl blur-lg" />
                <p className="relative !text-sm sm:!text-base md:!text-lg lg:!text-xl text-stone-700 leading-relaxed bg-white/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/60">
                  The LifeLine Canada Foundation (or TLC) is a registered
                  nonprofit, committed to positive mental health and suicide
                  prevention & awareness and is constantly developing new
                  initiatives in support of these goals.
                </p>
              </div>
            </div>

            {/* Crisis Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/60 shadow-xl">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-stone-700 font-semibold text-sm md:text-base">
                    The LifeLine Canada Foundation is <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">not a crisis hotline</span>.
                  </p>
                </div>

                <div className="pl-8 md:pl-10 lg:pl-14 space-y-3 md:space-y-4">
                  <p className="text-stone-600 text-sm md:text-base">
                    If in Crisis, call or text{' '}
                    <span className="text-purple-600 font-bold !text-xl md:!text-2xl inline-block">
                      988
                    </span>{' '}
                    for Canada's suicide prevention hotline.
                  </p>
                  <p className="text-stone-600 text-sm md:text-base">
                    If you or someone you know is in immediate danger, call{' '}
                    <span className="text-purple-600 font-bold !text-xl md:!text-2xl inline-block">
                      911
                    </span>.
                  </p>
                  <NavLink
                    to="/incrisisneedhelp"
                    className="inline-flex items-center gap-1 md:gap-2 text-purple-600 font-semibold group/link hover:gap-2 md:hover:gap-3 transition-all text-sm md:text-base"
                  >
                    <span className="border-b border-purple-200 group-hover/link:border-purple-400 transition-colors">
                      See our directory of mental health crisis support
                    </span>
                    <span className="!text-base md:!text-xl group-hover/link:translate-x-1 transition-transform">→</span>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="!text-base md:!text-xl">✨</span>
                </div>
                <h2 className="font-serif !text-2xl md:!text-4xl lg:!text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-800 bg-clip-text text-transparent">
                  Mission
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-300 to-transparent" />
              </div>
              <p className="!text-sm md:!text-lg lg:!text-xl text-stone-700 leading-relaxed pl-8 md:pl-10 lg:pl-14 border-l-4 border-purple-400 pl-4 md:pl-6">
                To aid in suicide reduction across Canada by raising awareness
                of risk factors, delivering programs for positive mental health
                development, providing access to available resource options, and
                promoting local programs to build mental health resilience for
                all.
              </p>
              <div className="flex gap-2 pl-8 md:pl-10 lg:pl-14">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400" />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-300" />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-200" />
              </div>
            </div>
          </div>

          {/* Right Column - Simplified Image with only "Moment of Calm" */}
          <div className="flex-1 lg:mt-20 mt-8 md:mt-12 lg:mt-20">
            <div className="sticky top-50">
              <div className="relative">
                {/* Background glow - smaller on mobile */}
                <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-40 md:w-60 h-40 md:h-60 bg-gradient-to-bl from-purple-300/30 to-purple-400/20 rounded-full blur-2xl md:blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 w-40 md:w-60 h-40 md:h-60 bg-gradient-to-tr from-pink-300/20 to-purple-300/20 rounded-full blur-2xl md:blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

                {/* Main Image - Simplified, only "Moment of Calm" retained */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl ring-1 ring-white/50">
                  <div className="relative w-full" style={{ minHeight: '400px', maxHeight: '600px' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-stone-900/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-600/20 z-10" />
                    <img
                      src={aboutImage}
                      alt="Mental wellness and hope"
                      className="w-full h-full object-contain md:object-cover"
                      style={{ 
                        maxHeight: '600px',
                        objectPosition: 'center 30%'
                      }}
                    />
                    <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 z-20">
                      <div className="backdrop-blur-md bg-white/20 rounded-full px-3 md:px-5 py-1.5 md:py-2 inline-block border border-white/30">
                        <span className="text-white text-[10px] md:text-xs font-medium tracking-wider">
                          ✨ a moment of calm ✨
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Removed: Founded 2010 and Registered Nonprofit floating cards */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Simplified, removed the requested line */}
        <div className="mt-16 md:mt-20 lg:mt-24 pt-6 md:pt-8 border-t border-purple-200/50">
          {/* Footer content removed as requested */}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </AboutUsBackground>
  );
};

export default AboutUs;