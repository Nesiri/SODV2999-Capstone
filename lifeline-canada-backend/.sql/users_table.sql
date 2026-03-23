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