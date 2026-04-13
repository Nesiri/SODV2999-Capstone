import React from 'react';
import callLineImage from '../../../assets/chatIcons/telephone-purple-removebg-preview.png';
import { Link } from 'react-router-dom';

const CallLines: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-300 via-purple-200 to-indigo-200 py-20 md:py-28 overflow-hidden">
      {/* Soft luminous gradients */}
      <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[140px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 w-fit">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-medium tracking-[0.2em] text-purple-900 uppercase">
                24/7 CRISIS SUPPORT
              </span>
            </div>
            {/* Headline - ONLY PURPLE & INLINE */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                <span className="bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
                  Call{' '}
                </span>
                <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
                  Lines
                </span>
              </h1>
            </div>
            {/* Glass Card Text Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-2xl">
                <div className="space-y-6">
                  {/* Highlighted Alert */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 pb-3 border-b border-purple-400/50">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                      <p className="text-purple-950 font-semibold text-lg leading-relaxed">
                        If you or someone you know is in immediate crisis, call
                        911 right away
                      </p>
                    </div>
                  </div>

                  {/* Main Paragraphs */}
                  <div className="space-y-4">
                    <p className="text-purple-950 leading-relaxed font-medium">
                      Call or Text{' '}
                      <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                        988
                      </span>{' '}
                      Canada's new suicide prevention hotline. If you or someone
                      you know is in danger of hurting themselves or others,
                      call 911 immediately.{' '}
                      <Link
                        to="/incrisisneedhelp"
                        className="text-purple-700 font-bold hover:text-purple-900 border-b-2 border-purple-600/50 hover:border-purple-800 transition-all inline-flex items-center gap-1"
                      >
                        See our directory of mental health crisis support in
                        your area below
                      </Link>
                    </p>

                    <p className="text-purple-950 leading-relaxed font-medium">
                      There are countless thoughtful and empathetic people
                      around the globe who are available to support those in
                      crisis. They are just a phone call away. When you are not
                      a danger to yourself or anyone else, and you need to talk
                      to someone, a person with experience in crisis support is
                      very close at hand. (If you are in danger of hurting
                      yourself or others, call 911 immediately.) Use the numbers
                      below for your location when required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
              <p className="text-sm text-purple-800/70 leading-relaxed font-medium italic">
                Seek the advice of an appropriately qualified healthcare
                professional before making decisions about your circumstances.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-2xl blur-2xl" />

              {/* Image Container */}
              <div className="relative sm:top-20 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/40">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-200/50 via-transparent to-transparent z-10" />
                <img
                  src={callLineImage}
                  alt="crisis support hotline"
                  className="w-64 sm:w-80 md:w-96 lg:w-[450px] xl:w-[500px] h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12">
                <svg
                  className="w-full h-full text-purple-500/30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
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

export default CallLines;
