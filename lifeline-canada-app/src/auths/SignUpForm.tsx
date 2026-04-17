import React, { useState } from 'react';
import { Mail, User, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SignUpFormProps {
  onSubmit: (
    data: SignUpData
  ) => Promise<{ ok: boolean; error?: string; info?: string }>;
  onSwitchToLogin?: () => void;
  className?: string;
}

interface SignUpData {
  fullName: string;
  email: string;
  agreedToTerms: boolean;
  signupMethod: 'email' | 'google';
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  onSwitchToLogin,
  className = '',
}) => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<SignUpData>({
    fullName: '',
    email: '',
    agreedToTerms: false,
    signupMethod: 'email',
  });

  const [info, setInfo] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? e.target.checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setFormError('Please agree to the Terms of Service and Privacy Policy');
      setTimeout(() => setFormError(null), 5000);
      return;
    }

    setFormError(null);

    const result = await onSubmit({
      ...formData,
      signupMethod: 'email',
    });

    if (!result.ok) {
      setFormError(result.error ?? 'Something went wrong');
      setTimeout(() => setFormError(null), 5000);
      return;
    } else {
      setInfo(result.info ?? '');
      setFormData({
        fullName: '',
        email: '',
        agreedToTerms: false,
        signupMethod: 'email',
      });
      setTimeout(() => setInfo(''), 10000);
    }
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Start Your Wellness Journey
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          No password needed we'll send a link
        </p>
        {formError && (
          <p className="text-red-600 text-sm mt-2 bg-red-50 p-2 rounded-lg">
            {formError}
          </p>
        )}
        {info && (
          <p className="text-green-600 text-sm mt-2 bg-green-50 p-2 rounded-lg">
            {info}
          </p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f2d85] focus:border-[#5f2d85]"
              placeholder="Your name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f2d85] focus:border-[#5f2d85]"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Terms Agreement */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="w-4 h-4 !text-[#5f2d85] rounded border-gray-300 focus:ring-[#5f2d85] mt-1 flex-shrink-0"
              required
            />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <Link
                to="/privacy?mode=termsofservice"
                className="!text-[#5f2d85] hover:!text-[#5f2d85] hover:underline transition-colors"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy?mode=privacy"
                className="!text-[#5f2d85] hover:!text-[#5f2d85] hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        {/* Submit Button - White text on purple background */}
        <button
          type="submit"
          disabled={!formData.agreedToTerms}
          className="w-full !bg-[#5f2d85] hover:bg-[#7a0088] text-white font-normal py-3 px-4 rounded-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <span className="text-white">Sign Up</span>
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform text-white"
          />
        </button>
      </form>

      {/* Info Box */}
      <div className="mt-6 bg-[#f5edf7] rounded-lg p-4">
        <p className="text-xs !text-[#5f2d85] flex items-start gap-2">
          <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            <strong>No password needed!</strong> We'll email you a secure
            sign-in link. This keeps your account safe and reduces things to
            remember.
          </span>
        </p>
      </div>

      {/* Switch to Login */}
      {onSwitchToLogin && (
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="!text-[#5f2d85] hover:!text-[#5f2d85] font-medium hover:underline transition-colors"
          >
            Sign in
          </button>
        </p>
      )}
    </div>
  );
};

export default SignUpForm;
