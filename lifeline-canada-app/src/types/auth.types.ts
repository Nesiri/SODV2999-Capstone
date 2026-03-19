// types/auth.types.ts
export interface User {
  id: string;
  email: string;
  name?: string;  // Optional
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  onLogout: () => void;  // Add this if it's in your context
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