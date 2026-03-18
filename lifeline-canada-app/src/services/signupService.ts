import type { SignUpData } from '../types/user.type';
import api from '../utils/api';

interface SignupResponse {
  ok: boolean;
  error?: string;
  data?: SignUpData;
}

export async function signup(
  name: string,
  email: string
): Promise<SignupResponse> {
  try {
    const res = await api.post('/api/auth/signup', { name, email });
    return { ok: true, data: res.data };
  } catch (err: unknown) {
    // Check if it's an Axios error with a response
    if (err && typeof err === 'object' && 'response' in err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const axiosErr = err as any;
      if (axiosErr.response?.data?.error) {
        return { ok: false, error: axiosErr.response.data.error };
      }
    }

    // fallback generic error
    let message = 'An unexpected error occurred';
    if (err instanceof Error) message = err.message;
    return { ok: false, error: message };
  }
}
