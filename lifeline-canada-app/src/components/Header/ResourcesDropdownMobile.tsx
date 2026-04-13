import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceLink {
  name: string;
  path: string;
  icon?: string | React.ReactNode;
  category?: string;
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onClick) onClick();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-3" ref={dropdownRef}>
      {/* Trigger button with purple colors */}
      <button
        onClick={toggleDropdown}
        className={`w-full flex items-center justify-between p-5 rounded-2xl
          transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95
          ${
            emergency
              ? 'bg-gradient-to-br from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white border-2 border-red-300'
              : 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white border-2 border-purple-300'
          }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3.5 rounded-2xl ${
              emergency
                ? 'bg-white text-red-600 shadow-lg'
                : 'bg-white text-purple-600 shadow-lg'
            }`}
          >
            <span className="text-3xl">
              {icon || (emergency ? '🔥' : '🌟')}
            </span>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-black mb-1 !text-[#89009B] ">{triggerText}</h3>
            <div className="flex items-center gap-3">
              
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

      {/* Dropdown with purple color scheme */}
      {isOpen && (
        <div className="mt-3 bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden">
          {/* Header with purple gradient */}
          <div
            className={`px-5 py-4 ${
              emergency
                ? 'bg-gradient-to-r from-red-100 to-orange-100'
                : 'bg-gradient-to-r from-purple-100 to-purple-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg !text-[#89009B]">{triggerText}</h4>
              <span className="px-3 py-1.5 bg-white rounded-full font-bold text-sm shadow">
                {resourceLinks.length}
              </span>
            </div>
          </div>

          {/* Links with purple color styling */}
          <div className="p-4 space-y-3">
            {resourceLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="flex items-center gap-4 p-4 rounded-xl 
                  border border-gray-200 hover:border-purple-400 
                  hover:shadow-lg transition-all duration-200 
                  hover:translate-x-1 active:bg-purple-50 group"
              >
                {/* Icon with purple gradient */}
                <div
                  className={`p-3.5 rounded-xl shadow-md ${
                    link.emergency
                      ? 'bg-gradient-to-r from-red-200 to-red-300 text-red-700'
                      : 'bg-gradient-to-r from-purple-200 to-purple-300 text-purple-700'
                  }`}
                >
                  <span className="text-2xl">
                    {typeof link.icon === 'string'
                      ? link.icon
                      : link.icon || '📄'}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold !text-[#89009B] text-base truncate">
                      {link.name}
                    </span>
                    
                  </div>
                  {link.category && (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full
                        ${
                          link.emergency
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {link.category}
                    </span>
                  )}
                </div>

                <div
                  className={`p-2 rounded-full ${
                    link.emergency
                      ? 'bg-red-100 text-red-600'
                      : 'bg-purple-100 text-purple-600'
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