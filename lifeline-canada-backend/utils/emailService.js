import nodemailer from 'nodemailer';
import crypto from 'crypto';

export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Create transporter automatically for prod or dev
const getTransporter = async () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Real Gmail / production
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Dev: Ethereal test account
    const testAccount = await nodemailer.createTestAccount();
    console.log("Ethereal test account created:");
    console.log("User:", testAccount.user);
    console.log("Pass:", testAccount.pass);

    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
};

export const sendVerificationEmail = async (email, name, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  const transporter = await getTransporter();

  const mailOptions = {
    from: `"🌿 Thelifelinecanada" <${process.env.EMAIL_USER || 'hello@mindfulsupport.com'}>`,
    to: email,
    subject: '✨ Welcome to The Lifelinecanada Support – Verify Your Email',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
          }
          
          .container {
            max-width: 520px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 32px;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
            padding: 40px 32px 32px;
            text-align: center;
          }
          
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
            letter-spacing: -0.5px;
            color: #ffffff;
          }
          
          .header p {
            margin: 8px 0 0;
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
          }
          
          .content {
            padding: 40px 32px;
            background: #ffffff;
          }
          
          .greeting {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 16px;
          }
          
          .message {
            color: #4b5563;
            margin-bottom: 24px;
            font-size: 16px;
          }
          
          .quote {
            background: #f3f4f6;
            border-left: 4px solid #a78bfa;
            padding: 16px 20px;
            margin: 24px 0;
            border-radius: 12px;
            font-style: italic;
            color: #374151;
            font-size: 15px;
          }
          
          .button-container {
            text-align: center;
            margin: 32px 0;
          }
          
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            padding: 16px 36px;
            border-radius: 40px;
            box-shadow: 0 8px 20px -5px rgba(167, 139, 250, 0.4);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px -5px rgba(167, 139, 250, 0.5);
          }
          
          .fallback-link {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            padding: 16px;
            margin: 24px 0;
            word-break: break-all;
            font-size: 14px;
            color: #6b7280;
          }
          
          .features {
            display: flex;
            justify-content: space-between;
            margin: 32px 0;
            padding: 24px 0;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .feature {
            text-align: center;
            flex: 1;
          }
          
          .feature-icon {
            font-size: 24px;
            margin-bottom: 8px;
          }
          
          .feature-text {
            font-size: 13px;
            color: #6b7280;
            font-weight: 500;
          }
          
          .footer {
            background: #f9fafb;
            padding: 32px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          
          .footer p {
            margin: 8px 0;
            color: #6b7280;
            font-size: 13px;
          }
          
          .footer-links {
            margin: 16px 0;
          }
          
          .footer-links a {
            color: #8b5cf6;
            text-decoration: none;
            font-size: 13px;
            margin: 0 12px;
          }
          
          .footer-links a:hover {
            text-decoration: underline;
          }
          
          .note {
            background: #fff7ed;
            border-radius: 12px;
            padding: 16px;
            margin: 24px 0;
            font-size: 14px;
            color: #9a3412;
          }
          
          .heart {
            color: #ec4899;
          }
          
          @media only screen and (max-width: 600px) {
            .container {
              margin: 20px;
              border-radius: 24px;
            }
            
            .content {
              padding: 32px 24px;
            }
            
            .features {
              flex-direction: column;
              gap: 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header with calming gradient -->
          <div class="header">
            <h1>🌿 Mindful Support</h1>
            <p>Your safe space for mental wellness</p>
          </div>
          
          <!-- Main Content -->
          <div class="content">
            <div class="greeting">
              Hello ${name} ✨
            </div>
            
            <div class="message">
              Thank you for taking this gentle step toward your mental wellness journey. 
              We're honored to be part of your path to healing and self-discovery.
            </div>
            
            <!-- Soothing Quote -->
            <div class="quote">
              "Healing is not linear, and neither is this journey. Take all the time you need, 
              and be gentle with yourself along the way."
            </div>
            
            <!-- Verification Button -->
            <div class="button-container">
              <a href="${verificationUrl}" class="button">
                ✨ Verify Your Email
              </a>
            </div>
            
            <!-- Features Preview -->
            <div class="features">
              <div class="feature">
                <div class="feature-icon">🌱</div>
                <div class="feature-text">Track Mood</div>
              </div>
              <div class="feature">
                <div class="feature-icon">🧘</div>
                <div class="feature-text">Breathing Exercises</div>
              </div>
              <div class="feature">
                <div class="feature-icon">📝</div>
                <div class="feature-text">Private Journal</div>
              </div>
            </div>
            
            <!-- Gentle Reminder -->
            <div class="note">
              <strong>💫 No pressure, no rush</strong>
              <p style="margin: 8px 0 0; font-size: 14px;">
                Your journey is yours alone. This email will be here whenever you're ready to verify.
                If today isn't the day, that's completely okay.
              </p>
            </div>
            
            <!-- Fallback Link (for email clients that block buttons) -->
            <div class="fallback-link">
              <strong style="display: block; margin-bottom: 8px;">🔗 Link for verification:</strong>
              <a href="${verificationUrl}" style="color: #8b5cf6; word-break: break-all;">
                ${verificationUrl}
              </a>
            </div>
            
           
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <div style="margin-bottom: 16px;">
              <span style="color: #ec4899; font-size: 20px;">❤️</span>
            </div>
            <p style="font-weight: 500; color: #374151;">You're not alone on this journey</p>
            
            <p style="font-size: 12px; margin-top: 16px;">
              If you didn't create this account, you can safely ignore this email.<br>
              Your peace of mind matters to us.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log(`✨ Verification email sent to ${email}`);

  // If using Ethereal, log the preview URL so you can test in browser
  if (!process.env.EMAIL_USER) {
    console.log("📧 Preview URL:", nodemailer.getTestMessageUrl(info));
    console.log("💡 Open this URL in your browser to see the email");
  }
  
  return info;
};