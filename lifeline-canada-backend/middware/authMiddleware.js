// middlewares/authMiddleware.js
import jwtPkg from 'jsonwebtoken';
const {  verify } = jwtPkg;

function authMiddleware(req, res, next) {
  const token = req.cookies?.token;
  //console.log({decode:token})

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || 'secretkey');
    //console.log({decoded})
    req.user = decoded; // attach user info to req
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export default authMiddleware;