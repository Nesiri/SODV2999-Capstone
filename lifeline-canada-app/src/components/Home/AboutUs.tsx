import React from 'react';
import aboutImage from '../../assets/about-image.jpg';
import { NavLink } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-b from-[#ffe9de] to-[#f7dfd1] font-sans antialiased overflow-hidden">
      {/* Soft organic elements - adjusted to match peach palette */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#e1b7a5]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#d6afa0]/30 rounded-full blur-3xl"></div>

      {/* Subtle texture line - softened */}
      <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b2968a]/10 to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        {/* Decorative heading accent - warmed to match peach tones */}
        <div className="flex items-center gap-4 mb-12 lg:mb-16">
          <div className="h-px w-16 bg-[#c9a48b]"></div>
          <span className="text-sm font-medium tracking-[0.3em] text-[#b07f64] uppercase">
            — Our story
          </span>
          <div className="h-px flex-1 bg-[#c9a48b]/30"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-24">
          {/* Left column - refined typography with warm tones */}
          <div className="flex-1 space-y-16">
            {/* About Us intro */}
            <div className="space-y-8">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-[#4d3a32] leading-[0.95]">
                About Us
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-[#6b5146] leading-relaxed font-light">
                  The LifeLine Canada Foundation (or TLC) is a registered
                  nonprofit, committed to positive mental health and suicide
                  prevention & awareness and is constantly developing new
                  initiatives in support of these goals.
                </p>
              </div>
            </div>

            {/* Important distinction card - warm cream background */}
            <div className="max-w-xl">
              <div className="bg-[#fff9f5] rounded-[2rem] p-10 shadow-[0_40px_40px_-30px_rgba(160,100,70,0.15)] border border-[#f5e1d6]/80">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c28463] mt-3"></div>
                  <p className="text-lg text-[#624b40] leading-relaxed">
                    <span className="font-medium text-[#7b5a4b]">
                      The LifeLine Canada Foundation is not a crisis hotline.
                    </span>
                  </p>
                </div>

                <div className="pl-5 space-y-4">
                  <p className="text-base text-[#7a6054]">
                    If in Crisis, call or text{' '}
                    <span className="text-[#b36844] font-medium text-lg">
                      988
                    </span>{' '}
                    for Canada's suicide prevention hotline.
                  </p>

                  <p className="text-base text-[#7a6054]">
                    If you or someone you know is in immediate danger, call{' '}
                    <span className="text-[#b36844] font-medium text-lg">
                      911
                    </span>
                    .
                  </p>

                  <NavLink
                    to="/incrisisneedhelp"
                    className={({ isActive }) =>
                      `inline-flex items-center gap-2 text-[#b36844] font-medium group text-base border-b border-dotted border-[#dbb8a8] hover:border-solid hover:border-[#9c6b53] transition-all ${isActive ? 'border-solid border-[#9c6b53]' : ''}`
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
                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#b36844]">
                  Mission
                </h2>
                <div className="h-px flex-1 bg-[#e2cbbd]"></div>
              </div>

              <p className="text-xl md:text-2xl text-[#6b5146] leading-relaxed font-light">
                To aid in suicide reduction across Canada by raising awareness
                of risk factors, delivering programs for positive mental health
                development, providing access to available resource options, and
                promoting local programs to build mental health resilience for
                all.
              </p>

              {/* Decorative element - warmed */}
              <div className="flex gap-2 pt-4">
                <span className="w-2 h-2 rounded-full bg-[#c9a48b]"></span>
                <span className="w-2 h-2 rounded-full bg-[#c9a48b]/60"></span>
                <span className="w-2 h-2 rounded-full bg-[#c9a48b]/30"></span>
              </div>
            </div>
          </div>

          {/* Right column - artistic image treatment */}
          <div className="flex-1 lg:mt-16">
            <div className="sticky top-24">
              {/* Framed image with depth */}
              <div className="relative">
                {/* Background orbs - warmed */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#c28463]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#4d3a32]/10 rounded-full blur-2xl"></div>

                {/* Main image container */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[16/12] shadow-2xl">
                  {/* Artistic gradient overlay - warmed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4d3a32]/40 via-transparent to-[#c28463]/10 mix-blend-multiply z-10"></div>

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

                {/* Floating stat card - warmed */}
                <div className="absolute -bottom-5 -right-5 bg-[#fff9f5] px-6 py-4 rounded-xl shadow-xl border border-[#f5e1d6]/80">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-serif text-[#c28463]">
                      2010
                    </div>
                    <div className="text-xs text-[#8d6f61] font-light">
                      founded
                    </div>
                  </div>
                </div>

                {/* Trust badge - warmed */}
                <div className="absolute -top-10 -left-4 bg-[#fff9f5] px-5 py-3 rounded-full shadow-lg border border-[#f5e1d6]/80">
                  <span className="text-xs font-medium text-[#624b40] tracking-wide">
                    🇨🇦 Registered Nonprofit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal footer with stats - warmed */}
        <div className="mt-24 pt-12 border-t border-[#e2cbbd]/50">
          <div className="flex flex-wrap justify-between items-center text-xs text-[#b2968a] tracking-wide">
            <span className="font-serif text-base text-[#c28463]">TLC</span>
            <span>Mental health for all Canadians</span>
            <span className="border border-[#e2cbbd] px-4 py-2 rounded-full text-[#624b40]">
              since 2010
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
