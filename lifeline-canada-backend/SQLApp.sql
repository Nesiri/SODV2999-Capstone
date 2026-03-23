
-- 1. USER & AUTHENTICATION (The "Account" Branch)

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL, -- Stored via bcrypt/argon2
    country_code VARCHAR(10) DEFAULT 'US',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    display_name VARCHAR(100),
    meditation_goal_minutes INT DEFAULT 10,
    bio TEXT,
    avatar_url TEXT
);

CREATE TABLE user_sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    session_token TEXT UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 2. CONTENT & MODULES (The "Resources" Branch)

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- e.g., 'PTSD/Trauma', 'Youth Support'
    parent_id INT REFERENCES categories(category_id) -- For sub-categories
);

CREATE TABLE resources (
    resource_id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categories(category_id),
    title VARCHAR(255) NOT NULL,
    content_type VARCHAR(50), -- 'Video', 'Audio', 'PDF', 'Interactive'
    content_body TEXT,        -- For "Words of Wisdom" or "Blogs"
    media_url TEXT,           -- For "Nature Sounds" or "Video Modules"
    is_crisis_related BOOLEAN DEFAULT FALSE
);

-- 3. MENTAL LOGGING & AI (The "Dashboard" Branch)

CREATE TABLE daily_mental_logs (
    log_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
    mood_score INT CHECK (mood_score BETWEEN 1 AND 10),
    trigger_note TEXT,       -- "Trigger Review"
    reaction_note TEXT,      -- "Reaction Recognition"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ai_interactions (
    interaction_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    user_message TEXT,
    ai_response TEXT,
    sentiment_detected VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 4. SUPPORT & HELP (The "Get Help" Branch)

CREATE TABLE support_hotlines (
    hotline_id SERIAL PRIMARY KEY,
    name VARCHAR(100),       -- e.g., 'Military & Veteran', 'LGBTQES'
    phone_number VARCHAR(25),
    web_url TEXT,
    country_code VARCHAR(10),
    priority_color VARCHAR(20) DEFAULT 'blue' -- "Emergency Color Indicators"
);

-- 5. TRACKING (The "History" Branch)

CREATE TABLE activity_history (
    activity_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    resource_id INTEGER REFERENCES resources(resource_id),
    completion_status VARCHAR(20) DEFAULT 'started', -- 'completed', 'saved'
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);