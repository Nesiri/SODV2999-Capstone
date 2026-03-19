// components/dashboard/Footer.tsx

import { Heart } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="mt-8 text-center">
     
      <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Mindful Support</span>
        <Heart className="w-3 h-3 text-rose-300" />
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
