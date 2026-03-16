const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../database");

const router = express.Router();


// signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (email, password_hash)
       VALUES ($1,$2)
       RETURNING user_id,email`,
      [email, password_hash]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).send("Signup failed");
  }
});


// login
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const result = await pool.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    );

    if (result.rows.length === 0)
      return res.status(401).json({ error: "Invalid login" });

    const user = result.rows[0];

    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid)
      return res.status(401).json({ error: "Invalid login" });

    res.json({
      message: "Login successful",
      user_id: user.user_id
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Login failed");
  }
});

module.exports = router;