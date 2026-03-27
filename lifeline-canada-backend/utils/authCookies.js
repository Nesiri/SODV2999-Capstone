// utils/authCookies.js
import jwtPkg from 'jsonwebtoken';
const { sign } = jwtPkg;

export function setAuthCookie(res, user) {
  const token = sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'secretkey',
    { expiresIn: '90d' }
  );

  // ✅ FIXED: Use 'none' for cross-site requests
  res.cookie('token', token, {
    httpOnly: true,                // JS cannot read cookie
    secure: true,                   // MUST be true for sameSite='none'
    sameSite: 'none',               // Allows cross-site requests (Netlify → Render)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/',                      // available on all routes
  });
  
  console.log('✅ Auth cookie set with cross-site support');
}