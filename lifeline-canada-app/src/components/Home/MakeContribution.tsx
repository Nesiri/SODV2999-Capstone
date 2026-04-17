import React from 'react';
import contributionImage from '../../assets/contribution-800x419.jpg';
import { Heart, Shield } from 'lucide-react';

import { Link } from 'react-router-dom';

const MakeContribution: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f5edf7] via-white to-[#e8dceb] overflow-hidden">
      {/* Decorative background elements - using your purple colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5f2d85]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5f2d85]/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-[#C77DDF]/5 rounded-full blur-3xl animate-pulse [animation-delay:3s]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 !bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5f2d85]/30 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5f2d85] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5f2d85]"></span>
              </span>
              <span className="text-sm font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5f2d85] to-[#5f2d85]">
                ✦ YOUR SUPPORT MATTERS ✦
              </span>
            </div>

            <h1 className="!text-4xl   font-black leading-tight">
              <span className="text-transparent bg-clip-text !bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85]">
                Make a Contribution
              </span>
            </h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:!text-xl leading-relaxed">
                <span className="text-2xl !text-[#5f2d85] mr-1">🌟</span>
                The LifeLine Canada Foundation's mission is to open minds, save
                lives and restore hope. Whether it be through the information
                provided on this website, through the LifeLine App, or through
                any of our initiatives like Companion Paws Canada, we are
                constantly looking for ways to reduce the suicide rate and
                minimize the consequences of suicidal behavior.
              </p>

              <p className="text-lg md:!text-xl leading-relaxed bg-[#f5edf7]/50 p-6 rounded-2xl border border-[#5f2d85]/20">
                <span className="text-2xl !text-[#5f2d85] mr-1">💝</span>A gift
                to The LifeLine Canada Foundation helps fund our mission to save
                lives and give hope to those affected by suicide, depression,
                anxiety and PTSD. If you have questions about your gift or about
                other ways in which one could contribute, please don't hesitate
                to{' '}
                <Link
                  to="/contact-us"
                  className="font-normal text-transparent bg-clip-text !bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] hover:from-[#5f2d85] hover:to-[#5f2d85] transition-all duration-300 underline decoration-[#5f2d85]/50"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5f2d85] via-[#5f2d85] to-[#5f2d85] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />

              {/* Image container */}
              <div className="relative !bg-white/80 backdrop-blur-sm p-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={contributionImage}
                    alt="Hands holding flowers"
                    className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5f2d85]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] text-white px-4 py-2 rounded-full text-sm font-normal shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Make a Difference ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Message with Payment Methods */}
      <div className="relative bg-gradient-to-r from-[#5f2d85]/5 via-gray-900/5 to-[#5f2d85]/5 backdrop-blur-sm border-t border-[#5f2d85]/20 py-12 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#5f2d85]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#5f2d85]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          {/* Thank you message */}
          <div className="relative">
            <div className="absolute -top-3 left-0 !text-4xl !text-[#5f2d85]/30 opacity-30">
              "
            </div>
            <p className="!text-xl md:text-2xl text-gray-700 italic font-light leading-relaxed px-8">
              Thank you very much for considering donating to the LifeLine
              Canada Foundation. This Foundation gets funded 100% by the
              services we offer, fundraising we do and by the generosity of
              people that choose to contribute, like yourself.
            </p>
            <div className="absolute -bottom-3 right-0 !text-4xl !text-[#5f2d85]/30 opacity-30 rotate-180">
              "
            </div>
          </div>

          {/* Secure Payment Badge */}
          <div className="inline-flex items-center gap-2 !bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50 shadow-lg mx-auto">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-600">Secure Payment</span>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            {/* Donation Button */}
            <div className="pt-8">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#5f2d85] to-[#5f2d85] hover:from-[#7a0088] hover:to-[#a355b8] text-white px-10 py-5 rounded-2xl !text-xl font-bold shadow-xl shadow-[#5f2d85]/30 hover:shadow-2xl hover:shadow-[#5f2d85]/40 transition-all duration-300 hover:scale-105">
                <Heart className="w-6 h-6 fill-white/20 group-hover:scale-110 transition-transform" />
                <span className="relative !text-white z-10">
                  Make a Donation
                </span>
                <span className="relative !text-white z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
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

export default MakeContribution;
