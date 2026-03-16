const express = require("express");
const pool = require("../database");

const router = express.Router();


// create mental log
router.post("/", async (req, res) => {

  const { user_id, mood_score, trigger_note, reaction_note } = req.body;

  const result = await pool.query(
    `INSERT INTO daily_mental_logs
     (user_id,mood_score,trigger_note,reaction_note)
     VALUES ($1,$2,$3,$4)
     RETURNING *`,
    [user_id, mood_score, trigger_note, reaction_note]
  );

  res.json(result.rows[0]);
});


// get logs
router.get("/:user_id", async (req, res) => {

  const result = await pool.query(
    `SELECT *
     FROM daily_mental_logs
     WHERE user_id=$1
     ORDER BY created_at DESC`,
    [req.params.user_id]
  );

  res.json(result.rows);
});

module.exports = router;