# Lifeline Canada App
A full-stack web application with **React + TypeScript + Vite** frontend and **Node.js + Express** backend, designed to provide support services through a secure web platform.
---
## 📝 Overview / Purpose
**What the project is:** Lifeline Canada is a secure web platform providing support services, including authentication, communication, and resource access, in a safe and scalable environment.
**Why it exists:** To offer a reliable, user-friendly platform for Canadians in need of support services while ensuring privacy, security, and maintainability.
**High-level architecture / workflow:**
- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- Auth & Security: Google OAuth, reCAPTCHA, CORS
- Flow: Frontend → Backend → Database → Response
---
## 📦 Installation & Setup
### Prerequisites
- Node.js 18+
- npm 9+
- PostgreSQL (Neon recommended)
### Steps
```bash
git clone https://github.com/your-username/lifeline-canada.git
cd lifeline-canada
cd lifeline-canada-backend
cp .env.example .env
npm install
npm run dev
cd ../lifeline-canada-app
cp .env.example .env
npm install
npm run dev
```
> Note: Ensure all environment variables in `.env` files are properly set. See [Environment Variables Guide](docs/ENVIRONMENT_VARIABLES.md).
---
## 🚀 Usage
### How to Use the Application
1. Access frontend via http://localhost:5173 (Vite default)
2. Authenticate with Google OAuth
3. Navigate the platform to access support services
### Common Commands
```bash
# Start backend development server
npm run dev
# Start frontend development server
npm run dev
```
---
## ✨ Features
- Google OAuth authentication
- reCAPTCHA protection
- REST API backend with Express
- PostgreSQL database
- Environment-based configuration
- CORS restricted to frontend domain
---
## 🛠️ Tech Stack
| Layer | Technology |
|------|-----------|
| Frontend | React + TypeScript + Vite |
| Backend | Node.js + Express |
| Database | PostgreSQL (Neon recommended) |
| Auth | Google OAuth |
| Security | reCAPTCHA, CORS |
