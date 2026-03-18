// components/dashboard/Header.tsx
import React from 'react';
import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  user: {
    name: string;
  };
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur-xl border-b border-teal-100/60 z-30 w-full ] ">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-teal-50 rounded-lg lg:hidden transition-colors"
        >
          <Menu className="w-5 h-5 text-teal-600" />
        </button>

        <div className=" relative right-10 sm:right-50 flex items-center gap-3 ml-auto ">
          {/* Notifications */}
          <button className="p-2 hover:bg-teal-50 rounded-lg relative transition-colors ">
            <Bell className="w-5 h-5 text-teal-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
