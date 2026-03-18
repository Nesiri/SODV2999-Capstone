// components/dashboard/Footer.tsx
import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  quote?: string;
  showQuote?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  quote = 'Healing takes time, and every small step forward is progress.',
  showQuote = true,
}) => {
  return (
    <footer className="mt-8 text-center">
      {showQuote && (
        <p className="text-sm text-gray-400 italic mb-2">"{quote}"</p>
      )}
      <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Mindful Support</span>
        <Heart className="w-3 h-3 text-rose-300" />
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
