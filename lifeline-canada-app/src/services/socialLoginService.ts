import type { SocialLoginResponse } from '../types/user.type';
import api from '../utils/api';

export async function socialLogin(
  email: string,
  name: string,
  googleId: string
): Promise<SocialLoginResponse> {
  try {
    const res = await api.post('/api/auth/social-login', {
      email,
      name,
      googleId,
    });

    return {
      ok: true,
      data: res.data,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return {
      ok: false,
      error: err.response?.data?.error ?? 'Social login failed',
      info: err.response?.data?.info ?? '',
    };
  }
}
