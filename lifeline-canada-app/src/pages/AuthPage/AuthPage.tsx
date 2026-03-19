import React, { useState } from 'react';
import SocialMediaAuth from '../../auths/SocialMediaAuth';
import LoginForm from '../../auths/LoginForm';
import SignUpForm from '../../auths/SignUpForm';

import { login } from '../../services/loginService';
import { signup } from '../../services/signupService';
import { socialLogin } from '../../services/socialLoginService';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { GoogleProfile } from '../../types/auth.types';
import type { SignUpData } from '../../types/user.type';
import { useNavigate } from 'react-router-dom';


const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';


const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
//console.log({GOOGLE_CLIENT_ID})

  const handleSocialLogin = async (
    provider: string,
    profile?: GoogleProfile
  ) => {
    console.log(`Logging in with ${provider}`, profile);

    if (!profile) return;

    const res = await socialLogin(profile.email, profile.name, profile.sub);

    if (res.ok && res.data) {
   

      navigate('/dashboard');
   
    } else {
      return {
        ok: false,
        error: res.error ?? 'Social login failed',
        info: res.info ?? '',
      };
    }
  };

  const handleLogin = async (email: string) => {
    const res = await login(email); // your login API call
    console.log({ res });

    if (res.ok && res.data) {
      // Navigate to dashboard with user data in state
  
      navigate('/dashboard');
    } else if (!res.ok) {
      return {
        ok: false,
        error: res.error ?? 'Login failed',
        info: res.info ?? '',
      };
    }

    // successful login logic
    setIsLogin(true);

    return { ok: true };
  };

  const handleSignUp = async (data: SignUpData) => {
    const reg = await signup(data.fullName, data.email);

    console.log({ reg });

    if (!reg.ok) {
      return {
        ok: false,
        error: reg.error ?? 'Signup failed',
      };
    }

    return { ok: true, info: reg?.data?.message ?? '' };
  };

  return (
    <div className="min-h-screen mt-20 sm:mt-0 bg-gradient-to-br from-amber-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            {isLogin ? (
              <>
              {GOOGLE_CLIENT_ID?.length > 0 && (
                <SocialMediaAuth onSocialLogin={handleSocialLogin} />
              )}
                <LoginForm
                  onSubmit={handleLogin}
                  onSwitchToSignup={() => setIsLogin(false)}
                />
              </>
            ) : (
              <SignUpForm
                onSubmit={handleSignUp}
                onSwitchToLogin={() => setIsLogin(true)}
              />
            )}
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
