import React, { useState } from 'react';
import { ChevronDown, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceLink {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
  category?: string;
  featured?: boolean;
  emergency?: boolean;
}

interface ResourcesDropdownMobileProps {
  resourceLinks: ResourceLink[];
  triggerText: string;
  emergency?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function ResourcesDropdownMobile({
  resourceLinks,
  triggerText,
  emergency = false,
  icon = null,
  onClick,
}: ResourcesDropdownMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onClick) onClick();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-3">
      {/* SUPER VIBRANT TRIGGER - Definitely shows color */}
      <button
        onClick={toggleDropdown}
        className={`w-full flex items-center justify-between p-5 rounded-2xl
          transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95
          ${
            emergency
              ? 'bg-gradient-to-br from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white border-2 border-red-300'
              : 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white border-2 border-blue-300'
          }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Bright Icon */}
          <div
            className={`p-3.5 rounded-2xl ${
              emergency
                ? 'bg-white text-red-600 shadow-lg'
                : 'bg-white text-blue-600 shadow-lg'
            }`}
          >
            <span className="text-3xl">
              {icon || (emergency ? '🔥' : '🌟')}
            </span>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-black mb-1">{triggerText}</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-90">
                {resourceLinks.length} items
              </span>
              {emergency && (
                <span
                  className="px-3 py-1 text-xs font-black bg-white/30 
                  backdrop-blur-sm rounded-full flex items-center gap-1"
                >
                  <Zap className="w-3 h-3" />
                  URGENT
                </span>
              )}
            </div>
          </div>
        </div>

        <ChevronDown
          className={`w-7 h-7 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* VIBRANT DROPDOWN */}
      {isOpen && (
        <div className="mt-3 bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden">
          {/* Bright Header */}
          <div
            className={`px-5 py-4 ${
              emergency
                ? 'bg-gradient-to-r from-red-100 to-orange-100'
                : 'bg-gradient-to-r from-blue-100 to-purple-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-gray-900">{triggerText}</h4>
              <span className="px-3 py-1.5 bg-white rounded-full font-bold text-sm shadow">
                {resourceLinks.length}
              </span>
            </div>
          </div>

          {/* Colorful Links */}
          <div className="p-4 space-y-3">
            {resourceLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="flex items-center gap-4 p-4 rounded-xl 
                  border border-gray-200 hover:border-blue-400 
                  hover:shadow-lg transition-all duration-200 
                  hover:translate-x-1 active:bg-blue-50 group"
              >
                {/* Colored Icon */}
                <div
                  className={`p-3.5 rounded-xl shadow-md ${
                    link.emergency
                      ? 'bg-gradient-to-r from-red-200 to-red-300 text-red-700'
                      : link.featured
                        ? 'bg-gradient-to-r from-yellow-200 to-amber-300 text-amber-800'
                        : 'bg-gradient-to-r from-blue-200 to-blue-300 text-blue-700'
                  }`}
                >
                  <span className="text-2xl">
                    {typeof link.icon === 'string'
                      ? link.icon
                      : link.icon || '📄'}
                  </span>
                </div>

                {/* Link Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 text-base truncate">
                      {link.name}
                    </span>
                    {link.featured && (
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  {link.category && (
                    <span
                      className="text-xs font-medium px-3 py-1 
                      bg-gray-100 text-gray-700 rounded-full"
                    >
                      {link.category}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div
                  className={`p-2 rounded-full ${
                    link.emergency
                      ? 'bg-red-100 text-red-600'
                      : link.featured
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
