import React from 'react';
import { Heart, Mail, User, Activity, BookOpen, Shield } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const lastUpdated = 'March 15, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      {/* Mobile-Responsive Header */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
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
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-rose-100 overflow-hidden">
          {/* Card Header - Reduced Height */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 sm:px-6 py-4 sm:py-5 text-white">
            <div className="flex items-start gap-2 sm:gap-3">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 opacity-90 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 truncate">
                  Terms of Service
                </h1>
                <p className="text-xs sm:text-sm text-rose-100 truncate">
                  For your mental health journey
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable Content - Adjusted padding for mobile */}
          <div className="p-4 sm:p-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto custom-scrollbar">
            <div className="space-y-4 sm:space-y-6">
              {/* Introduction - More compact on mobile */}
              <div className="bg-rose-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-700">
                  Welcome to Mindful Support. By using our app, you agree to
                  these simple terms designed with your mental wellness in mind.
                </p>
              </div>

              {/* Account Section */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 flex-shrink-0" />
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Your Account
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7">
                  You can create an account using Google or your email and full
                  name. Keep your login details safe - you're responsible for
                  your account.
                </p>
              </div>

              {/* Your Data Section */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    What We Track
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7">
                  We only track what helps you: your moods, exercise, and saved
                  resources. This data is private and only used to support your
                  mental health journey.
                </p>
                <ul className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7 space-y-1 sm:space-y-1.5">
                  <li className="flex items-center space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full flex-shrink-0"></span>
                    <span>Mood tracking entries</span>
                  </li>
                  <li className="flex items-center space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full flex-shrink-0"></span>
                    <span>Exercise logs and activities</span>
                  </li>
                  <li className="flex items-center space-x-1.5 sm:space-x-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full flex-shrink-0"></span>
                    <span>Saved resources and favorites</span>
                  </li>
                </ul>
              </div>

              {/* Privacy Promise */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    Our Promise
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-6 sm:pl-7">
                  Your data is yours alone. We don't share with anyone - this is
                  your private space for mental wellness. No interactions with
                  other users, just you and your journey.
                </p>
              </div>

              {/* Simple Rules */}
              <div className="space-y-2 sm:space-y-3">
                <span className="text-sm sm:text-base font-medium text-gray-700 block">
                  Simple Guidelines
                </span>
                <div className="grid grid-cols-1 gap-1.5 sm:gap-2 pl-6 sm:pl-7">
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                    ✓ Use the app honestly for your wellbeing
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                    ✓ Don't try to access others' data
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                    ✓ We may update these terms (we'll tell you)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Action - More compact on mobile */}
          <div className="p-3 sm:p-6 bg-gray-50 border-t border-gray-100">
            <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3">
              By using Mindful Support, you agree to these terms
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
          background: linear-gradient(to bottom, #f43f5e, #a855f7);
          border-radius: 20px;
        }
        @media (max-width: 380px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
