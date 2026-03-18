import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import type { SocialMediaAuthProps } from '../types/auth.types';

const SocialMediaAuth: React.FC<SocialMediaAuthProps> = ({
  onSocialLogin,
  className = '',
  showDivider = true,
}) => {
  const buttons = [
    {
      provider: 'google',
      icon: FcGoogle,
      label: 'Google',
      color: 'text-gray-700',
      bgColor: 'bg-white',
      borderColor: 'border-gray-300',
      hoverBg: 'hover:bg-gray-50',
    },
    // You can add Facebook or other providers here
  ];

  // Google login handler
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;

      // Fetch user profile from Google
      const profileResponse = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const profile = profileResponse.data; // contains name, email, picture, etc.

      // Call the parent callback with provider, token, and profile
      onSocialLogin('google', profile);
    },
    onError: () => {
      console.error('Google login failed');
    },
  });

  return (
    <div className={className}>
      <div className="grid gap-3">
        {buttons.map((button, index) => {
          const Icon = button.icon;
          return (
            <button
              key={index}
              onClick={() => {
                if (button.provider === 'google') {
                  googleLogin();
                } else {
                  // For other providers, call onSocialLogin directly
                  onSocialLogin(button.provider);
                }
              }}
              className={`
                flex items-center justify-center gap-3 
                ${button.bgColor} ${button.borderColor} border
                ${button.hoverBg}
                py-3 px-4
                rounded-xl transition-all hover:shadow-md
                ${button.color} font-medium
              `}
              aria-label={`Login with ${button.provider}`}
            >
              <Icon size={20} />
              <span className="flex-1 text-left">
                Continue with {button.provider}
              </span>
            </button>
          );
        })}
      </div>

      {showDivider && (
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">
              or continue with email
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaAuth;
