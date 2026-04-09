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
        <button
          onClick={() => setIsOpen(true)}
          className="group relative"
        >
          {/* Subtle ring - purple only */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-md animate-pulse" />
          
          {/* Main button - calming purple with label inside */}
          <div className="relative bg-white rounded-full shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Inner container with heart and label */}
            <div className="relative p-3 flex flex-col items-center justify-center min-w-[70px]">
              <Heart className="w-5 h-5 text-purple-500 fill-purple-50" />
              <span className="text-[9px] font-bold text-purple-600 mt-0.5 tracking-tight">
                Crisis
              </span>
              <span className="text-[8px] font-semibold text-purple-500 -mt-0.5">
                Support
              </span>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-80 animate-in">
          {!showChatbot ? (
            // Main Menu
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">Crisis Support</h3>
                  <p className="text-xs text-gray-500">24/7 • Free • Confidential</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Buttons */}
              <div className="p-4 space-y-3">
                {/* Chatbot Button */}
                <button
                  onClick={() => setShowChatbot(true)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <Bot className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Chat with AI Assistant</div>
                    <div className="text-xs opacity-90">Get immediate support</div>
                  </div>
                </button>
                
                {/* Call 988 */}
                <button
                  onClick={() => handleCall('988')}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Call 988</div>
                    <div className="text-xs opacity-90">Suicide Crisis Helpline</div>
                  </div>
                </button>
                
                {/* Text 988 */}
                <button
                  onClick={() => handleText('988')}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Text 988</div>
                    <div className="text-xs opacity-90">24/7 Support</div>
                  </div>
                </button>
                
                {/* Emergency 911 */}
                <button
                  onClick={() => handleCall('911')}
                  className="w-full bg-gradient-to-r from-purple-700 to-rose-600 hover:from-purple-800 hover:to-rose-700 text-white rounded-xl py-3 px-4 flex items-center gap-3 transition shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">!</div>
                  <div className="text-left">
                    <div className="font-medium text-sm">Emergency 911</div>
                    <div className="text-xs opacity-90">Immediate Danger</div>
                  </div>
                </button>
              </div>
              
              <div className="px-4 pb-4 text-center">
                <p className="text-[10px] text-gray-400">You are not alone</p>
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