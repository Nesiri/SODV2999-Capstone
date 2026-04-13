// components/dashboard/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, X } from 'lucide-react';
import type { SidebarProps } from '../../../types/dashboard.types';

import DashboardLogo from './DashboardLogo';

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  user,
  navItems,
  onLogout,
}) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Reduced width */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-xl border-r border-[#B266C9]/20 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      >
        {/* Header with compact layout */}
        <div className="p-4 border-b border-[#B266C9]/20">
          <div className="flex items-center justify-between">
            <DashboardLogo />
            <button onClick={onClose} className="block lg:hidden">
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* User Info - Compact */}
        <div className="p-4 border-b border-[#B266C9]/20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#f5edf7] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-base font-medium text-[#89009B]">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 truncate text-sm">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation - Compact */}
        <nav className="p-2 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg transition-all
                ${
                  location.pathname === item.path
                    ? '!bg-[#f5edf7] !text-[#89009B]'
                    : '!text-gray-600 hover:!bg-[#f5edf7] hover:text-[#89009B]'
                }
              `}
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-[#f5edf7] text-[#89009B] text-[10px] px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout - Compact */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[#B266C9]/20 bg-white/50">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-[#89009B] hover:bg-[#f5edf7] rounded-lg transition-colors text-xs"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;