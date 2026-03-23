import pool from "../config/db.js";

// Get all users
export const getAllUsers = async () => {
  const result = await pool.query("SELECT id, name, email, is_verified, created_at FROM users");
  return result.rows;
};

// Get user by ID
export const getUserById = async (id) => {
  const result = await pool.query(
    "SELECT id, name, email, is_verified, created_at FROM users WHERE id = $1", 
    [id]
  );
  return result.rows[0];
};

// Create new user (with verification token)
// In userModel.js - update createUser to accept null token
export const createUser = async (name, email, verificationToken = null) => {
  const query = `
    INSERT INTO users (name, email, verification_token, is_verified, created_at)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING id, name, email, is_verified
  `;
  
  // If verificationToken is null, set is_verified to true (for Google users)
  const isVerified = verificationToken === null;
  
  const values = [name, email, verificationToken, isVerified];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Find user by email
export const getUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT id, name, email, is_verified, verification_token, created_at FROM users WHERE email = $1", 
    [email]
  );
  return result.rows[0];
};

// Check if email exists
export const checkEmail = async (email) => {
  const result = await pool.query("SELECT 1 FROM users WHERE email = $1", [email]);
  return result.rowCount > 0;
};

// Find user by verification token
export const getUserByVerificationToken = async (token) => {
  const result = await pool.query(
    "SELECT id, name, email FROM users WHERE verification_token = $1 AND is_verified = false",
    [token]
  );
  return result.rows[0];
};

// Verify user email
export const verifyUserEmail = async (userId) => {
  const result = await pool.query(
    `UPDATE users 
     SET is_verified = true, verification_token = NULL, verified_at = NOW() 
     WHERE id = $1 
     RETURNING id, name, email, is_verified, verified_at`,
    [userId]
  );
  return result.rows[0];
};

// Update user
export const updateUser = async (id, name, email) => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email, is_verified",
    [name, email, id]
  );
  return result.rows[0];
};

// Delete user
export const deleteUser = async (id) => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

// Check if user is verified
export const isUserVerified = async (email) => {
  const result = await pool.query(
    "SELECT is_verified FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0]?.is_verified || false;
};

// Resend verification - update token
export const updateVerificationToken = async (email, newToken) => {
  const result = await pool.query(
    "UPDATE users SET verification_token = $1 WHERE email = $2 RETURNING id, email",
    [newToken, email]
  );
  return result.rows[0];
};