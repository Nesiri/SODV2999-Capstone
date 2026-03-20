import React from 'react';
import messageCircle from '../../assets/chatIcons/OnlineChat-1.png';
import phone from '../../assets/chatIcons/telephone.png';
import messageSquare from '../../assets/chatIcons/chat-room-icon-7-200x200.png';
import { Link } from 'react-router-dom';

const AdditionalCrisisResources: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f5f3fa] to-[#e6e1f5] font-sans antialiased">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
        {/* Refined heading with subtle accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-[#c9b6a4]"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1a2e3b]">
            Additional Crisis Resources
          </h2>
          <div className="h-px flex-1 bg-[#c9b6a4]/30"></div>
        </div>

        {/* Elegant resource cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-8 lg:gap-12">
          {/* Online Chat */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/email-chat"
                className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-all duration-300 relative"
              >
                <div className="relative">
                  {/* Soft glow effect */}
                  <div className="absolute inset-0 bg-[#2b5f8b]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  {/* Icon container with subtle gradient */}
                  <div className="relative bg-gradient-to-br from-[#eef4f9] to-[#dde9f5] p-7 rounded-full shadow-inner">
                    <img
                      src={messageCircle}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Minimal decorative ring */}
                  <div className="absolute -inset-1 border border-[#2b5f8b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                Online Chat
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2b5f8b] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Call Lines */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/support-and-call-lines"
                className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-all duration-300 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2b5f8b]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#eef4f9] to-[#dde9f5] p-7 rounded-full shadow-inner">
                    <img
                      src={phone}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 border border-[#2b5f8b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                Call Lines
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2b5f8b] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Text Chat */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/textchat"
                className="text-xl md:text-2xl text-[#2b5f8b] font-light hover:text-[#1a3f6b] transition-all duration-300 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2b5f8b]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-[#eef4f9] to-[#dde9f5] p-7 rounded-full shadow-inner">
                    <img
                      src={messageSquare}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 border border-[#2b5f8b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                Text Chat
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2b5f8b] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCrisisResources;
