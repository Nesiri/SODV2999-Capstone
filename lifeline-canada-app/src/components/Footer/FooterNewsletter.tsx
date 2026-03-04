import { type FormEvent, useState, useRef } from 'react';
import {
  Mail,
  ArrowRight,
  Shield,
  Sparkles,
  Send,
  CheckCircle,
} from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function FooterNewsletter() {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [email, setEmail] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Replace with your actual site key from Google reCAPTCHA admin panel
  const RECAPTCHA_SITE_KEY = '6Ldo5GwsAAAAAMRKPm2bqCoxbEnt4aQI05rU9vL2';

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
      alert('Please verify you are human');
      return;
    }

    // Get the captcha token to verify on your backend
    // const token = recaptchaRef.current?.getValue();

    // Here you would send the token to your backend for verification
    // const verification = await fetch('/api/verify-captcha', {
    //   method: 'POST',
    //   body: JSON.stringify({ token })
    // });

    setIsEmailSubmitted(true);
    setTimeout(() => setIsEmailSubmitted(false), 5000);

    // Reset captcha after submission
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setCaptchaVerified(false);
    }
    setEmail('');
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-indigo-900/30 border-y border-blue-700/30 backdrop-blur-sm">
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")]`}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Header Card */}
              <div className="flex flex-col items-center gap-2 mb-4 p-3 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 rounded-xl backdrop-blur-sm border border-blue-700/30 w-full">
                {/* Icon and Title Row */}
                <div className="flex items-center gap-2 w-full justify-center">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg shrink-0">
                    <Send className="text-white" size={18} />
                  </div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                      Stay Connected
                    </h3>
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-blue-200 text-xs">
                  Join{' '}
                  <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-300 to-green-400 bg-clip-text text-transparent">
                    Our
                  </span>{' '}
                  Newsletter
                </p>
              </div>

              {/* Description */}
              <p className="text-blue-200 text-xs sm:text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed px-2">
                Receive exclusive mental health resources, inspiring stories,
                and community updates directly to your inbox.
                {/* Features - Vertical on mobile, horizontal on larger screens */}
                <span className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mt-3">
                  <span className="text-[10px] sm:text-xs text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-full w-full sm:w-auto text-center">
                    🎁 Monthly giveaways
                  </span>
                  <span className="text-[10px] sm:text-xs text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-full w-full sm:w-auto text-center">
                    📚 Free e-books
                  </span>
                  <span className="text-[10px] sm:text-xs text-blue-300 bg-blue-900/30 px-3 py-1.5 rounded-full w-full sm:w-auto text-center">
                    🧠 Expert insights
                  </span>
                </span>
              </p>
            </div>

            {/* Email Form with Google reCAPTCHA */}
            <div className="w-full lg:w-auto">
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute sm:w-[600px] -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200" />

                <div className="relative sm:w-[600px] flex flex-col gap-4 p-4 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-blue-700/30">
                  {/* reCAPTCHA Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-200">
                        Human Verification
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <div
                        style={{
                          transform: 'scale(0.8)',
                          transformOrigin: 'center',
                        }}
                      >
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={handleCaptchaChange}
                          onExpired={handleCaptchaExpired}
                          theme="dark"
                        />
                      </div>
                    </div>

                    {captchaVerified && (
                      <div className="flex items-center gap-2 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verification successful</span>
                      </div>
                    )}
                  </div>

                  {/* Email Input - Only enabled after reCAPTCHA verification */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-200">
                        Email Address
                      </span>
                      {!captchaVerified && (
                        <span className="text-xs text-yellow-400/70">
                          (Complete reCAPTCHA first)
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={
                          captchaVerified
                            ? 'Enter your email'
                            : "Verify you're human first"
                        }
                        required
                        disabled={!captchaVerified}
                        className={`w-full pl-12 pr-6 py-4 rounded-xl bg-white/5 border text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300 ${
                          captchaVerified
                            ? 'border-blue-500/20'
                            : 'border-gray-600/30 opacity-50 cursor-not-allowed'
                        }`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!captchaVerified || !email || isEmailSubmitted}
                    className="relative overflow-hidden group/btn px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isEmailSubmitted ? 'Subscribed!' : 'Subscribe'}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${isEmailSubmitted ? 'rotate-45 scale-0' : 'group-hover/btn:translate-x-1'}`}
                      />
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </button>
                </div>

                {isEmailSubmitted && (
                  <div className="absolute -bottom-8 left-0 right-0 text-center">
                    <p className="text-green-400 text-sm animate-fadeIn">
                      🎉 Welcome to our community! Check your email for
                      confirmation.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
