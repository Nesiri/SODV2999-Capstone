import type { User } from './auth.types';

export interface SignUpData {
  fullName: string;
  email: string;
  message?: string;
  agreedToTerms: boolean;
}
export interface SocialLoginResponse {
  ok: boolean;
  data?: { user: User };
  error?: string;
  info?: string;
}
