// utils/authCookies.js
import jwtPkg from 'jsonwebtoken';
const { sign } = jwtPkg;
export function setAuthCookie(res, user) {
  const token = sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'secretkey',
    { expiresIn: '90d' }
  );

  const isProd = process.env.NODE_ENV === 'production';
  //console.log({token})

  res.cookie('token', token, {
    httpOnly: true,                // JS cannot read cookie
    secure: isProd,                // HTTPS only in production
    sameSite: isProd ? 'strict' : 'lax', // strict in prod, lax in dev
    maxAge: 7 * 24 * 60 * 60 * 1000,     // 7 days
    path: '/',                     // available on all routes
  });
}

