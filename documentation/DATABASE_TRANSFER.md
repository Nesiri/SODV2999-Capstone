# Database Setup Guide for New Owner

## Recommended Approach: Create Your Own Database in Neon

Instead of transferring the existing database (which contains test data only), **the new owner should create their own fresh database in Neon**. This is:

- ✅ **Safer** - No risk of exposing old credentials
- ✅ **Cleaner** - Start with no test data
- ✅ **Easier** - Use Neon's built-in SQL Editor
- ✅ **Faster** - Takes only 5 minutes

---

## Database Schema Location

The database schema file is located at:
lifeline-canada-backend/.sql/users_table.sql

text

This file contains the complete SQL schema for creating the `users` table with all indexes and triggers.

---

## Step-by-Step: Create Database Using Neon SQL Editor

### Step 1: Create a Neon Account

1. Go to [Neon.tech](https://neon.tech)
2. Sign up using GitHub, Google, or email
3. Verify your email address

### Step 2: Create a New Project

1. Click **New Project**
2. Project name: `thelifelinecanada`
3. Select a region (choose the closest to your users)
4. Click **Create Project**

### Step 3: Open the SQL Editor

1. In your Neon project dashboard, click **SQL Editor** (left sidebar)
2. You'll see a blank query editor

### Step 4: Get the SQL Schema

**Option A: Copy from your local file**

Open the file on your computer:
lifeline-canada-backend/.sql/users_table.sql

text

Copy the entire contents.

**Option B: Copy from below**

If you can't access the file, copy this SQL schema:

```sql
-- Create database
CREATE DATABASE Thelifelinecanada;

-- Create users table (without password)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    verification_token VARCHAR(255),
    is_verified BOOLEAN DEFAULT false,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Create index for faster email lookups
CREATE INDEX idx_users_email ON users(email);

-- Optional: Create index for verification token lookups
CREATE INDEX idx_users_verification_token ON users(verification_token);

-- Optional: Create index for verification status
CREATE INDEX idx_users_is_verified ON users(is_verified);

-- Optional: Add a trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();



Step 5: Run the SQL Schema
Paste the SQL code into the Neon SQL Editor

Click Run (or press Ctrl+Enter / Cmd+Enter)

Wait for success message

Step 6: Get Your Connection String
Click Connection Details (top right of dashboard)

Copy the connection string:

text
postgresql://username:password@ep-xxx-pooler.region.neon.tech/neondb?sslmode=require
Step 7: Update Backend .env File
In your backend .env file (lifeline-canada-backend/.env):

env
# Replace with YOUR connection string from Neon
DATABASE_URL=postgresql://your_username:your_password@ep-xxx-pooler.region.neon.tech/neondb?sslmode=require

PORT=3000
FRONTEND_URL=https://your-frontend-url.com