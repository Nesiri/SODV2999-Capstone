import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (
    email: string
  ) => Promise<{ ok: boolean; error?: string; info?: string }>;
  onSwitchToSignup?: () => void;
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onSwitchToSignup,
  className = 'mb-20',
}) => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem('rememberedEmail') || '';
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [info, setInfo] = useState('');
  const [rememberMe, setRememberMe] = useState(() => {
    return !!localStorage.getItem('rememberedEmail');
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Await the onSubmit handler which should return { ok, error }
    const result = await onSubmit(email);

    if (!result.ok) {
      setFormError(result.error ?? 'Login failed');
      setInfo(result.info ?? '');
      // Auto-clear error after 5 seconds
      setTimeout(() => setFormError(null), 5000);
      setTimeout(() => setInfo(''), 10000);
    } else {
      setFormError(null);
    }
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setRememberMe(checked);

    if (!checked) {
      localStorage.removeItem('rememberedEmail');
    }
  };

  return (
    <div className={className}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
        <p className="text-gray-600 text-sm mt-1">
          Enter your email to continue
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B266C9] focus:border-[#89009B]"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="w-4 h-4 text-[#89009B] rounded border-gray-300 focus:ring-[#B266C9]"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#89009B] to-[#B266C9] hover:from-[#7a0088] hover:to-[#a355b8] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          <span>Login</span>
          <ArrowRight size={18} />
        </button>
      </form>

      {onSwitchToSignup && (
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-[#89009B] hover:text-[#B266C9] font-medium hover:underline transition-colors"
          >
            Sign up
          </button>
        </p>
      )}
    </div>
  );
};

export default LoginForm;
