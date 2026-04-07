
---


```markdown
# Environment Variables Guide

This guide explains all environment variables required for the Lifeline Canada App and how to obtain them.

---

## Overview

| Scope | File | Prefix |
|-------|------|--------|
| Frontend | `lifeline-canada-app/.env` | `VITE_` |
| Backend | `lifeline-canada-backend/.env` | none |

---

## Frontend Environment Variables

### Required Variables

| Variable | Description | How to Get |
|----------|-------------|------------|
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth client ID | Google Cloud Console |
| `VITE_RECAPTCHA_SITE_KEY` | reCAPTCHA site key | Google reCAPTCHA Admin |
| `VITE_API_BASE` | Backend API URL | Your deployed backend URL |

### Template

```env
# Required - Google OAuth
VITE_GOOGLE_CLIENT_ID=________________________

# Required - reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=________________________

# Development (default)
VITE_API_BASE=http://localhost:3000

# Production (uncomment and fill)
# VITE_API_BASE=https://your-backend-url.com

How to Get Google OAuth Credentials
Go to Google Cloud Console

Create a new project or select existing

Enable Google+ API (or People API)

Go to Credentials → Create Credentials → OAuth Client ID

Application type: Web application

Add authorized JavaScript origins:

http://localhost:5173 (development)

https://your-domain.com (production)

Add authorized redirect URIs:

http://localhost:5173 (development)

https://your-domain.com (production)

Copy the Client ID

How to Get reCAPTCHA Keys
Go to Google reCAPTCHA Admin

Click + Create

Label: Lifeline Canada

Type: reCAPTCHA v2 → "I'm not a robot" Checkbox

Domains: localhost, 127.0.0.1, your-domain.com

Copy the Site Key

How to Get a Database URL
Option A: Neon (Recommended)

Sign up at Neon.tech

Create a new project

Copy connection string from Connection Details

Option B: Supabase

Sign up at Supabase

Create a new project

Go to Project Settings → Database → Copy URI