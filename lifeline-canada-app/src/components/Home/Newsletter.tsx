import { type FormEvent, useState, useRef } from 'react';
import {
  Mail,
  ArrowRight,
  Shield,
  Send,
  CheckCircle,
  User,
} from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function Newsletter() {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

 

// Add a helpful error message if missing
if (!RECAPTCHA_SITE_KEY) {
  console.error('RECAPTCHA_SITE_KEY is missing in environment variables');
}

  const handleCaptchaChange = (token: string | null) => {
    if (token) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleCaptchaExpired = () => {
    setCaptchaVerified(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      return;
    }

    setIsEmailSubmitted(true);
    setTimeout(() => setIsEmailSubmitted(false), 5000);

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setCaptchaVerified(false);
    }
    setName('');
    setEmail('');
  };

  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 lg:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%236b7280%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Soft gradient orbs - Calming colors */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#a5d8ff]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#b8c7e7]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4e2f0]/20 rounded-full blur-3xl"></div>
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        id="news-letter"
      >
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2c3e50]/5 backdrop-blur-sm rounded-full border border-[#2c3e50]/10 mb-4">
              <span className="text-sm text-[#2c3e50]">
                Never miss an update
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#4a6b8a] bg-clip-text text-transparent">
                Join Our Newsletter
              </span>
            </h2>
            <p className="text-[#4a5568] text-lg">
              Gentle reminders and helpful resources, delivered with care.
            </p>
          </div>

          {/* Single Card */}
          <div className="relative group">
            {/* Soft glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#a5d8ff]/30 via-[#b8c7e7]/30 to-[#cbd5e1]/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 p-8 lg:p-10 shadow-xl">
              {/* Newsletter Subscription Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2c3e50]/5 rounded-full border border-[#2c3e50]/10">
                  <Send className="w-4 h-4 text-[#2c3e50]" />
                  <h3 className="text-lg font-semibold text-[#2c3e50]">
                    Newsletter Subscription
                  </h3>
                </div>
              </div>

              {/* reCAPTCHA Section */}
              <div className="bg-[#f1f9ff] rounded-xl p-6 border border-[#a5d8ff]/30 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#2c3e50]" />
                  <span className="text-sm font-medium text-[#2c3e50]">
                    Security Verification
                  </span>
                  {captchaVerified && (
                    <span className="text-xs bg-[#98c1d9]/20 text-[#2c3e50] px-2 py-1 rounded-full ml-auto">
                      Verified ✓
                    </span>
                  )}
                </div>

                <div className="flex justify-center mb-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                    onExpired={handleCaptchaExpired}
                    theme="light"
                    className="scale-90 transform"
                  />
                </div>

                {!captchaVerified && (
                  <p className="text-xs text-[#64748b] text-center">
                    Please complete verification to subscribe
                  </p>
                )}
              </div>

              {/* Name and Email Inputs */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b] w-5 h-5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      captchaVerified ? 'Your name' : 'Verify reCAPTCHA first'
                    }
                    required
                    disabled={!captchaVerified}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#cbd5e1] rounded-xl text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64748b] w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      captchaVerified
                        ? 'your.email@example.com'
                        : 'Verify reCAPTCHA first'
                    }
                    required
                    disabled={!captchaVerified}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#cbd5e1] rounded-xl text-[#1e293b] placeholder-[#94a3b8] focus:outline-none focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  disabled={isEmailSubmitted}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#2c3e50] to-[#4a6b8a] hover:from-[#34495e] hover:to-[#5d7ea3] text-white rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isEmailSubmitted ? 'Sent!' : 'Subscribe to Newsletter'}
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`}
                  />
                </button>

                {isEmailSubmitted && (
                  <div className="flex items-center gap-2 text-[#2c3e50] bg-[#d4e2f0] p-4 rounded-lg animate-fadeIn">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">
                      Thanks {name || 'for subscribing'}! Check your inbox.
                    </span>
                  </div>
                )}
              </form>

              {/* Decorative Elements - Soft colors */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a5d8ff]/20 to-[#b8c7e7]/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d4e2f0]/20 to-[#cbd5e1]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes to your global CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
