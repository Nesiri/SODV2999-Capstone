import React from "react";
import { Heart, ExternalLink } from "lucide-react";
import EmailImage from "../../assets/Email.jpg"
const EmailSupport: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-purple-50 to-pink-50 py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section header badge */}
        <div className="flex justify-center md:justify-start mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 shadow-sm">
            <Heart className="w-4 h-4 text-purple-500 fill-purple-500" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              ✦ WE'RE HERE TO HELP ✦
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-pink-600">
                Email
              </span>
              <br />
              <span className="text-gray-800 relative">
                Support
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
              </span>
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-purple-700">The LifeLine Canada Foundation (TLC)</span> is a registered non-profit
                committed to the prevention of suicide and positive mental health
                in Canada and Worldwide and has made work in this area a top
                priority. We envision a country where suicide is a rare event,
                where people are nurtured and supported, where individuals and
                families are aware of the risk factors for suicide and actively
                seek help from accessible, effective community resources.
              </p>

              <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 my-8">
                <p className="text-gray-700 mb-2 font-medium">
                  For complete details of TLC's Companion Paws program and process see
                </p>
                <a
                  href="https://companionpaws.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold text-lg transition-colors group"
                >
                  CompanionPaws.ca
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100">
                <p className="text-gray-700">
                  <span className="italic text-pink-600">Non-crisis</span> questions and comments or to contact The LifeLine Canada Foundation about collaborating please{' '}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-900 font-semibold underline decoration-2 decoration-purple-300 hover:decoration-purple-500 transition-all"
                  >
                    click here
                    <span className="text-lg">→</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT ICON */}
          <div className="flex justify-center items-center animate-float">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main icon container */}
              <div className="relative bg-white p-12 rounded-[2rem] shadow-2xl border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-2">
               <img src={EmailImage}/>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500 delay-100"></div>
                
                {/* Small floating hearts */}
                <Heart className="absolute -top-2 -right-2 w-6 h-6 text-pink-300 fill-pink-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-5px]" />
                <Heart className="absolute bottom-0 -left-6 w-4 h-4 text-purple-300 fill-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform group-hover:translate-x-[5px]" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EmailSupport;