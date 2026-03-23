// components/MoreDropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';

interface NavLinkType {
  name: string;
  path: string;
  icon?: React.ReactNode;
  emergency?: boolean;
  hasMegaMenu?: boolean;
}

interface MoreDropdownProps {
  dropdownLinks: NavLinkType[];
  triggerText?: string;
  className?: string;
}

function useDelayedClose(initialState = false, delay = 300) {
  const [isOpen, setIsOpen] = useState(initialState);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const close = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isOpen, open, close, setIsOpen };
}

export default function MoreDropdown({
  dropdownLinks,
  triggerText = 'More',
  className = '',
}: MoreDropdownProps) {
  const { isOpen, open, close, setIsOpen } = useDelayedClose(false, 300);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={open}
      onMouseLeave={close}
      onKeyDown={handleKeyDown}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${triggerText} menu`}
      >
        {triggerText}
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop for closing dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown menu */}
          <div className="absolute left-1 right-0 mt-2 w-56 z-50">
            {/* Layer 1: Base background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-gray-500/30 to-white rounded-lg shadow-xl border border-gray-200" />

            {/* Layer 2: Content container with solid background */}
            <div className="relative bg-gradient-to-br from-pink-100 via-gray-100 to-white backdrop-blur-sm rounded-lg overflow-hidden animate-in slide-in-from-top-5 fade-in duration-200">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="more-menu-button"
              >
                {dropdownLinks.map((link) => (
                  <div
                    key={link.path}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <NavLink
                      link={link}
                      onClick={handleLinkClick}
                      className="block text-gray-700 hover:text-blue-600 transition-colors duration-150"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
