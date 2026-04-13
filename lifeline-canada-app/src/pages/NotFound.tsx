// pages/NotFound.tsx
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Heart, Sparkles, Compass } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const [isVisible] = useState(true);

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  // Comforting messages
  const comfortingMessages = useMemo(
    () => [
      'Sometimes paths lead us to unexpected places',
      'This is just a little detour, not a dead end',
      "Breathe. You're safe. Let's find our way back.",
      'Every wrong turn is just another way to learn',
      'Be gentle with yourself - technology can be confusing too',
    ],
    []
  );

  // Random message once when component mounts
  const [randomMessage] = useState(() => {
    return comfortingMessages[
      Math.floor(Math.random() * comfortingMessages.length)
    ];
  });

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#e9e3ea] via-[#f2ecf3] to-[#e0d8e2] flex items-center justify-center p-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Soothing animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#89009B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#B266C9]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#89009B]/5 rounded-full blur-3xl"></div>

        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#89009B]/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#B266C9]/20 rounded-full animate-float delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#89009B]/20 rounded-full animate-float delay-500"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          <div className="h-2 bg-gradient-to-r from-[#89009B] via-[#B266C9] to-[#89009B]" />

          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#89009B] rounded-full opacity-20 animate-ping"></div>
                <div className="absolute inset-0 bg-[#B266C9] rounded-full opacity-30 blur-md"></div>
                <div className="relative bg-gradient-to-br from-[#f5edf7] to-[#e8dceb] p-5 rounded-full shadow-inner">
                  <Compass
                    className="w-14 h-14 text-[#89009B]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <div className="text-center mb-4">
              <span className="text-sm uppercase tracking-[0.3em] text-[#B266C9] font-light">
                misplaced
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-center text-[#89009B] mb-2 tracking-tight">
              404
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-[#B266C9] text-center mb-4">
              You've wandered off the path
            </h2>

            <div className="bg-[#f5edf7]/50 rounded-2xl p-5 mb-8 border border-white/50">
              <p className="text-[#89009B] text-center italic leading-relaxed">
                "{randomMessage}"
              </p>

              <div className="flex justify-center mt-3 gap-1">
                <Heart size={14} className="text-[#89009B] fill-[#89009B]/30" />
                <Heart size={14} className="text-[#B266C9] fill-[#B266C9]/30" />
                <Heart size={14} className="text-[#89009B] fill-[#89009B]/30" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#89009B] to-[#B266C9] text-white rounded-2xl hover:from-[#7a0088] hover:to-[#a355b8] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <Home
                  size={20}
                  className="group-hover:rotate-6 transition-transform"
                />
                <span className="font-medium">Return to safe space</span>
              </Link>

              <button
                onClick={handleGoBack}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-sm text-[#89009B] rounded-2xl border border-[#e0d8e2] hover:bg-white hover:border-[#B266C9] transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 group"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span className="font-medium">Go back a step</span>
              </button>
            </div>

            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-[#B266C9] flex items-center justify-center gap-2">
                <Sparkles size={14} />
                <span>This isn't a mistake, just a moment of pause</span>
                <Sparkles size={14} />
              </p>

              <p className="text-xs text-[#89009B]/60">
                take all the time you need • you're doing great
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-15px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
