**File Location:** lifeline-canada-backend/utils/emailService.js

To make the email verification system work, the company must set up environment variables for both Render production and local development.

**Render Production:**  
Log in to https://dashboard.render.com → go to your backend service → Environment → Environment Variables → add the following:  
EMAIL_USER = the email address that will send verification emails  
EMAIL_PASS = the password for that email account; 

if using Gmail with 2FA enabled, generate an app password by following these steps:  
1. Sign in to your Google account at https://myaccount.google.com/  
2. Go to Security → App passwords  
3. Under "Select app," choose "Mail"  
4. Under "Select device," choose "Other (Custom name)" and type a name like "Lifeline Backend"  
5. Click Generate → Google will show a 16-character app password  
6. Copy this app password and use it as EMAIL_PASS in Render and local `.env`  
FRONTEND_URL = the frontend URL where users click to verify their email (e.g., https://yourfrontend.com)  

After adding these variables in Render, save and redeploy or restart the backend service so the new values take effect.

**Local Development:**  
Create a `.env` file at the root of the backend project and add the same variables exactly as above, for example:  
EMAIL_USER=no-reply@yourcompany.com  
EMAIL_PASS=your-16-character-app-password  
FRONTEND_URL=https://yourfrontend.com  

Then restart the backend server to apply these environment variables.

**Important Notes:**  
The email account must support SMTP sending.  
FRONTEND_URL must exactly match the frontend verification route.  
Without these variables, the `sendVerificationEmail` function in lifeline-canada-backend/utils/emailService.js will not work and verification emails will not be sent.

Once configured correctly, the system will automatically use these values to send verification emails to users.
