import React, { useState } from 'react';
import { ChevronUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DropdownLink {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
}

interface MoreDropdownMobileProps {
  dropdownLinks: DropdownLink[];
  triggerText: string;
  onClick?: () => void;
}

export default function MoreDropdownMobile({
  dropdownLinks,
  triggerText,
  onClick,
}: MoreDropdownMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onClick) onClick();
  };

  return (
    <div className="w-full border-b border-gray-100/50 last:border-b-0">
      {/* Premium Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="group w-full flex items-center justify-between p-5 rounded-2xl 
          bg-gradient-to-r from-white/80 via-purple-50/30 to-pink-50/30
          hover:from-purple-50/80 hover:to-pink-50/80 backdrop-blur-sm 
          border border-gray-100 hover:border-purple-200 hover:shadow-xl 
          transition-all duration-500 hover:-translate-y-1 active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-purple-500/30"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div
            className="p-3.5 rounded-xl bg-gradient-to-br from-purple-50/80 to-pink-50/80 
            group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500"
          >
            <span className="text-purple-600 group-hover:scale-110 transition-transform duration-500">
              ⋯
            </span>
          </div>
          <div className="text-left">
            <span className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
              {triggerText}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              Additional features & tools
            </p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp
            className="w-5 h-5 text-gray-400 group-hover:text-purple-600 
            transition-all duration-500"
          />
        ) : (
          <ChevronRight
            className="w-5 h-5 text-gray-400 group-hover:text-purple-600 
            group-hover:translate-x-2 transition-all duration-500"
          />
        )}
      </button>

      {/* Premium Dropdown Content */}
      {isOpen && (
        <div className="mt-3 ml-4 pl-4 border-l border-purple-200/50 space-y-2">
          {dropdownLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className="group block p-4 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-sm 
                border border-gray-100 hover:border-purple-200 hover:shadow-lg 
                transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-purple-500/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                {link.icon && (
                  <div
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-50/80 to-pink-50/80 
                    group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-500"
                  >
                    <span className="text-lg">
                      {typeof link.icon === 'string' ? link.icon : link.icon}
                    </span>
                  </div>
                )}
                <span
                  className="font-semibold text-gray-800 group-hover:text-purple-700 
                  transition-colors flex-1"
                >
                  {link.name}
                </span>
                <ChevronRight
                  className="w-4 h-4 text-gray-400 opacity-0 
                  group-hover:opacity-100 group-hover:translate-x-1
                  transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
