// providers/AuthProvider.tsx
import { useState, useEffect } from 'react';
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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
