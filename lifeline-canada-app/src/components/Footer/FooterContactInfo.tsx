import { type ReactNode, useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check } from 'lucide-react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
  emergency?: boolean;
  isEmail?: boolean;
  onCopy?: () => void;
  showCopySuccess?: boolean;
}

function ContactInfo({
  icon,
  title,
  value,
  subtitle,
  emergency = false,
  isEmail = false,
  onCopy,
  showCopySuccess = false,
}: ContactInfoProps) {
  const handleEmailClick = () => {
    if (isEmail) {
      window.location.href = `mailto:${value}`;
    }
  };

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the email redirect
    if (isEmail && onCopy) {
      onCopy();
    }
  };

  return (
    <div className="group bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-700/30 p-4 sm:p-5 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div
          className={`p-2 sm:p-2.5 rounded-lg ${emergency ? 'bg-red-500/20' : 'bg-blue-500/20'}`}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-blue-100">
            {title}
          </h4>
          {emergency && (
            <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 sm:py-1 rounded-full">
              Emergency
            </span>
          )}
        </div>
      </div>

      <div className="relative">
        <p
          className={`text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors break-words ${isEmail ? 'cursor-pointer hover:underline' : ''}`}
          onClick={isEmail ? handleEmailClick : undefined}
        >
          {value}
        </p>

        {isEmail && (
          <span
            onClick={handleCopyClick}
            className="absolute right-0 top-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            {showCopySuccess ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-blue-400 hover:text-blue-300" />
            )}
          </span>
        )}
      </div>

      {/* Copy success message */}
      {showCopySuccess && (
        <div className="text-xs text-green-400 animate-in fade-in mt-1">
          Email copied to clipboard!
        </div>
      )}

      <p className="text-xs sm:text-sm text-blue-300">{subtitle}</p>
    </div>
  );
}

export default function FooterContactInfo() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    const email = 'support@thelifelinecanada.org';
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <div className="sm:w-[700px] px-2 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        <ContactInfo
          icon={<Phone className="text-blue-400" size={18} />}
          title="Crisis Support"
          value="988"
          subtitle="24/7 Crisis Line"
          emergency
        />
        <ContactInfo
          icon={<Mail className="text-blue-400" size={18} />}
          title="Email"
          value="support@thelifelinecanada.org"
          subtitle="Response within 24h"
          isEmail
          onCopy={handleCopyEmail}
          showCopySuccess={copiedEmail}
        />
        <ContactInfo
          icon={<MapPin className="text-blue-400" size={18} />}
          title="Location"
          value="Kelowna, British Columbia, Canada"
          subtitle="Nationwide Support"
        />
      </div>
    </div>
  );
}
