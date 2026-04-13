// components/CrisisButton.tsx
import React, { useState } from 'react';
import { Phone, MessageCircle, X, Heart, Bot } from 'lucide-react';
import Chatbot from './Chatbot';

const CrisisSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleText = (number: string) => {
    window.location.href = `sms:${number}`;
  };

  const resetToMenu = () => {
    setShowChatbot(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="group relative">
          {/* Subtle ring - purple only */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#89009B] to-[#B266C9] rounded-full blur-md animate-pulse" />

          {/* Main button - calming purple with label inside */}
          <div className="relative bg-white rounded-full shadow-xl border border-[#e0d8e2] hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Inner container with heart and label */}
            <div className="relative p-3 flex flex-col items-center justify-center min-w-[70px]">
              <Heart className="w-5 h-5 text-[#89009B] fill-[#f5edf7]" />
              <span className="text-[9px] font-bold text-[#89009B] mt-0.5 tracking-tight">
                Crisis
              </span>
              <span className="text-[8px] font-semibold text-[#B266C9] -mt-0.5">
                Support
              </span>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#e0d8e2] overflow-hidden w-80 animate-in">
          {!showChatbot ? (
            // Main Menu
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-[#f5edf7] to-[#e8dceb] px-5 py-4 border-b border-[#e0d8e2] flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#89009B]">
                    Crisis Support
                  </h3>
                  <p className="text-xs text-[#B266C9]">
                    24/7 • Free • Confidential
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#B266C9] hover:text-[#89009B] transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Buttons */}
              <div className="p-4 space-y-3">
                {/* Chatbot Button */}
                <button
                  onClick={() => setShowChatbot(true)}
                  className="w-full bg-gradient-to-r from-[#89009B] to-[#A055B5] hover:from-[#7a0088] hover:to-[#8f44a3] text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <Bot className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">
                      Chat with AI Assistant
                    </div>
                    <div className="text-xs opacity-90">
                      Get immediate support
                    </div>
                  </div>
                </button>

                {/* Call 988 */}
                <button
                  onClick={() => handleCall('988')}
                  className="w-full bg-gradient-to-r from-[#9B4DAB] to-[#B266C9] hover:from-[#8a3d9a] hover:to-[#a355b8] text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Call 988</div>
                    <div className="text-xs opacity-90">
                      Suicide Crisis Helpline
                    </div>
                  </div>
                </button>

                {/* Text 988 */}
                <button
                  onClick={() => handleText('988')}
                  className="w-full bg-gradient-to-r from-[#B266C9] to-[#C77DDF] hover:from-[#a355b8] hover:to-[#b56ccd] text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Text 988</div>
                    <div className="text-xs opacity-90">24/7 Support</div>
                  </div>
                </button>

                {/* Kids Help Phone Text Line */}
                <button
                  onClick={() => handleText('686868')}
                  className="w-full bg-gradient-to-r from-[#7B2D8F] to-[#9B4DAB] hover:from-[#6a1d7e] hover:to-[#8a3d9a] text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Kids Help Phone</div>
                    <div className="text-xs opacity-90">
                      Text CONNECT or PARLER to 686868
                    </div>
                  </div>
                </button>

               {/* Emergency 911 */}
<button
  onClick={() => handleCall('911')}
  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
>
  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
    !
  </div>
  <div className="text-left">
    <div className="font-medium text-sm">Emergency 911</div>
    <div className="text-xs opacity-90">Immediate Danger</div>
  </div>
</button>
              </div>

              <div className="px-4 pb-4 text-center">
                <p className="text-[10px] text-[#B266C9]">You are not alone</p>
              </div>
            </>
          ) : (
            // Chatbot Component
            <Chatbot onClose={resetToMenu} />
          )}
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CrisisSupportButton;