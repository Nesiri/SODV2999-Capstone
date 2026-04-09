import React from 'react';
import onlineChatImage from '../../../assets/chatIcons/OnlineChat-1.png';
import { Link } from 'react-router-dom';

const OnlineChatLines: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-300 via-purple-200 to-indigo-200 py-20 md:py-28 overflow-hidden">
      {/* Soft luminous gradients - adjusted for lighter background */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Elevated boxed paragraphs */}
          <div className="space-y-10">
            {/* Badge - updated for lighter background */}
            <div className="inline-block">
              <span className="text-xs tracking-[0.3em] text-purple-800 uppercase font-light bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-300/50">
                Compassionate Support
              </span>
            </div>

            {/* Headline - updated for lighter background */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-purple-900 leading-[1.1]">
                OnLine Chat
                <span className="block text-purple-700">Lines</span>
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>

            {/* Boxed paragraphs with elevated design - updated for lighter background */}
            <div className="space-y-6">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="p-8 space-y-5">
                  {/* Highlighted alert - updated for lighter background */}
                  <div className="flex items-start gap-3 pb-2 border-b border-purple-400/50">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <p className="text-purple-900 font-semibold text-lg leading-relaxed">
                      If you or someone you know is in crisis, call 911 immediately
                    </p>
                  </div>
                  
                  {/* Paragraphs with improved spacing - updated for lighter background */}
                  <div className="space-y-4 text-purple-800 leading-relaxed">
                    <p>
                      Sometimes it is easier to open up and seek support via OnLine Chat, where one can compose their thoughts and get things "on paper" to help sort out the issues and the questions that require answers and support. OnLine Chat Line support is also ideal when one wishes to have a record of advice and a place you can go back to and look at the words of support over again. Below are some OnLine chat lines for North America and worldwide.
                    </p>
                    
                    <p>
                      The LifeLine Canada Foundation is not a crisis hotline.{' '}
                      <Link to='/incrisisneedhelp' className="text-purple-700 font-bold hover:text-purple-900 transition-colors">
                        See our directory of mental health crisis support in your area.
                      </Link>
                    </p>
                  </div>
                </div>
                
                {/* Decorative gradient bottom - updated for lighter background */}
                <div className="h-1 bg-gradient-to-r from-purple-500/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Bare image, no card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Simple floating glow behind image - updated for lighter background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/40 to-pink-300/30 rounded-full blur-3xl scale-110"></div>
              
              {/* Bare image with subtle shadow */}
              <img
                src={onlineChatImage}
                alt="online chat"
                className="relative sm:top-30 w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative corner element - updated for lighter background */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12">
                <svg className="w-full h-full text-purple-500/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3 L12 21 M3 12 L21 12 M4.5 4.5 L19.5 19.5 M19.5 4.5 L4.5 19.5" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineChatLines;