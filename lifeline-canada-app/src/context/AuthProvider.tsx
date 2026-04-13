// providers/AuthProvider.tsx
import { useState, useEffect, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { User } from '../types/auth.types';
import api from '../utils/api';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // fetch user from backend using cookie
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/api/auth/me', { withCredentials: true });
        console.log({ me: res });
        if (res.data) setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Simple onLogout function - set user to null and redirect to home
  const onLogout = useCallback(() => {
    setUser(null);
    window.location.href = '/'; // Redirect to home page
  }, []);

  const value = {
    user,
    setUser,
    onLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
