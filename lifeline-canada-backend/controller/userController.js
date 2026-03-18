import {setAuthCookie} from "../utils/authCookies.js";
import * as User from "../model/userModel.js";
import { generateVerificationToken, sendVerificationEmail } from "../utils/emailService.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id || req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST signup
export const signup = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Check if email already exists
    const emailExists = await User.checkEmail(email);
    if (emailExists) {
      return res.status(400).json({ ok: false, error: "Email already exists" });
    }

    // Generate verification token
    const verificationToken = generateVerificationToken();

    // Create user with verification token
    const newUser = await User.createUser(name, email, verificationToken);

    // Send verification email (don't await - let it run in background)
    sendVerificationEmail(email, name, verificationToken)
      .catch(err => console.error('Background email error:', err));

    res.status(201).json({ 
      ok: true, 
      message: "User created successfully. Please check your email to verify your account.",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET verify email
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    //console.log({token})

    if (!token) {
      return res.status(400).json({ ok: false, error: "Verification token is required" });
    }

    // Find user by token
    const user = await User.getUserByVerificationToken(token);
   // console.log({user})

    if (!user) {
      return res.status(400).json({ ok: false, error: "Invalid or expired verification token" });
    }

    // Verify user
    const verifiedUser = await User.verifyUserEmail(user.id);
    console.log({verifiedUser})

    res.json({ 
      ok: true, 
      message: "Email verified successfully",
      user: verifiedUser
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST login (now just email check)
export const login = async (req, res) => {
  
  try {
    const { email } = req.body;
    //console.log({email})
    
    if (!email) {
      return res.status(400).json({ ok: false, error: "Email is required" });
    }

    const user = await User.getUserByEmail(email);
    //console.log({user})
    
    if (!user) {
      return res.status(400).json({ ok: false, error: "User not found" });
    }

    // Check if user is verified
    if (!user.is_verified) {
         // Send verification email (don't await - let it run in background)
      sendVerificationEmail(email, user.name, user.verification_token)
      .catch(err => console.error('Background email error:', err));
      return res.status(400).json({ 
        ok: false, 
        error: "Please verify your email first",
        needsVerification: true,
        email: user.email,
        info: "Check your inbox, spam, or junk folder for the verification email",
      });
    }

  // Set JWT cookie
  setAuthCookie(res, user);
    res.json({ 
      ok: true, 
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }, 
     
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST social login (Google)
export const socialLogin = async (req, res) => {
  try {
    const { email, name, googleId } = req.body;
    
    if (!email) {
      return res.status(400).json({ ok: false, error: "Email is required" });
    }

    // Check if user exists
    let user = await User.getUserByEmail(email);
    
    // CASE 1: New user - create account
    if (!user) {
      const newUser = await User.createUser(name, email, null);
      await User.verifyUserEmail(newUser.id); // Auto-verify for Google
      user = await User.getUserByEmail(email);
      
 // Set JWT cookie
  setAuthCookie(res, user);
      return res.json({ 
        ok: true, 
        message: "Account created successfully",
        isNewUser: true,
        user: { id: user.id, name: user.name, email: user.email }, 
   
      });
    }

    // CASE 2: Existing unverified user - verify now
    if (!user.is_verified) {
      await User.verifyUserEmail(user.id);
    }

  // Set JWT cookie
  setAuthCookie(res, user);

    res.json({ 
      ok: true, 
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email }, 
   
    });

  } catch (err) {
    console.error("❌ Social login error:", err);
    res.status(500).json({ 
      ok: false, 
      error: "Server error during social login" 
    });
  }
};

// POST resend verification email
export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ ok: false, error: "User not found" });
    }

    if (user.is_verified) {
      return res.status(400).json({ ok: false, error: "Email already verified" });
    }

    // Generate new verification token
    const newToken = generateVerificationToken();
    await User.updateVerificationToken(email, newToken);

    // Send new verification email
    await sendVerificationEmail(email, user.name, newToken);

    res.json({ 
      ok: true, 
      message: "Verification email resent successfully" 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT update profile
export const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.params.id;

    // Check if email is being changed and if it's already taken
    if (email) {
      const existingUser = await User.getUserByEmail(email);
      if (existingUser && existingUser.id !== parseInt(userId)) {
        return res.status(400).json({ ok: false, error: "Email already in use" });
      }
    }

    const updatedUser = await User.updateUser(userId, name, email);
    res.json({ 
      ok: true, 
      message: "Profile updated successfully",
      user: updatedUser 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ ok: true, message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

