
---

## Updated Main `README.md`

```markdown
# Lifeline Canada App

A full-stack web application with React + TypeScript + Vite frontend and Node.js + Express backend, designed to provide support services through a secure web platform.

⚠️ **IMPORTANT:** This repository has been/will be transferred to the Lifeline Canada organization. All environment variables shown in this document are **test/demo values only**. The new owner must regenerate ALL credentials before production deployment.

---

## 📚 Documentation

For detailed instructions, please refer to the documentation in the `docs/` folder:

| Document | Description |
|----------|-------------|
| [GitHub Transfer Guide](docs/GITHUB_TRANSFER.md) | How to transfer repository ownership |
| [Database Transfer Guide](docs/DATABASE_TRANSFER.md) | How to transfer Neon PostgreSQL database |
| [Environment Variables Guide](docs/ENVIRONMENT_VARIABLES.md) | Complete environment setup instructions |
| [Security Checklist](docs/SECURITY_CHECKLIST.md) | Post-transfer security actions required |
| [Deployment Guide](docs/DEPLOYMENT.md) | How to deploy frontend and backend |

---

## Quick Start

### For the New Owner (After Transfer)

1. Accept GitHub transfer invitation (check email)
2. Read the [Security Checklist](docs/SECURITY_CHECKLIST.md)
3. Create new credentials for everything
4. Set up your database following [Database Transfer Guide](docs/DATABASE_TRANSFER.md)
5. Update all `.env` files following [Environment Variables Guide](docs/ENVIRONMENT_VARIABLES.md)
6. Deploy following [Deployment Guide](docs/DEPLOYMENT.md)

### For Development (After Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/lifeline-canada.git
cd lifeline-canada

# Set up backend
cd lifeline-canada-backend
cp .env.example .env
# Edit .env with your database URL
npm install
npm run dev

# Set up frontend (new terminal)
cd lifeline-canada-app
cp .env.example .env
# Edit .env with your credentials
npm install
npm run dev


Features
Google OAuth authentication

reCAPTCHA protection

REST API backend with Express

PostgreSQL database

Environment-based configuration

CORS restricted to frontend domain

Tech Stack
Layer	Technology
Frontend	React + TypeScript + Vite
Backend	Node.js + Express
Database	PostgreSQL (Neon recommended)
Auth	Google OAuth
Security	reCAPTCHA, CORS
⚠️ Critical Security Reminder
The test credentials in this README and in .env.example files are publicly exposed and must NEVER be used in production.

The new owner MUST:

Create new Google OAuth credentials

Generate new reCAPTCHA keys

Set up a new database (DO NOT use the test URL)

Use their own domain URLs for CORS

