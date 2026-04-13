// pages/AboutUs.tsx
import React from 'react';
import aboutImage from '../../assets/new-about-us.png';
import { NavLink } from 'react-router-dom';
import AboutUsBackground from '../Background/AboutUsBackground';

const AboutUs: React.FC = () => {
  return (
    <AboutUsBackground>
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">
        {/* Top Section - Two Column Layout like Contribute */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#B266C9]/30 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B266C9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#89009B]"></span>
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] to-[#B266C9]">
                ✦ OUR STORY ✦
              </span>
            </div>

            {/* Heading - Single line like Contribute */}
            <h1 className="!text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89009B] via-[#B266C9] to-[#89009B]">
                About Us
              </span>
            </h1>

            {/* Description paragraphs like Contribute */}
            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-2xl text-[#89009B] mr-1">🌟</span>
                The LifeLine Canada Foundation (or TLC) is a registered
                nonprofit, committed to positive mental health and suicide
                prevention & awareness and is constantly developing new
                initiatives in support of these goals.
              </p>

              <div className="bg-[#f5edf7]/50 p-6 rounded-2xl border border-[#B266C9]/20">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="text-2xl text-[#B266C9] mr-1">💜</span>
                  The LifeLine Canada Foundation is{' '}
                  <span className="font-semibold text-[#89009B]">
                    not a crisis hotline
                  </span>
                  . If in Crisis, call or text{' '}
                  <span className="font-bold text-[#89009B] text-xl md:text-2xl">
                    988
                  </span>{' '}
                  for Canada's suicide prevention hotline. If you or someone you
                  know is in immediate danger, call{' '}
                  <span className="font-bold text-[#89009B] text-xl md:text-2xl">
                    911
                  </span>
                  .
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-2xl text-[#89009B] mr-1">✨</span>
                <span className="font-semibold text-[#89009B]">
                  Our Mission:
                </span>{' '}
                To aid in suicide reduction across Canada by raising awareness
                of risk factors, delivering programs for positive mental health
                development, providing access to available resource options, and
                promoting local programs to build mental health resilience for
                all.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-2xl text-[#B266C9] mr-1">📞</span>
                <NavLink
                  to="/incrisisneedhelp"
                  className="font-semibold text-transparent !bg-clip-text bg-[#89009B] hover:from-[#B266C9] hover:to-[#89009B] transition-all duration-300 underline decoration-[#B266C9]/50"
                >
                  See our directory of mental health crisis support
                </NavLink>
              </p>
            </div>
          </div>

          {/* Right Image - Like Contribute */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#89009B] via-[#B266C9] to-[#89009B] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={aboutImage}
                    alt="Mental wellness and hope"
                    className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#89009B]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#89009B] to-[#B266C9] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Hope & Healing ✦
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
    </AboutUsBackground>
  );
};

export default AboutUs;
