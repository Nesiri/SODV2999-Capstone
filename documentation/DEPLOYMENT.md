
---


```markdown
# Deployment Guide

This guide covers deploying the Lifeline Canada App frontend and backend to production.

---

## Deployment Overview

| Component | Recommended Platform | Free Tier |
|-----------|---------------------|-----------|
|Backend (API) | Render, Railway | ✅ Works, but free tier has sleep mode after inactivity and can be slow under high load
| Frontend (UI) | Netlify, Vercel | ✅ Yes |
| Database | Neon, Supabase | ✅ Yes |

---

## Part 1: Database Deployment (Neon)

### Step 1: Create Neon Account

1. Go to [Neon.tech](https://neon.tech)
2. Sign up with GitHub or email

### Step 2: Create Project

1. Click **New Project**
2. Name: `lifeline-canada-prod`
3. Choose region closest to your users
4. Click **Create Project**

### Step 3: Get Connection String

1. Click **Connection Details**
2. Copy the connection string:


## Part 2: Backend Deployment (Render)
GStep 1: Create a Web Service

Go to Render.com
.
Click New + → Web Service.
Connect your GitHub repository.
Set Base Directory to:
lifeline-canada-backend

Step 2: Configure the Service

Name: lifeline-canada-api
Environment: Node
Build Command:
npm install && npm run build
Start Command:
npm start

Step 3: Add Environment Variables

Variable	Value
DATABASE_URL	Your Neon connection string
PORT	3000
FRONTEND_URL	Your frontend URL (after deployment)

## Part 3: Frontend Deployment (Netlify)
Deploy on Netlify
Step 1 Go to Netlify.com

Click Add new site 

Connect to GitHub

Select your repository

Configure:

Base directory: lifeline-canada-app

Build command: npm run build

Publish directory: dist

Step 2: Add Environment Variables
Variable	Value
VITE_GOOGLE_CLIENT_ID	Your Google OAuth Client ID
VITE_RECAPTCHA_SITE_KEY	Your reCAPTCHA Site Key
VITE_API_BASE	Your Render backend URL