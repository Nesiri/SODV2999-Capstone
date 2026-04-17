import React from 'react';
import messageCircle from '../../assets/chatIcons/online-chat-purple-removebg-preview.png';
import phone from '../../assets/chatIcons/telephone-purple-removebg-preview.png';
import messageSquare from '../../assets/chatIcons/chat-room-purple-removebg-preview.png';
import { Link } from 'react-router-dom';

const AdditionalCrisisResources: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#f5f3fa] to-[#e6e1f5] font-sans antialiased">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24">
        {/* Centered Purple Heading - No underline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal !bg-[#5f2d85]  bg-clip-text text-transparent">
            Additional Crisis Resources
          </h2>
        </div>

        {/* Elegant resource cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-8 lg:gap-12">
          {/* Online Chat */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/email-chat"
                className="!text-xl md:text-2xl font-light transition-all duration-300 relative"
                style={{ color: '#9333ea !important' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4c1d95';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9333ea';
                }}
              >
                <div className="relative">
                  {/* Soft glow effect */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
                    style={{ backgroundColor: '#a855f7', opacity: 0.1 }}
                  ></div>

                  {/* Icon container - REDUCED PADDING from p-7 to p-2 */}
                  <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-full shadow-inner">
                    <img
                      src={messageCircle}
                      alt=""
                      className="w-28 h-28 md:w-32 md:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Minimal decorative ring */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ border: '1px solid #a855f7', opacity: 0.2 }}
                  ></div>
                </div>
                <span style={{ color: '#9333ea' }}>Online Chat</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#7e22ce' }}
                ></span>
              </Link>
            </div>
          </div>

          {/* Call Lines */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/support-and-call-lines"
                className="!text-xl md:text-2xl font-light transition-all duration-300 relative"
                style={{ color: '#9333ea !important' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4c1d95';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9333ea';
                }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
                    style={{ backgroundColor: '#a855f7', opacity: 0.1 }}
                  ></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-full shadow-inner">
                    <img
                      src={phone}
                      alt=""
                      className="w-28 h-28 md:w-32 md:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ border: '1px solid #a855f7', opacity: 0.2 }}
                  ></div>
                </div>
                <span style={{ color: '#9333ea' }}>Call Lines</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#7e22ce' }}
                ></span>
              </Link>
            </div>
          </div>

          {/* Text Chat */}
          <div className="group flex-1 min-w-[220px] max-w-[300px]">
            <div className="flex flex-col items-center gap-5">
              <Link
                to="/in-crisis-help/textchat"
                className="!text-xl md:text-2xl font-light transition-all duration-300 relative"
                style={{ color: '#9333ea !important' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4c1d95';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9333ea';
                }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
                    style={{ backgroundColor: '#a855f7', opacity: 0.1 }}
                  ></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-full shadow-inner">
                    <img
                      src={messageSquare}
                      alt=""
                      className="w-28 h-28 md:w-32 md:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ border: '1px solid #a855f7', opacity: 0.2 }}
                  ></div>
                </div>
                <span style={{ color: '#9333ea' }}>Text Chat</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#7e22ce' }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCrisisResources;
