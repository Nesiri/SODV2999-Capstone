const express = require("express");
const pool = require("../database");

const router = express.Router();


// get all resources
router.get("/", async (req, res) => {

  const result = await pool.query(
    `SELECT resources.*, categories.name AS category
     FROM resources
     LEFT JOIN categories
     ON resources.category_id = categories.category_id`
  );

  res.json(result.rows);
});


// crisis resources
router.get("/crisis", async (req, res) => {

  const result = await pool.query(
    `SELECT * FROM resources
     WHERE is_crisis_related = TRUE`
  );

  res.json(result.rows);
});

module.exports = router;