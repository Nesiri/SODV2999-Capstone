// types/auth.types.ts

export interface User {
  id: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface GoogleProfile {
  email: string;
  name: string;
  sub: string;
  picture?: string;
}

export interface SocialMediaAuthProps {
  onSocialLogin: (provider: string, profile?: GoogleProfile) => void;
  className?: string;
  showDivider?: boolean;
}
