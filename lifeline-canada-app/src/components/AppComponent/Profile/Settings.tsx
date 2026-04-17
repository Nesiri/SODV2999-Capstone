// pages/Settings.tsx
import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import api from '../../../utils/api';
import {
  AlertCircle,
  Trash2,
  User,
  Mail,
  Bell,
  Moon,
  Globe,
  Leaf,
  Heart,
  Sparkles,
} from 'lucide-react';

const Settings: React.FC = () => {
  const { user } = useAuth();

  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [reminders, setReminders] = useState(true);

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== user?.email) {
      setError(
        'The email entered does not match our records. Please try again when you feel ready.'
      );
      return;
    }

    setIsDeleting(true);
    setError(null);
    setSuccess(null);

    try {
      await api.delete('/api/auth/user', {
        data: { email },
        withCredentials: true,
      });

      setSuccess(
        'Your account has been gently removed. You will be redirected to our homepage in a moment. Remember, we are always here if you need us.'
      );

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch {
      setError(
        'We encountered a gentle hiccup. Please try again when you feel ready, or reach out to our support team for help.'
      );
      setIsDeleting(false);
    }
  };

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 max-w-4xl mx-auto overflow-hidden">
      {/* Page Header with Soothing Elements */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-start gap-2 mb-2">
          <div className="p-1.5 sm:p-2 bg-emerald-50 rounded-full flex-shrink-0">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
          </div>
          <h1 className="!text-xl sm:text-2xl md:text-3xl font-light text-gray-700 break-words">
            Your Space
          </h1>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl">
          Take a deep breath. This is your personal area where you can adjust
          things at your own pace.
        </p>
      </div>

      {/* Account Information - Gentle Card */}
      <div className="!bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-emerald-100 p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-md transition-all duration-500 w-full">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="p-1.5 sm:p-2 bg-emerald-50 rounded-full flex-shrink-0">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
          </div>
          <h2 className="text-base sm:text-lg font-medium text-gray-700 break-words">
            About You
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-xl w-full">
            <div className="p-1.5 bg-emerald-100 rounded-full flex-shrink-0">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-xs text-emerald-600 mb-0.5">
                Your Name
              </label>
              <p className="text-sm sm:text-base text-gray-700 truncate">
                {user?.name || 'Friend'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-xl w-full">
            <div className="p-1.5 bg-emerald-100 rounded-full flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <label className="block text-xs text-emerald-600 mb-0.5">
                Email Address
              </label>
              <p className="text-sm sm:text-base text-gray-700 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences - Gentle Settings */}
      <div className="!bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-emerald-100 p-4 sm:p-6 mb-4 sm:mb-6 w-full">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="p-1.5 sm:p-2 bg-emerald-50 rounded-full flex-shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
          </div>
          <h2 className="text-base sm:text-lg font-medium text-gray-700 break-words">
            Your Comfort Preferences
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Gentle Reminders */}
          <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl w-full gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-1.5 bg-emerald-100 rounded-full flex-shrink-0">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 truncate">
                Gentle Reminders
              </span>
            </div>
            <button
              onClick={() => setReminders(!reminders)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                reminders ? 'bg-emerald-400' : 'bg-gray-300'
              }`}
              aria-label="Toggle reminders"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 !bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  reminders ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {/* Calm Mode */}
          <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl w-full gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-1.5 bg-emerald-100 rounded-full flex-shrink-0">
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 truncate">
                Calm Mode
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                darkMode ? 'bg-emerald-400' : 'bg-gray-300'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 !bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {/* Soothing Notifications */}
          <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl w-full gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-1.5 bg-emerald-100 rounded-full flex-shrink-0">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              </div>
              <span className="text-sm sm:text-base text-gray-700 truncate">
                Soothing Notifications
              </span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                notifications ? 'bg-emerald-400' : 'bg-gray-300'
              }`}
              aria-label="Toggle notifications"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 !bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  notifications ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Section - Gentle and Supportive */}
      <div className="!bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-rose-100 p-4 sm:p-6 w-full">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="p-1.5 sm:p-2 bg-rose-50 rounded-full flex-shrink-0">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
          </div>
          <h2 className="text-base sm:text-lg font-medium text-rose-600 break-words">
            Taking a Break
          </h2>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed break-words">
          We understand if you need some time away. This will gently remove your
          information from our space. Remember, you're always welcome back
          whenever you feel ready.
        </p>

        {!showDeleteForm ? (
          <button
            onClick={() => setShowDeleteForm(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 active:bg-rose-200 transition-all duration-300 border border-rose-200 text-sm sm:text-base"
          >
            <Trash2 size={18} className="flex-shrink-0" />
            <span className="truncate">I need some time away</span>
          </button>
        ) : (
          <form
            onSubmit={handleDeleteAccount}
            className="bg-rose-50/50 rounded-xl p-4 sm:p-6 border border-rose-100 w-full"
          >
            <h3 className="font-medium text-rose-700 mb-3 text-sm sm:text-base break-words">
              This is a big decision
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mb-4 break-words">
              To help us ensure this is really what you want right now, please
              type your email address:
            </p>

            <div className="mb-4 p-3 bg-rose-100/50 rounded-lg w-full">
              <p className="text-xs sm:text-sm text-rose-700 font-medium break-all">
                {user?.email}
              </p>
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here..."
              className="w-full px-4 py-3 !bg-white border border-rose-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all text-sm sm:text-base"
              disabled={isDeleting || success !== null}
              required
            />

            {error && (
              <div className="flex items-start gap-2 text-rose-600 text-xs sm:text-sm mb-4 bg-rose-100 p-3 rounded-xl w-full">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <span className="flex-1 break-words">{error}</span>
              </div>
            )}

            {success && (
              <div className="text-emerald-600 text-xs sm:text-sm mb-4 bg-emerald-100 p-4 rounded-xl text-center w-full">
                <p className="mb-2 break-words">✨ {success}</p>
                <p className="text-xs text-emerald-500 break-words">
                  Take all the time you need. We'll be here.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="submit"
                disabled={isDeleting || success !== null}
                className={`w-full sm:flex-1 px-4 py-3 bg-rose-400 !text-[#5f2d85] rounded-xl text-sm sm:text-base
                  ${
                    isDeleting || success !== null
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-rose-500 active:bg-rose-600 hover:shadow-md'
                  } transition-all duration-300`}
              >
                <span className="block truncate">
                  {isDeleting ? 'Gently removing...' : 'Yes, I need a break'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowDeleteForm(false);
                  setEmail('');
                  setError(null);
                  setSuccess(null);
                }}
                className="w-full sm:flex-1 px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 text-sm sm:text-base"
                disabled={isDeleting}
              >
                <span className="block truncate">I'd like to stay</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Settings;
