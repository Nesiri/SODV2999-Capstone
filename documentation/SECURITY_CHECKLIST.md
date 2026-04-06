
---


```markdown
# Security Checklist for New Owner

After accepting the GitHub repository transfer, complete ALL items below before deploying to production.

---

## ⚠️ Critical: Credentials to Replace

| Credential | Location | Action |
|------------|----------|--------|
| Google OAuth Client ID | Frontend `.env` | Create new in Google Cloud Console |
| Google OAuth Secret | Backend | Create new, NEVER use old |
| reCAPTCHA Site Key | Frontend `.env` | Generate new keys |
| Database URL | Backend `.env` | Create new database |

---

## Phase 1: Immediate Actions (First Hour)

### 1. Revoke Old Credentials

- [ ] **Google Cloud Console** - Delete the test OAuth client
- [ ] **reCAPTCHA Admin** - Delete the test site key
- [ ] **Neon Database** - Change password immediately if claimed

### 2. Create New Credentials

- [ ] **Google OAuth Credentials**
  - [ ] Create new OAuth 2.0 Client ID
  - [ ] Add authorized JavaScript origins
  - [ ] Add authorized redirect URIs
  - [ ] Save Client ID and Client Secret

- [ ] **reCAPTCHA Keys**
  - [ ] Create new site
  - [ ] Select reCAPTCHA v2 (Checkbox)
  - [ ] Add your domains
  - [ ] Save Site Key and Secret Key

### 3. Set Up New Database

- [ ] Create Neon account
- [ ] Create new project
- [ ] Get connection string
- [ ] Test connection

### 4. Update Environment Files

- [ ] **Frontend `.env`** - Replace ALL test values
- [ ] **Backend `.env`** - Replace ALL test values

---

## Phase 2: Repository Security (First Day)

### GitHub Settings

- [ ] Review collaborators - remove unauthorized users
- [ ] Set up branch protection for `main` branch
- [ ] Enable Dependabot alerts
- [ ] Enable secret scanning

### GitHub Actions / CI/CD

- [ ] Review existing workflows
- [ ] Set up repository secrets
- [ ] Add security scanning to CI

---

## Phase 3: Deployment Security (Before Launch)

### Backend Security

- [ ] Set environment variables in hosting dashboard
- [ ] Verify CORS configuration
- [ ] Add rate limiting
- [ ] Add Helmet.js for security headers
- [ ] Validate all user inputs

### Frontend Security

- [ ] Add Content Security Policy headers
- [ ] Force HTTPS in production
- [ ] Rebuild after changing environment variables

### Database Security

- [ ] Change default passwords
- [ ] Enable SSL/TLS (`?sslmode=require`)
- [ ] Restrict IP access (allow only backend IP)
- [ ] Set up automated backups

---

## Phase 4: Pre-Launch Testing

### Manual Tests

- [ ] Can log in with Google
- [ ] Session persists correctly
- [ ] Database operations work (CRUD)
- [ ] CORS works (no errors)





# Check dependencies for vulnerabilities
npm audit