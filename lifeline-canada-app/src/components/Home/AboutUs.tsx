import React from 'react';
import aboutImage from '../../assets/about-image.jpg';
import { NavLink } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-b from-[#fbf7f2] to-[#f5efe8] font-sans antialiased overflow-hidden">
      {/* Soft organic elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#c7d8d1]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#e6d9ce]/30 rounded-full blur-3xl"></div>

      {/* Subtle texture line */}
      <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c4b5a5]/10 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Decorative heading accent */}
        <div className="flex items-center gap-4 mb-12 lg:mb-16">
          <div className="h-px w-16 bg-[#c9b6a4]"></div>
          <span className="text-sm font-medium tracking-[0.3em] text-[#b2957b] uppercase">
            — Our story
          </span>
          <div className="h-px flex-1 bg-[#c9b6a4]/30"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-24">
          {/* Left column - refined typography */}
          <div className="flex-1 space-y-16">
            {/* About Us intro */}
            <div className="space-y-8">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#1f2c32] leading-[0.95]">
                About Us
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-[#4a5c66] leading-relaxed font-light">
                  The LifeLine Canada Foundation (or TLC) is a registered
                  nonprofit, committed to positive mental health and suicide
                  prevention & awareness and is constantly developing new
                  initiatives in support of these goals.
                </p>
              </div>
            </div>

            {/* Important distinction card */}
            <div className="max-w-xl">
              <div className="bg-white rounded-[2rem] p-10 shadow-[0_40px_40px_-30px_rgba(0,0,0,0.12)] border border-white/80">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ac8b74] mt-3"></div>
                  <p className="text-lg text-[#3b4f53] leading-relaxed">
                    <span className="font-medium text-[#1e3b4a]">
                      The LifeLine Canada Foundation is not a crisis hotline.
                    </span>
                  </p>
                </div>

                <div className="pl-5 space-y-4">
                  <p className="text-base text-[#5f7480]">
                    If in Crisis, call or text{' '}
                    <span className="text-[#1e3b4a] font-medium text-lg">
                      988
                    </span>{' '}
                    for Canada's suicide prevention hotline.
                  </p>

                  <p className="text-base text-[#5f7480]">
                    If you or someone you know is in immediate danger, call{' '}
                    <span className="text-[#1e3b4a] font-medium text-lg">
                      911
                    </span>
                    .
                  </p>

                  <NavLink
                    to="/in-crisis"
                    className={({ isActive }) =>
                      `inline-flex items-center gap-2 text-[#2b5f6b] font-medium group text-base border-b border-dotted border-[#9fb7c0] hover:border-solid hover:border-[#1a3f48] transition-all ${isActive ? 'border-solid border-[#1a3f48]' : ''}`
                    }
                  >
                    See our directory of mental health crisis support
                    <span className="text-lg group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Mission section */}
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2b4b5a]">
                  Mission
                </h2>
                <div className="h-px flex-1 bg-[#dbd2c8]"></div>
              </div>

              <p className="text-xl md:text-2xl text-[#4a626e] leading-relaxed font-light">
                To aid in suicide reduction across Canada by raising awareness
                of risk factors, delivering programs for positive mental health
                development, providing access to available resource options, and
                promoting local programs to build mental health resilience for
                all.
              </p>

              {/* Decorative element */}
              <div className="flex gap-2 pt-4">
                <span className="w-2 h-2 rounded-full bg-[#c9b6a4]"></span>
                <span className="w-2 h-2 rounded-full bg-[#c9b6a4]/60"></span>
                <span className="w-2 h-2 rounded-full bg-[#c9b6a4]/30"></span>
              </div>
            </div>
          </div>

          {/* Right column - artistic image treatment */}
          <div className="flex-1 lg:mt-16">
            <div className="sticky top-24">
              {/* Framed image with depth */}
              <div className="relative">
                {/* Background orbs */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#ac8b74]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#1f2c32]/10 rounded-full blur-2xl"></div>

                {/* Main image container */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                  {/* Artistic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2c32]/40 via-transparent to-[#ac8b74]/10 mix-blend-multiply z-10"></div>

                  <img
                    src={aboutImage}
                    alt="Peaceful landscape representing mental wellness and hope"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="backdrop-blur-sm bg-black/10 px-5 py-3 rounded-full inline-block border border-white/20">
                      <span className="text-white text-sm font-light tracking-widest">
                        — a moment of calm —
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-5 -right-5 bg-white px-6 py-4 rounded-xl shadow-xl border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-serif text-[#ac8b74]">
                      2010
                    </div>
                    <div className="text-xs text-[#6f8185] font-light">
                      founded
                    </div>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="absolute -top-4 -left-4 bg-white px-5 py-3 rounded-full shadow-lg border border-white/80">
                  <span className="text-xs font-medium text-[#3b4f53] tracking-wide">
                    🇨🇦 Registered Nonprofit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal footer with stats */}
        <div className="mt-24 pt-12 border-t border-[#e2dad2]/50">
          <div className="flex flex-wrap justify-between items-center text-xs text-[#b7c4bd] tracking-wide">
            <span className="font-serif text-base text-[#ac8b74]">TLC</span>
            <span>Mental health for all Canadians</span>
            <span className="border border-[#e2dad2] px-4 py-2 rounded-full">
              since 2010
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
