import React from 'react';
import { Heart, Shield, Eye, Lock, Trash2, CheckCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = 'March 15, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-rose-50">
      {/* Mobile-Responsive Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[120px] sm:max-w-none">
                Mindful Support
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap ml-2">
              Updated: {lastUpdated}
            </span>
          </div>
        </div>
      </div>

      {/* Single Card */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-purple-100 overflow-hidden">
          {/* Card Header - Reduced Height */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-300 px-4 sm:px-6 py-4 sm:py-5 text-white">
            <div className="flex items-start gap-2 sm:gap-3">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 opacity-90 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 truncate">
                  Privacy Policy
                </h1>
                <p className="text-xs sm:text-sm text-purple-100 truncate">
                  Your data, your privacy, your journey
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable Content - Adjusted padding for mobile */}
          <div className="p-4 sm:p-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Summary - More compact on mobile */}
              <div className="bg-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-700 font-medium mb-0.5 sm:mb-1">
                  Quick Summary
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  We only collect what helps your mental wellness journey.
                  Nothing more. Your data stays private - we never share it with
                  anyone.
                </p>
              </div>

              {/* What We Collect */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    What We Collect
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-5 sm:pl-6">
                  When you create an account (Google or email), we collect:
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
                  <li className="flex items-start space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>Your name and email address (for your account)</span>
                  </li>
                  <li className="flex items-start space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>Mood entries you choose to record</span>
                  </li>
                  <li className="flex items-start space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>Exercise activities you log</span>
                  </li>
                  <li className="flex items-start space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span>Resources you save for later</span>
                  </li>
                </ul>
              </div>

              {/* How We Use It */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    How We Use Your Data
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-5 sm:pl-6">
                  Only to support your mental health journey:
                </p>
                <div className="grid grid-cols-1 gap-1.5 sm:gap-2 pl-5 sm:pl-6">
                  <div className="bg-gray-50 rounded-lg p-2 text-xs sm:text-sm text-gray-600">
                    • Track your mood patterns over time
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-xs sm:text-sm text-gray-600">
                    • Remember your favorite resources
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-xs sm:text-sm text-gray-600">
                    • Show your exercise progress
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-xs sm:text-sm text-gray-600">
                    • Improve the app based on usage patterns
                  </div>
                </div>
              </div>

              {/* What We DON'T Do */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    What We DON'T Do
                  </span>
                </div>
                <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                  <p className="text-xs sm:text-sm text-green-700 flex items-start sm:items-center">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Never share your data with anyone</span>
                  </p>
                  <p className="text-xs sm:text-sm text-green-700 flex items-start sm:items-center">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Never sell your personal information</span>
                  </p>
                  <p className="text-xs sm:text-sm text-green-700 flex items-start sm:items-center">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>No social features - your journey is private</span>
                  </p>
                  <p className="text-xs sm:text-sm text-green-700 flex items-start sm:items-center">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>No third-party tracking for ads</span>
                  </p>
                </div>
              </div>

              {/* Your Control */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    You're in Control
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-5 sm:pl-6">
                  You can delete your account and all your data anytime.
                  Everything you track is yours.
                </p>
              </div>

              {/* Data Protection */}
              <div className="space-y-1 sm:space-y-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700 block">
                  Data Protection
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  We use industry-standard encryption to keep your information
                  safe. Your mental wellness journey is personal - we treat it
                  that way.
                </p>
              </div>
            </div>
          </div>

          {/* Footer with Contact - More compact on mobile */}
          <div className="p-3 sm:p-6 bg-gray-50 border-t border-gray-100">
            <p className="text-[10px] sm:text-xs text-gray-500 text-center">
              Questions? <span className="hidden xs:inline">Email us at </span>
              <a
                href="mailto:privacy@mindfulsupport.com"
                className="text-purple-600 hover:underline"
              >
                privacy@mindfulsupport.com
              </a>
            </p>
            <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-1 sm:mt-2">
              By using Mindful Support, you trust us with your journey
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #f43f5e);
          border-radius: 20px;
        }
        /* For very small screens */
        @media (max-width: 380px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
