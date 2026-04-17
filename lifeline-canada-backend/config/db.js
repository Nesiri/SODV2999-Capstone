import pkg from "pg";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const { Pool } = pkg;

console.log("Attempting to connect to Neon...");
console.log("Database URL exists:", !!process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Neon
    require: true
  },
  // Add connection timeout
  connectionTimeoutMillis: 10000, // 10 seconds
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    console.error("❌ Error connecting to Neon:", err.message);
    console.error("Full error:", err);
    return;
  }
  console.log("✅ Successfully connected to Neon PostgreSQL!");
  release();
});

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err);
});

export default pool;