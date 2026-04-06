Markdown
# Lifeline Canada App

A full-stack web application with **React + TypeScript + Vite** frontend and **Node.js + Express** backend, designed to provide support services through a secure web platform.

⚠️ **IMPORTANT:** This repository has been or will be transferred to the Lifeline Canada organization. All environment variables shown in this document are **test/demo values only**. The new owner must regenerate **all credentials** before production deployment.

---

## 📝 Overview / Purpose

**What the project is:**  
Lifeline Canada is a secure web platform providing support services, including authentication, communication, and resource access, in a safe and scalable environment.  

**Why it exists:**  
To offer a reliable, user-friendly platform for Canadians in need of support services while ensuring privacy, security, and maintainability.  

**High-level architecture / workflow:**  
- **Frontend:** React + TypeScript + Vite for interactive UI  
- **Backend:** Node.js + Express handling REST API requests  
- **Database:** PostgreSQL for secure data storage  
- **Auth & Security:** Google OAuth, reCAPTCHA, and CORS protection  
- Requests flow from frontend → backend → database → frontend response  

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+  
- npm 9+  
- PostgreSQL (Neon recommended)  
- Optional: Docker for containerized setup  

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/lifeline-canada.git
cd lifeline-canada

# Backend setup
cd lifeline-canada-backend
cp .env.example .env
# Edit .env with your database URL and credentials
npm install
npm run dev

# Frontend setup (new terminal)
cd ../lifeline-canada-app
cp .env.example .env
# Edit .env with frontend credentials
npm install
npm run dev
Note: Ensure all environment variables in .env files are properly set. See Environment Variables Guide.
🚀 Usage
How to Use the Application
Access frontend via http://localhost:5173 (Vite default)
Authenticate with Google OAuth
Navigate the platform to access support services
Common Commands
Bash
# Start backend development server
npm run dev

# Start frontend development server
npm run dev
✨ Features
Google OAuth authentication
reCAPTCHA protection
REST API backend with Express
PostgreSQL database
Environment-based configuration
CORS restricted to frontend domain
🛠️ Tech Stack
Layer
Technology
Frontend
React + TypeScript + Vite
Backend
Node.js + Express
Database
PostgreSQL (Neon recommended)
Auth
Google OAuth
Security
reCAPTCHA, CORS
