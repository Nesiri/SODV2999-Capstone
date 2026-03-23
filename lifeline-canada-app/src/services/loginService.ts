import api from '../utils/api';

export async function login(email: string) {
  try {
    const res = await api.post('/api/auth/login', { email });

    return { ok: true, data: res.data };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log('Login error:', err.response?.data);

    return {
      ok: false,
      error: err.response?.data?.error || 'Login failed',
      info: err.response?.data?.info || '',
    };
  }
}
