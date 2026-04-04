import React from 'react';
import textChatImage from '../../../assets/chatIcons/chat-room-icon-7-200x200.png';
import { Link } from 'react-router-dom';
import SpiderWebBackground from '../../Background/CalmBackground';

const TextChat: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 md:py-28 overflow-hidden">
      {/* Spider Web Background */}
      <SpiderWebBackground opacity={0.5} />
      
      {/* Soft luminous gradients - updated to purple */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Elevated boxed paragraphs */}
          <div className="space-y-10">
            {/* Badge - updated to purple */}
            <div className="inline-block">
              <span className="text-xs tracking-[0.3em] text-purple-300 uppercase font-light bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
                Compassionate Support
              </span>
            </div>

            {/* Headline - updated to purple */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-purple-100 leading-[1.1]">
                Text Chat
                <span className="text-purple-300"> Lines</span>
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>

            {/* Boxed paragraphs with elevated design - updated to purple */}
            <div className="space-y-6">
              <div className="bg-purple-900/40 backdrop-blur-md rounded-3xl border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="p-8 space-y-5">
                  {/* Highlighted alert - updated to purple */}
                  <div className="flex items-start gap-3 pb-2 border-b border-purple-400/30">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <p className="text-purple-200 font-semibold text-lg leading-relaxed">
                      If you or someone you know is in crisis, call 911 immediately
                    </p>
                  </div>
                  
                  {/* Paragraphs with improved spacing - updated to purple */}
                  <div className="space-y-4 text-purple-200 leading-relaxed">
                    <p>
                      The LifeLine Canada Foundation is not a crisis hotline. If you or someone you know is in crisis, call 911 immediately. See our directory of mental health crisis support in your area.
                      <Link to="/incrisisneedhelp" className="text-purple-300 font-medium hover:text-purple-200 transition-colors ml-1">
                        See our directory of mental health crisis support in your area below.
                      </Link>
                    </p>
                    
                    <p>
                      Sometimes it is easier to open up and seek support via text, where one can compose their thoughts and get things "on paper" to help sort out the issues and the questions that require answers and support. Text Chat Line support is also ideal when one wishes to have a record of advice and a place you can go back to and look at the words of support over again. Below are some Crisis Text chat lines for Canada, the USA, The United Kingdom and New Zealand.
                    </p>
                  </div>
                </div>
                
                {/* Decorative gradient bottom - updated to purple */}
                <div className="h-1 bg-gradient-to-r from-purple-500/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Bare image, no card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Simple floating glow behind image - updated to purple */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-purple-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Bare image with subtle shadow */}
              <img
                src={textChatImage}
                alt="text chat"
                className="relative sm:top-15 w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative spider web corner element */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12">
                <svg className="w-full h-full text-purple-400/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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

export default TextChat;